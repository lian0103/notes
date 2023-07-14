---
tags: JS
head:
  - [meta, { name: description, content: javascript prototype js原型鏈 }]
---

# JS 原型鏈複習

## 建立原型鏈

```javascript
class Count {
  constructor(initNumber) {
    this.total = initNumber;
  }
}

Count.prototype.add = function (num) {
  this.total = this.total + num;
  return this; //回傳this 才可以讓下一個操作繼續
};

Count.prototype.minus = function (num) {
  this.total = this.total - num;
  return this; //回傳this 才可以讓下一個操作繼續
};

Count.prototype.getTotal = function () {
  return this.total;
};

const countInstance = new Count(10);

countInstance.getTotal(); // 10

// 這裡的鏈式，即是透過剛剛返回的this去給下一個方法使用
countInstance.add(100).minus(25).getTotal(); // 85
```

其中，如果不使用 class 語法，也可以使用函式寫法

```javascript
var Count = function (initNumber) {
  this.total = initNumber || 0;
};
```

## 訪問 countInstance 的 Count 原型

範例中，Count 在原型中註冊了 3 個方法，countInstance 可以取來使用。

```javascript
// 訪問Count的prototype
countInstance.__proto__;
//或是
Object.getPrototypeOf(countInstance);
```

```javascript
//結果
{
  add: [Function (anonymous)],
  minus: [Function (anonymous)],
  getTotal: [Function (anonymous)]
}
```

```javascript
// 這裡的等價 表示任何透過Count建立的實體 操作的方法都是指向同一個記憶體位址的方法
countInstance.__proto__ === Count.prototype; //true
```

## 註冊於 prototype 的內容不是 property

在創建出 countInstance 時，total 這個屬性才會被初始化，並依照建構式的腳本賦值。

```javascript
console.log(countInstance); // [class Count]
console.log(countInstance.hasOwnProperty("total")); //true
console.log(countInstance.hasOwnProperty("add")); // false
```
