---
tags: talks
---

<div class='articleWrapper'>

# 前端領域常見的各種 Patterns

這裡分享一個很不錯的網站，可以用來理解設計模式(Design Pattern)、渲染模式(Rendering Patterns)和效能模式(Performance Patterns)。

[https://www.patterns.dev/posts](https://www.patterns.dev/posts)

比如它對 HOC Pattern 的描述：

> **Pass reusable logic down as props to components throughout your application**

搭配網站的範例說明，我覺得是學習各種設計模式時，很好的開始。

還有像是**渲染模式**裡提到的 CSR、SSR、Static Rendering，其中對 Static Rendering 的描述:

> **Deliver pre-rendered HTML content that was generated when the site was built**

原來就是在打包時就產生好頁面，所以當有人去 server 請求時，就能直接回傳，感覺是用了一種白話文，來解釋了抽象的概念。而它也用 nextjs 作為舉例來說明，nextjs 這個架構中採用了 Static Rendering。

當然有了關鍵詞後，還可以再丟 chapGPT 來回答，能知道 Static Rendering 模式的好處，像是性能優化、http 緩存利用、優化 SEO 等等。提供大家參考~~

</div>
