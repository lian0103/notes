---
tags: JS
head:
  - [meta, { name: description, content: JS event loop 事件列隊 }]
---

# JS event loop 複習

根據 ChatGPT 的定義，**JavaScript event loop 是確保非同步操作的順利進行的機制，它通過處理事件隊列中的回調函數來確保在單線程下避免阻塞，使得 JavaScript 可以處理大量的非同步任務**

## 事件隊列

所以理論上，在列隊裡會被放入等待處理的非同步操作，像是 setTimeout、setInterval、http request、Promise、async await 等，這些相應的 callback funtion(cb)會被加入到列隊中，來等待執行。

## 事件列隊範例

```javascript
console.log("context start");

setTimeout(() => {
  console.log(2); // 任務二
});
Promise.resolve().then(() => {
  console.log(1); // 任務一
});
setTimeout(() => {
  console.log(3); // 任務三
});

console.log("context end");

// 執行結果
// context start
// context end
// 1
// 2
// 3
```

從執行結果來看，js 的單線程(Single-threaded)，它由文本(context)從上而下，依序的動作是:  
1.印出"context start"  
2.把 setTimeout 到 cb(**宏任務**)放到事件列隊  
3.把 resolve().then 到 cb(**微任務**)放到事件列隊  
4.把 setTimeout 到 cb(**宏任務**)放到事件列隊  
5.印出"context end"  
目前的事件列隊: [任務二(宏任務)、任務一(微任務)、任務三(宏任務)]  
6.依**優先序**執行事件列隊  
ChatGPT:**微任務的執行優先順序要高於宏任務**，也就是說，當主執行緒空閒時，會優先執行微任務，直到微任務隊列為空，才會繼續執行宏任務。這種區分有助於避免長時間運行的宏任務阻塞主執行緒，確保網頁的響應性能。

6-1 印出"1" // 任務一  
6-2 印出"2" // 任務二  
6-3 印出"3" // 任務三

另一個範例，多個微任務與多個宏任務

```javascript
console.log("start");
let i = 0;
while (i < 5) {
  i++;
  setTimeout(() => {
    console.log("in setTimeout", i);
  });
  Promise.resolve().then(() => {
    console.log("in resolve", i);
  });
}
console.log("end");
// start
// end
// in resolve 5
// in resolve 5
// in resolve 5
// in resolve 5
// in resolve 5
// in setTimeout 5
// in setTimeout 5
// in setTimeout 5
// in setTimeout 5
// in setTimeout 5
```

---

相關文章  
[我入职了](https://juejin.cn/post/7258952063219384376)  
[是宏任务先执行还是微任务？-掘金](https://juejin.cn/post/7260059106764963897)
