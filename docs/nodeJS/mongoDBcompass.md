---
tags: 學習
---

# MongoDB儲存職缺資訊

[[toc]]

上回爬取itHome2022鐵人賽文章後，這次拿104的職缺資料來爬取條件「javascript、本日最新」的結果。依據觀察，104目前的搜尋結果，不會完全依照前台給的條件，還會有如優先曝光或推薦職缺的內容會混入。因此，把資料爬取後儲存到MongoDB，再使用Mongo shell語法篩選，看起來比直接使用104介面還「乾淨」。

## 連線MongoDB

```javascript
const { MongoClient } = require('mongodb');

const clientMongo = new MongoClient('mongodb://localhost:27017/articles');

const connectMongo = async () => {
    await clientMongo.connect();
};

const disConnectMongo = async () => {
    await clientMongo.close();
};

module.exports = {
    clientMongo,
    connectMongo,
    disConnectMongo,
};


```

## 寫入MongoDB

這裡的資料儲存方式，是沿用之前爬取資料後寫入json檔，然後我在爬取時註記是否為爬取日期和_id是否存在後，再新增資料，以避免重複。

```javascript
const { clientMongo, connectMongo, disConnectMongo } = require('./db');
const fs = require('fs-extra');
const { resolve } = require('path');
const dayjs = require('dayjs');

async function writeToDB() {
    await connectMongo();
    const file = fs.readFileSync(resolve(__dirname, './data.json'), 'utf-8');
    const fileObject = JSON.parse(file || '{}');
    const promiseArr = [];
    const dataArrForDB = Object.keys(fileObject).map((key) => fileObject[key]) || [];
    dataArrForDB.forEach(async (item) => {
        // console.log(item);
        if (item?.catchdDate === dayjs().format('YYYY-MM-DD')) {
            promiseArr.push(
                new Promise(async (resolve, reject) => {
                    let arr = await clientMongo.db('articles').collection('jobs').find({ _id: item._id }).toArray();
                    if (arr.length == 0) {
                        await clientMongo.db('articles').collection('jobs').insertOne(item);
                        resolve(true);
                    }
                })
            );
        }
    });
    await Promise.all(promiseArr);
    await disConnectMongo();
}

module.exports = {
    writeToDB,
};

```

## MongoDB Compass 
透過介面操作也非常方便。
![](https://i.imgur.com/WxYaVXB.png)

## MongoDB Compass Aggregations
這可以方便增/刪過濾條件，也可即使預覽結果
![](https://i.imgur.com/DMNgmjp.png)


## 補充連結
- [jobsCrawler.js](https://github.com/lian0103/nodeServices/blob/main/services/jobsCrawler.js)
