---
tags: 學習
title: Nuxt3App顏色模式
---
# Nuxt3App顏色模式

[[toc]]

透過html結構裡的上下層繼承變數的特性，當上層變數指向的背景色、文字色改變時，下層的樣式即可響應。


## css配置

在document html樹狀結構中，html或body都可以作為綁定的上層。這裡預設一個body預設的樣式對照，使用了css變數的語法(ex. --mode-text-color:rgba(0, 0, 0, 0.8);)；而另一個深色模式則是多了一個class名稱的body。
```css
body.light-mode {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  --mode-text-color: rgba(0, 0, 0, 0.8);
  --mode-text-color-hover: #6d28d9;
  --border-color: #ccc;
}
body.dark-mode {
  background-color: #091a28;
  color: #ebf4f1;
  --mode-text-color: #ebf4f1;
  --mode-text-color-hover: #6d28d9;
  --border-color: #fff;
}

```

## 在html渲染結果對照
<div>
  <img src="https://i.imgur.com/wJ0dg5B.jpg" alt="">
  <img src="https://i.imgur.com/rsP9HC5.jpg" alt="">
</div> 


而在下層的樣式中，就可以使用上層定義好的變量。
```css
.tocBox {
  border-color: var(--border-color);
}

.prose {
  color: var(--mode-text-color);
}
```


## 取得作業系統的顏色模式
瀏覽器可以取得使用者作業系統的顏色模式，再讓javascript來讀取，這部分的資訊儲存於media內。並且多一個監聽事件，在使用者改變系統顏色模式時來響應。
```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches :Boolean

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (event) {
      console.log(event.matches)
  }
```

## 自訂可切換的顏色模式
跟使用者作業系統的顏色模式相對脫鉤，我預想是把顏色模式儲存於瀏覽器的localstorage，對於使用者切換上更便利，不需要再去改動作業系統的顏色模式。

```javascript 
//可以先抓取作業系統的顏色模式
let mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null;

//再抓取使用者存取瀏覽器操作的顏色模式紀錄
mode = localStorage.getItem('app-color-mode') ?? (mode ?? 'light');

//最後去把目標的上層html tag綁定對應顏色模式的class名稱
document.getElementsByTagName('body')[0].setAttribute('class', `${mode}-mode`);

```

## ServerSideRender和ClientSideRender差異
window和document物件必須是在Client端的瀏覽器運行時才能使用，所以當渲染機制是使用SSR時，就必須注意這段取得和判別顏色模式的腳本是在client端發生，才能符合這次介紹的顏色模式機制。

```javascript
//Nuxt3 SSR情境下，判別的腳本寫在onMounted這個hook中
onMounted(() => {
  let mode = localStorage.setItem('nuxt3-app-color-mode', mode) ?? 'light'

  document?.getElementsByTagName('body')[0]?.setAttribute('class', `${mode}-mode`);
});
```

同時在nuxt3框架之下，狀態管理的方式可以這樣使用，來實作切換功能。
```javascript
const colorEnum = {
  DARK: 'dark',
  LIGHT: 'light',
  SEPIA: 'sepia',
};

const appMode = useState('appMode', () => null);

const handleAppMode = () => {
  switch (appMode.value) {
    case colorEnum.LIGHT: {
      appMode.value = colorEnum.DARK;
      break;
    }
    case colorEnum.DARK: {
      appMode.value = colorEnum.SEPIA;
      break;
    }
    case colorEnum.SEPIA: {
      appMode.value = colorEnum.LIGHT;
      break;
    }
  }
  setTimeout(() => {
    addModeClass(appMode.value);
  }, 100);
};
```

## 參考
[Nuxt3內實作完整程式碼](https://github.com/lian0103/nuxt3-notes/blob/main/components/Nav.vue)

[How to Watch for System Dark Mode Changes Using JavaScript and CSS](https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/)

