---
tags: Web Components
head:
  - [meta, { name: description, content: Web Components Dev }]
---

# 用 Web Components(wc)開發共用/業務元件?

紀錄下有關這個議題的資料

## 2023 稀土掘金開發者論壇

30/Jun/2023，由中國哈嘍前端技術團隊的工程師介紹他們開源的一個項目"[Quark](https://quark.hellobike.com/#/)"

1. 使用 wc 優點  
   a.組件不依賴技術棧框架，解開對技術棧(ex vue2 vue3..)的耦合  
   b.組件包發布後給多個業務專案使用  
   c.可以形成一個獨立沙盒，與其它全局的樣式和腳本隔離。關鍵詞：Shadow Dom

2. Quark 用處  
   a.協助開發者去打造 wc，也支持 ts  
   b.它們也使用這套方案打造以 wc 為基礎的元件庫

## Vue3 官方文件對 wc 說明的重點

[doc](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)

1. Vue 支持 wc 在 Vue 的環境下使用，也支持將 SFC 編譯成 wc （defineCustomElement API）
2. Vue 與原生 wc 使用的 slot 特性並不相同
3. 使用 wc 必須取捨一些 Vue 框架裡生態優點(如聲明式的模板系統、跨組件的狀態管理工具、SSR 模式下更高效的編譯...)

## 嘗試使用 Quark 發佈一個 wc 到 npm

- [npm](https://www.npmjs.com/package/wc-count)
- 初步感受  
  的確如 Vue 官方文件提到的，使用 wc 是將開發更向瀏覽器原生的生態貼近，它會衍生一些技術議題可能是要注意的。這裡列出可能暫時不會選擇使用 wc 的理由:  
   a.跨端、跨多專案、跨技術框架的通用元件/業務元件需求，目前沒有  
   b.一套元件多端支持應該也會有更多設計和開發要注意的細節，目前沒有更深入評估
