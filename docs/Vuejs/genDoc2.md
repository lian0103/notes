---
tags: vue3 UI
---

# vue3 UI頁面文檔建構過程

[[toc]]

## md套件 @kangc/v-md-editor
在頁面上呈現md檔內容，借助於第三方的套件支持，也可以掛載在全局使用。
```javascript
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
});

VMdEditor.use(createHighlightLinesPlugin());
VMdEditor.use(createLineNumbertPlugin());

const app = createApp(App);

app.use(VMdEditor).mount('#app');
```

## 準備頁面的展示和md文檔
每個組件依據 **組件名稱** 命名的資料夾下的結構如下:
![](https://i.imgur.com/9dLASa7.png)

其中要生成展示頁面的md文檔內容，就來自docs資料夾下。
![](https://i.imgur.com/aVVmVUn.png)

![](https://i.imgur.com/Ozlqosz.png)

## 遍歷每個組件結構中的demo.vue和docs/index.js
腳本如下: 檔案讀取寫入倚賴fs和handlebars。這裡處理的過程，遍歷組件列表，最後要生成一個依據**組件名稱**對應的範例內容的物件。
```javascript
function genGtDoc(target) {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/gtDoc.js.tpl'),
    'utf-8'
  );
  let list = targetMap[target].list;

  const docList = list
    .map((compName) => {
      let demoFilePath = targetMap[target].getDemoFilePath(compName);
      let demoFile =fs.readFileSync(resolve(__dirname,demoFilePath),'utf-8');
      // 在這裡有要先處理特殊符號 避免在生成md檔錯誤
      demoFile = demoFile.replace(/\`/g, "'").replace(/\$\{/g, '');

      return `'${compName}': \` \\\`\\\`\\\` html 
        ${demoFile}  \\\`\\\`\\\`  \`,`;
    })
    .join('\n    ');

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ docList });

  fs.outputFile(
    resolve(__dirname, targetMap[target].demoFileOutputPath),
    contentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );
}
```

> 後續也要依據 **組件名稱** 列表來生成路由和頁面，也是依據相同的方式，遍歷組件列表後來生成。

## 最後使用上一開始掛載的v-md-editor
```html
<template>
  <div class="innerWrapper">
    <div class="w-full py-4 flex justify-center items-center">
      <div v-if="componentName" class="mb-3 px-2 pt-6 w-full 2xl:w-3/4">
        <template v-if="docTableRef">
          <div class="mb-4" v-for="item in docTableRef.show" :key="item">
            <v-md-editor v-model="docTableRef[item]" mode="preview" />
          </div>
        </template>
        <component :is="demoRef"></component>
        <v-md-editor
          v-if="demoSourceRef"
          v-model="demoSourceRef"
          mode="preview"
        />
      </div>
    </div>
  </div>
</template>
```
