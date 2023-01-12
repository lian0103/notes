---
tags: 學習
---

# 瞭解 webpack、Vite 的發展脈絡

## webpack

webpack 發展的背景，是由於前端開發領域重視使用模組化標準(commonJS、ECMAScript6(簡稱 ES6))、框架開發應用(vue、react)和新語法導入(ES6、TypeScript、SCSS)，在瀏覽器不能直接解析這些內容的情況下，需要建構工具來編譯成瀏覽器可使用的檔案(ES5、css、html)。

而 webpack 相較於同時期的建構工具(Grunt、Ｇ ulp、Fis3、Rollup)更為流行，是因為 webpack 有著更完整的建構模組的機制，它把一切相依的資源透過遞迴編譯為模組，並搭配載入(loader)和掛載(plugin)的配置使用，讓切分出的模組資源能依情境需求再分割為更小單位的代碼模塊(chunk)。

但隨著專案規模的擴大，開發過程會更明顯感受到透過遞迴每一個倚賴的建構時間變長。

## vite

現階段 vite 的崛起，它著手解決 webpack 的一些缺點。

當瀏覽器採用 ES 模組標準後，在瀏覽器可以直接使用當初不被支援的語法，那相對的 webpack 最初的使用理由之一，將新語法編譯成 ES5 的需求就不再存續，vite 也因為這個新支援的特性，來取代 webpack 的建構機制，特性包含依需求載入當前的倚賴和透過 http 緩存加強的 HMR(熱模塊更新)模式;且結合 rollup 編譯的輸出結果上也有了優化，包含刪除無用倒的代碼(tree-shaking)、懒加载和 chunk 分割。

2022 年 7 月剛發布 vite v3 版本，開始導入 esbuild 來優化建構 css。

## 資料來源

1. JS 高手昇華之路:Webpack 是唯一途徑(2018 年 6 月 出版）<br/>
<img class='imgInMd' src="https://i.imgur.com/dSYvf5A.jpg" alt="html5" />

2. vite v2、v3 官方文檔<br/>
[v3 文檔](https://cn.vitejs.dev/guide/why.html) <br/>
[v2 文檔](https://v2.vitejs.dev/guide/why.html)
