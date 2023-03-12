---
tags: npm git
title: Build GT UI  
---
# GT UI 
[[toc]]

打包一個元件庫，到發佈到公有/私有倉庫空間，目前在工具上導入了vite，也透過協力的同事導入了gulp。


## 元件庫安裝
**npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
安裝時要指定私有倉庫地址，公司外網應可能無法使用。

## 使用GT UI

全域安裝
```javascript
// main.js
// 載入UI的樣式檔和模組
import '@greattree/front-ui/dist/assets/css/index.css';
import GtUI from '@greattree/front-ui';

// 透過use方法會觸發GtUI install
app.use(GtUI).mount('#app');
```

## 開發專案配置
所有元件位於 package結構下。
package
|    
|__ scripts 包含專案使用到的npm、sh腳本
|     
|__ assets 元件包內的靜態資源(font svg scss) 
|     
|__ components 元件包內使用的元件，但沒有列在發佈的元件清單內
|     
|__ gt-components 所有@greattree/front-ui發佈的元件，每個元件再各自有獨立的demo、src夾
|      
|__ components.json 透過**npm run gen:component**新增元件後的元件清單
|      
|__ dist 透過**npm run build**產生的結果
|      
|__ index.js 透過**npm run gen** 、 **npm run build**產生
    
## 指定私有庫(optional)
- 使用 **.npmrc** 設定檔
```
#.npmrc
#指定@greattree package的倉庫地址
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# 使用npm安裝套件時 會優先指向這個私有倉庫 如果沒有才會再去公開庫查找
registry=https://npmrg.greattree.com.tw/repository/npm-gt/
```

## 打包
```shell
npm run gen

npm run build
```
## 發佈

```shell
## 需要輸入帳號 密碼 電子信箱
npm login
npm publish
```

## Tag指令
```shell
## tag目錄
git tag -l

## tag新增
git tag -a v0.0.xx

## tag刪除
git tag -d v0.0.xx

```

## 關於私有庫文章
1. [私有倉的選項](https://zhaomenghuan.js.org/blog/npm-private-repository-verdaccio.html#npm-%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93%E7%9A%84%E5%A5%BD%E5%A4%84)
2. [NPM: verdaccio](https://ithelp.ithome.com.tw/articles/10205616)

## [專案](https://github.com/lian0103/vue-ui)