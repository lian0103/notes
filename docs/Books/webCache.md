---
tags: JS
head:
  - [
      meta,
      {
        name: description,
        content: Web Cache 網頁緩存機制 瀏覽器緩存 http緩存,
      },
    ]
---

# 網頁緩存機制 Web Cache

Web 緩存分為兩種:**瀏覽器緩存**和**http 緩存**。

## 瀏覽器緩存

資料儲存本地的瀏覽器，像是「像 localStorage，sessionStorage 这种用户缓存数据的功能，他只能保存 5M 左右的数据，多了不行。cookie 则更少，大概只能有 4kb 的数据」

## http 緩存

web 緩存最重要的是理解 http 緩存，在執行上細分為**強緩存**和**協商緩存**。

- **強緩存**是利用 http head 部分的 Cache-control 屬性，透過定義資源要緩存多久。比如:'Cache-Control':'max-age=10'，即這資源在 10 秒內如果再次請求，就會從緩存中讀取。

> Cache-control 的配置選項
> max-age 決定客户端資源被缓存多久
> s-maxage 決定代理服务器缓存的時間
> no-cache 表示是强制進行協商缓存
> no-store 是表示禁止任何缓存策略
> public 表示資源即可以被瀏覽器缓存也可以被代理服務器缓存
> private 表示資源只能被瀏覽器缓存

- **協商緩存**是利用 http head 部分的 last-modified 屬性，註記資源最後修改時間，並關閉強緩存(Cache-control:no-cache)下，讓客戶端下次請求資源時，head 中會新增 If-Modified-Since 屬性，帶上上次服務器回傳 last-modified 時間，讓服務端可以比對，最後決定回傳資源沒有被修改(304)，還是回傳新的資源，並在 last-modified 註記新的最後修改時間

> 上面這種比對時間的方式，可能衍伸了資源(是文件黨)被修改時間的問題，會導致比對沒有真正判斷資源有沒有被修改。因此有了新的「Etag」，只是把 ast-modified 屬性的最後修改時間換成了生成 ETag(依據內容生成的 hash 值)

---

[稀土掘金-中高级前端工程师都需要熟悉的技能--前端缓存](https://juejin.cn/post/7127194919235485733)
