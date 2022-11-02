---
tags: 學習
---

# MongoDB 本地與雲端

[[toc]]

## 環境安裝

在 windows 本機環境使用 MongoDB，先安裝下列三項:

1. [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   成功安裝後，可以在工作管理員中查看服務的執行狀態。
   ![](https://i.imgur.com/mPIiEdF.png)

2. [MongoDB Compass](https://www.mongodb.com/try/download/compass)
   圖形化操作介面，開啟後的畫面。URI 是 Mongo 產生的連線路徑，而雲端版的 MongoDB Altas 也是使用 URI 去讓應用連線。
   ![](https://i.imgur.com/W8607e1.png)

3. [MongoDB Shell](https://www.mongodb.com/try/download/shell)
   安裝後可以在終端機使用 MongoDB 的指令做操作

```mongosh=
# 開啟mongoDB Shell
mongosh

# 顯示dbs
show dbs

# 切換db
use [db-name]

# db資料指令操作範例
db.itHome.find({author:"ycchiuuuu"}).sort({updateTime:-1})

```

## 匯入資料

以 2022ItHome 鐵人賽的資料來匯入，MongoDB Compass 可以直接匯入 JSON。點擊 ADD DATA，共匯入 4177 筆。
![](https://i.imgur.com/zh5v3la.png)

## MongoDB Shell 操作

基本的查改新刪對應的方法，如 find()、update()、insert()、delete()，搭配可使用的$關鍵字，如 \$in、\$nin、\$set、\$pull、\$push、\$each、\$regex。

```mongosh=
db.itHome.find({ title: {$in: ["源起、需求、技術堆疊"]}})

db.itHome.find({_id:ObjectId("635a2477f12293f1417b1056")})

db.itHome.find({ title: {$regex:/vue|前端|vite/i}})

db.itHome.updateOne({_id:ObjectId("635a2477f12293f1417b1056")},{$set:{tag:[]}})

db.itHome.updateMany({},{$push:{tags:["2022"]}})

```

## MongoDB Driver

在應用中要去連接 MongoDB Server 需要使用 Driver，以 NodeJS 來說，必須先安裝。

```shell
npm install mongodb
```

### 使用 Driver 連線

```javascript
//db.js
const { MongoClient } = require('mongodb');

// 連線到本地的mongoDB server 的 articles (db)
const URI = 'mongodb://localhost:27017/articles';

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb://localhost:27017/articles')
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
```

### 測試連線和查詢結果

```shell
# 執行測試檔
node ./ithome2022/dbTest.js
```

```javascript
//dbTest.js
const { connectToDb, getDb } = require('./db');

connectToDb(async () => {
  const db = getDb();
  let page = 1;
  let perPageLength = 5;
  let content = [];
  content = await db
    .collection('itHome')
    .find({ title: { $regex: /vue|前端|vite/i } })
    .sort({ author: 1 })
    .skip((page - 1) * perPageLength)
    .limit(perPageLength)
    .toArray();

  console.log(content);
});
```

測試另一種aggregate API
```javascript
const { connectToDb, getDb } = require('./db');

const agg = [
  {
    $match: {
      title: {
        $regex: /vue|前端|vite/i,
      },
    },
  },
  {
    $sort: {
      updateTime: -1,
    },
  },
];

connectToDb(async () => {
  const db = getDb();
  let cursor = db.collection('itHome').aggregate(agg);
  const result = await cursor.toArray();

  console.log(result.length);
});

```

## MongoDB 雲端版 Altas

雲端版可以讓應用的 MongoDB Driver 透過 URI 連線，也可以在本地端也支援 MongoDB Compass 來連線。

### Altas 操作流程

1. 線上後台建立專案
   ![](https://i.imgur.com/m28c7nm.png)

2. 建立串接服務 cluster
   依照流程填寫 cluster 名稱、使用者帳密、開放的 IP 地址。在開發階段，要加入自己本機目前的 IP，才可以讓後續操作成功。

- cluster 名稱(articles)
  ![](https://i.imgur.com/JQyyXJw.png)

- 使用者帳密(tester/test1234)
  ![](https://i.imgur.com/h1FizaD.png)

- 開放的 IP 地址(211.23.202.171/32)
  ![](https://i.imgur.com/520o6TN.png)

### 匯入資料給 Altas Cluster

Altas 提供幾種連線方式，包含 MongoDB Shell、MongoDB Driver(如 nodeJS 使用範例可以在應用中使用)、MongoDB Compass..等。這裡目標仿照在本機使用 Compass，將鐵人賽文章匯入。

- 取得 URI，把\<password\>替換成該使用的真實密碼(test1234)
  ![](https://i.imgur.com/gCXJHGx.png)

- 建立新連線
  ![](https://i.imgur.com/shOLJoZ.png)

- 匯入資料結果
  ![](https://i.imgur.com/WzRreia.png)

## 連結

[代碼 nodeServices/ithome2022/](https://github.com/lian0103/nodeServices/tree/main/ithome2022)

[操作語法-\$關鍵字](https://www.mongodb.com/docs/manual/reference/operator/query/or/)

[操作語法-正則](https://blog.csdn.net/xiangwangxiangwang/article/details/88821513)

[Ninja Express CRUD Sample](https://github.com/iamshaunjp/complete-mongodb/blob/lesson-23/app.js)
