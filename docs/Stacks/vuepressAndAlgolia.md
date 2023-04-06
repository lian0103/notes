---
tags: vuepress
---

# 使用Vuepress2外掛搜尋功能

[[toc]]

依照Vuepress2官網文件的指引，會遇到無法正確顯示搜尋結果情況，可能原因推測是各個vuepress和docsearch都還在發佈beta版本測試中。

最後我成功掛載搜尋的版本環境：
```json
{  
  "devDependencies": {
    "vuepress": "^2.0.0-beta.51"
  },
  "dependencies": {
    "@docsearch/js": "^3.3.3",
    "@vuepress/client": "^2.0.0-beta.51"
 }
```

## 使用Algolia爬蟲抓取出可搜尋的資料
- 搜尋的功能是使用[Algolia網頁爬蟲服務](https://crawler.algolia.com/admin/crawlers/c3ce0d80-c211-47bb-8fc1-c7c52015af70/overview)，到部署好的網域下去爬取資料，來讓搜尋功能實現。

- 對應Vuepress2的網頁結構，[docsearch官方文件](https://docsearch.algolia.com/docs/templates/#vuepress-v2-template)提供的模板可以成功爬取到資料。

這兩個大前提了解後，可以開始在Algolia平台上操作，這裡會先要求在部署的web服務器上要有robots.txt和sitemap.xml，vuepress2在透過vite build後會有前者，sitemap.xml則要另外找外掛(這部分找到的外掛也失效，所以索性使用[xmlbuilder腳本](https://github.com/lian0103/notes/blob/main/plugins/genSitemapXML.js))。

<img src="https://i.imgur.com/k6fljlO.png" style="width:300px" />

在模板正確的情況下，Algolia爬蟲可以找到我web服務器上的網頁，以及生成爬取的結果。

<img src="https://i.imgur.com/dRvhAeR.png" style="width:300px" />

## 在Vuepress畫面上生成搜尋UI
依照Vuepress2在config.js的plugin設置卻無法成功，這裡另外從[Algolia文件](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/getting-started/)提供的啟用方法來看，簡單來說vuepress是SSR(伺服器端渲染)的機制，HTML生成後我要把搜尋UI掛上去，可使用vuepress提供的client.js機制，在每次客戶端載入HTML後在執行搜尋UI掛載的流程。
```javascript
import { defineClientConfig } from '@vuepress/client';
import { onMounted } from 'vue';
import docsearch from '@docsearch/js';

export default defineClientConfig({
    setup() {
        onMounted(() => {
            if (!document.querySelector('#docsearch')) {
                const div = document.createElement('div');
                div.setAttribute('id', 'docsearch');
                document.querySelector('.navbar-items-wrapper').appendChild(div);
                
                docsearch({
                    appId: '***',
                    apiKey: '***',
                    indexName: 'jason-lian',
                    container: '#docsearch',
                    debug: false,
                });
            }
        });
    },
});
```
## 最終結果
<img src="https://i.imgur.com/ZJnxfWd.png" style="width:300px" />