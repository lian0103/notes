---
tags: 學習
---

# vue3、vite 和 ElementPlus 專案建置

## [安裝流程](https://cn.vitejs.dev/guide/#trying-vite-online)

```shell
# node -v //16.13.0
# npm -v //8.1.0

npm create vite@latest

cd ${folder-name}

npm install

npm run dev

```

啟動結果
![](https://i.imgur.com/oMXZAer.png)

## [vite.config.js](https://cn.vitejs.dev/)

這個設定屬性有插件(plugin)、打包配置(build)、樣式(css)、開發(server)等配置。
以下範例是在專案中使用了 vue3 和[ElementPlus](https://element-plus.gitee.io/en-US/guide/quickstart.html#on-demand-import)、根據不同 mode 參數在打包時做 base 路徑的調整、也在 css 部份加入 sass(這能讓.vue 檔 lang='scss'被解析)。

```javascript
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

export default ({ mode }) => {
  return defineConfig({
    base:
      loadEnv(mode, process.cwd()).VITE_PROJECT_ENV === "stage"
        ? `/${loadEnv(mode, process.cwd()).VITE_PROJECT_NAME}/`
        : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/elementPlusInit.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
            // directives: true,
            // version: "1.2.0-beta.1",
          }),
        ],
      }),
    ],
    build: {
      chunkSizeWarningLimit: 1600,
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  });
};
```

對應在 package.json 的腳本，腳本帶的參數 mode 可讓 vite.config.js 使用。

```json
{
  "scripts": {
    "dev": "vite",
    "stage": "vite --mode stage",
    "build-stage": "vite build  --mode stage",
    "build": "vite build"
  }
}
```

:::warning
在 elementPlus 要複寫既有的樣式定義，可以參照[官網](https://element-plus.gitee.io/en-US/guide/namespace.html#set-scss-css-vars)寫法複寫，而在 vite.config.js 中的設定，是讓這個複寫的 scss 檔能都引入到各個元件。
:::

```css
/*  elementPlusInit.scss */
@forward "element-plus/theme-chalk/src/common/var.scss" with (
  $colors: (
    "primary": (
      "base": #3bb071
    )
  )
);
```

實際專案
![](https://i.imgur.com/wx0n43E.png)
