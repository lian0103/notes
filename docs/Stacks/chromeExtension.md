---
tags: 學習
head:
  - [meta, { name: description, content: Chrome Extension Manifest V3 }]
---

# Chrome Extension Manifest V3 - 做一個網頁遮罩

透過這個插件，讓當前的網頁插入一個定位固定在最上層的遮罩，同時操控畫面上的 overflow 樣式，讓高度卷軸消失。

## 使用效果

![](./imgs/demo1.png)

- 還可以切換圖片和遮罩背景色

![](./imgs/demo2.png)

## chrome object model 的使用

- runtime

```javascript
// 在chrome 背景執行完成時 do something...
chrome.runtime.onInstalled.addListener(() => {
  // do something ex. 建立插件的操作選單
});
```

- contextMenus

```javascript
// 建立插件的操作選單，contexts可以理解是在點選右鍵時的滑鼠位置的情境(對象)
const contexts = [
  "page",
  "selection",
  "link",
  "editable",
  "image",
  "video",
  "audio",
];

chrome.contextMenus.create({
  title: item.title,
  contexts: contexts,
  id: item.id,
});

// 監聽操作選單的點擊事件
chrome.contextMenus.onClicked.addListener((target) => {
  //...
});
```

- scripting

```javascript
// 在指定tab(網頁)裡執行Fn
chrome.scripting.executeScript({
  target: { tabId: id },
  func: fn,
});
```

- commands

```javascript
// 監聽在manifest.json裡註冊的commands
chrome.commands.onCommand.addListener(handleCommand);
```
