---
tags: 學習
---

# tree元件遞迴實作

[[toc]]

## 資料結構
在tree的資料結構中，parent和child(TreeItem)的關係會如下:
```javascript
//root
Array[TreeItem];

//parent & child
TreeItem:Object{
    label:String,
    value:Boolean,
    children?:Array[TreeItem]
}
```

而為了在元件中記錄操作的狀態，要對tree資料增加屬性，比如collasped(是否為折疊)、isCurrentArea(是否為當前選擇區塊)等等，這依照需求來添加。

```javascript
//parent & child
TreeItem:Object{
    label:String,
    value:Boolean,
    collasped:Boolean,
    isCurrentArea:Boolean,
    children?:Array[TreeItem]
}
```

## 遞迴地資料更新

為了在某一子層節點綁定改變資料狀態的事件，這可能包含改變自己這層、子層、父層或是不直接隸屬的分支，這時則可以選擇從root來做遞迴地資料更新。

**使用vue3 provide和inject API**

實作的方法checkAll，透過vue3 provide API可以提供給子層元件使用，子層則使用inject API來獲得root層的方法。

```javascript 
//root
import { provide } from 'vue';

const checkAll = (arr, value, attr) => {
  // console.log(arr, value);
  arr.forEach((item) => {
    item[attr] = value;
    if (item.children.length > 0) {
      checkAll(item.children, value, attr);
    }
  });
};

provide('checkAll',checkAll)
```

```javascript 
//child
import {inject } from 'vue';

const checkAll = inject('checkAll')
```

## 實作成果
![](https://i.imgur.com/UGrPshk.png)


## 連結
[完整代碼位置](https://github.com/lian0103/vue-ui/tree/main/package/gt-components/tree/src)