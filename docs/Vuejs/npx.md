---
tags: 學習
head:
  - [meta, { name: description, content: NPM npx vue3 template }]
---

# 建立 Vuejs 專案模板

版本號: v0.0.10-beta-4  
整理常用的工具/庫，包含 Vite、TailwindCSS、SCSS、Auto Import 等配置。在概念上把他打包成一個 NPM 的 npx 腳手架工具，把模板的結構做 COPY 後來建立新專案。

## 建立專案

```shell=
npx gt-template@[版本號] [projectName] [template]

// ex. npx gt-template Hello

// ex. npx gt-template Hello elementPlus
```

## 啟動結果

![](https://i.imgur.com/yf1U1WV.png)

![](https://i.imgur.com/SrSK4cc.png)

### /Template 預設模板

- Vite
- Vue3
- Vue-router
- Axios
- vueuse/core
- Gsap
- TailwindCSS
- SCSS

### /TemplateElementPlus

- Vite
- Vue3
- Vue-router
- ElementPlus
  已設置[按需打包](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
- Axios
  已封裝 ./utils/request.js
- vueuse/core
- Gsap
- @element-plus/icons-vue
- SCSS
- eslint
- eslint-plugin-vue
- Prettier

**登入與權限驗證流程**  
透過 Vue-Router Guard 管控、Web LocalStorage 和共用 Stores 來實現。

**官方推薦 Pinia**
優點之一 dev tool 整合
![](https://i.imgur.com/uWnUGKd.png)

## VSCODE 設定

- 安裝插件
  Prettier - Code formatter
  ESLint

- \[工作區設定\] 指向在專案內的.prettierrc
  ![](https://i.imgur.com/UAZxPoP.png)

## 相關連結

[gt-template NPM 倉庫](https://www.npmjs.com/package/gt-template)  
[Vite](https://cn.vitejs.dev/)  
[VueRouter](https://router.vuejs.org/)  
[ElementPlus](https://element-plus.org/zh-CN/)
