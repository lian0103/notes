---
tags: 學習
---

# MongoDB指令操作
[[toc]]

## 開啟mongo shell

終端使用指令開啟mongo shell進行對mongo server的操作。

```shell
mongosh 
```
此時會連線至本地的Mongo Server
![](https://i.imgur.com/xwfN6VP.png) 

## dbs、collections操作
```shell!
# 顯示db列表
show dbs

# 進入db
use [dbName]

# 顯示該db下有哪些集合
show collections

```

## doc操作

語法
```shell!
# 查詢
db.[collectionName].find({})

# 新增
db.[collectionName].insertOne({...})

db.[collectionName].insertMany([{...},{...}...])

# 修改
db.[collectionName].updateOne({...})

db.[collectionName].updateMany([{...},{...}...])

# 聚合
db.[collectionName].aggregate([條件1,條件2,...])

```

::: info 
語法提示可在mongo shell打出開頭後，按tab鍵
:::


## 實作

```shell!

# 對inventory集合，新增一筆資料，item Field為'aa1',_id Field為'a123'
# _id一般情況Mongo server會自動添加
db.inventory.insertOne({item:'aa1',_id:'a123'}) 

# 對inventory集合，新增多筆資料
db.inventory.insertMany([{item:'cc1',price:34,size:{h:2,w:10,l:12}},{item:'cc2',price:50,size:{h:1,w:8,l:11}},{item:'cc3',price:100,size:{h:3,w:4,l:12}}])

# 對inventory集合，更新符合條件(第一個參數 item Field為"cc1")的一筆document做更新(第二個參數內容)
db.inventory.updateOne({item:"cc1"},{$set:{"size.w":9,"size.h":11}})

# 對inventory集合，更新符合條件(第一個參數 item Field為"cc1")的所有document做更新(第二個參數內容)
db.inventory.updateMany({item:"cc2"},{$set:{good:true}})

# 查詢itHome集合中，標題Field包含有"前端"的結果
db.itHome.find({title:{$regex:/前端/g}})

# 查詢itHome集合中，標題Field包含有"前端"的結果，顯示其執行的情況
db.itHome.find({title:{$regex:/前端/g}}).explain("executionStats")

# 對itHome集合的標題Field做索引標籤 (可以增加查詢效率)
db.itHome.createIndex({title:1})

# 查詢itHome集合中，標題Field包含有"前端"的結果，限制最多只有10筆
db.itHome.find({title:{$regex:/前端/g}}).limit(10)

# 對itHome篩選條件1(標題Field內有"前端")和條件二(updateTime Field為"2022-10-04")結果
db.itHome.aggregate([{$match : {title:{$regex:/前端/g}}},{$match:{updateTime:"2022-10-04"}}])

# 對itHome篩選條件1(標題Field內有"前端")和條件二(updateTime Field在"2022-10-04"之後)結果，並做分群組條件(不指定Field計算筆數)
db.itHome.aggregate([{$match : {title:{$regex:/前端/g},updateTime:{$gte:"2022-10-04"}}}, {$group:{_id:null,count:{$count:{}}}}])

# 對itHome篩選條件1(標題Field內有"vue")結果，做分群組條件(指定updateTime Field為分類基準做計算筆數)，並指定_id正向排序
db.itHome.aggregate([{$match : {title:{$regex:/vue/g}}}, {$group:{_id:"$updateTime",count:{$count:{}}}},{$sort:{_id:1}}])

```

## 連結
1. [MongoDB course 2022 | MongoDB tutorial](https://www.youtube.com/watch?v=9cWm74DteMQ&ab_channel=Bitfumes)
2. [MongoDB document](https://www.mongodb.com/docs/mongodb-shell/run-commands/)