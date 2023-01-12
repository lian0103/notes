---
tags: 實作
---
# LineBot API串接

[[toc]]

使用nodeJS 和 Express 套件架設基礎的http服務。並串接line-bot message API。
實作功能:line官方帳號訊息回覆和紀錄、推播文字和圖片訊息。     
[demo](https://line-bot-doope.herokuapp.com/)     

[API docs](https://line-bot-doope.herokuapp.com/api-docs/#/)
## Message Hook
:::tip
1.官方範例是啟一個express app應來並且監聽https的Post /callback，來接收官方line所收到的訊息。
2.串接line bot message API 需要使用https連線方式
本地開發時，借助ngrok可以建立一個對外的https url 指向給本地的服務對外使用
:::


## line bot sdk模組與使用
```javascript
const line = require("@line/bot-sdk");
const config = {
  channelAccessToken: "來自line developer",
  channelSecret: "來自line developer",
};
const client = new line.Client(config);
// 此client物件可用來回傳訊息
```

## 監聽 Post /callback
```javascript
app.post("/callback", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});
```

:::tip
當有line訊息傳給官方line後，需要在line developer設定設有監聽服務的地址
本次實作的例子 Webhook URL 是設置為  https://line-bot-doope.herokuapp.com/callback
:::

## 圖片推播
參考官方Message API 文件的圖片訊息格式，可以加入靜態資源(圖片)的url
同在express app 做http GET的監聽，並利用express app的res.sendFile()傳送圖檔

:::tip
利用nodeJS 架設能提供靜態資源服務的應用
:::

[express API 官方文件 res.sendFile](http://expressjs.com/en/api.html#res.sendFile)

---

## 連結

[完整程式碼](https://github.com/lian0103/line-bot-dopee)

[豆皮官方line 管理台](https://manager.line.biz/account/@928wyrpi)

[line developer //開發者管理API服務](https://developers.line.biz/console/channel/1656497673/basics)

[使用Node.js建置你的第一個LINE BOT](https://medium.com/pyradise/%E4%BD%BF%E7%94%A8node-js%E5%BB%BA%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bline-bot-590b7ba7a28a)
[讓本地https 服務指向localhost:port](https://dashboard.ngrok.com/get-started/setup)

[官方line bot nodeJS範例](https://github.com/line/line-bot-sdk-nodejs/tree/next/examples/echo-bot)
