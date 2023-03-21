---
tags: google cloud run
---
# 部署node.js app服務到 Google Cloud Run

[[toc]]

之前使用的Heroku託管的node.js app服務已經終止免費方案，這次嘗試將line-bot這包執行在Cloud Run。

## 使用Google Cloud CLI
參照官方教學，在下載好Cloud CLI後要執行install.sh腳本來安裝。
![](https://i.imgur.com/BmCTrHO.png)

```shell=
sh install.sh
```

## 對應執行app服務的npm腳本
在官方範例中，是預設**npm run start**來執行。所以在專案中的package.json中，需要加上如下。
```json
{
    ...,
  "scripts": {
    "start": "node index.js" //進入點的js
  },
}
```

## 添加Dockerfile的配置
在官網文件中，並沒有明確提示要配置，但在實際部署後會有錯誤提示有關無法對應到部署後的8080port。目前猜測是Cloud Run的部署預設是走Docker Container的方式，要訪問會需要先有Docker Image的配置。

![](https://i.imgur.com/idFaf6t.png)

## 在專案目錄執行CLI部署指令
- 初始化：需要在Google Cloud Run後台先建立專案

- 部署：會有一個對應的問答(服務名稱、選擇部署區域)

```shell
gcloud init ## 初始化

gcloud run deploy ## 部署
```

這裡的指令還有相關參數可以配合[**其他部署方式**](https://cloud.google.com/run/docs/deploying-source-code?hl=zh-cn)使用。

## 救活的豆皮頻道 
[https://line-bot-dopee-zhy7lseifa-an.a.run.app/](https://line-bot-dopee-zhy7lseifa-an.a.run.app/)

[Cloud Run監控服務的後台](https://console.cloud.google.com/run/detail/asia-northeast1/line-bot-dopee/metrics?project=line-bot-380902)

## 相關資源
[部署node.js GCR官方範例程式碼](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/4000d1a341cbfcec12cc433c10b11d3fbd1a59df/run/helloworld)

[部署node.js GCR官方文件](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service?hl=zh-cn#whats-next)

[安裝gcloud CLI](https://cloud.google.com/sdk/docs/install)