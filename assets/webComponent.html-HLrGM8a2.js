import{_ as r,r as a,o as c,c as l,a as e,d as n,b as t,e as s}from"./app-EReB7DYn.js";const i={},u=e("h1",{id:"用-web-components-wc-開發共用-業務元件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用-web-components-wc-開發共用-業務元件","aria-hidden":"true"},"#"),n(" 用 Web Components(wc)開發共用/業務元件?")],-1),d=e("p",null,"紀錄下有關這個議題的資料",-1),h=e("h2",{id:"_2023-稀土掘金開發者論壇",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-稀土掘金開發者論壇","aria-hidden":"true"},"#"),n(" 2023 稀土掘金開發者論壇")],-1),_={href:"https://quark.hellobike.com/#/",target:"_blank",rel:"noopener noreferrer"},p=s('<ol><li><p>使用 wc 優點<br> a.組件不依賴技術棧框架，解開對技術棧(ex vue2 vue3..)的耦合<br> b.組件包發布後給多個業務專案使用<br> c.可以形成一個獨立沙盒，與其它全局的樣式和腳本隔離。關鍵詞：Shadow Dom</p></li><li><p>Quark 用處<br> a.協助開發者去打造 wc，也支持 ts<br> b.它們也使用這套方案打造以 wc 為基礎的元件庫</p></li></ol><h2 id="vue3-官方文件對-wc-說明的重點" tabindex="-1"><a class="header-anchor" href="#vue3-官方文件對-wc-說明的重點" aria-hidden="true">#</a> Vue3 官方文件對 wc 說明的重點</h2>',2),w={href:"https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue",target:"_blank",rel:"noopener noreferrer"},m=e("ol",null,[e("li",null,"Vue 支持 wc 在 Vue 的環境下使用，也支持將 SFC 編譯成 wc （defineCustomElement API）"),e("li",null,"Vue 與原生 wc 使用的 slot 特性並不相同"),e("li",null,"使用 wc 必須取捨一些 Vue 框架裡生態優點(如聲明式的模板系統、跨組件的狀態管理工具、SSR 模式下更高效的編譯...)")],-1),b=e("h2",{id:"嘗試使用-quark-發佈一個-wc-到-npm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#嘗試使用-quark-發佈一個-wc-到-npm","aria-hidden":"true"},"#"),n(" 嘗試使用 Quark 發佈一個 wc 到 npm")],-1),f={href:"https://www.npmjs.com/package/wc-count",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[n("初步感受"),e("br"),n(" 的確如 Vue 官方文件提到的，使用 wc 是將開發更向瀏覽器原生的生態貼近，它會衍生一些技術議題可能是要注意的。這裡列出可能暫時不會選擇使用 wc 的理由:"),e("br"),n(" a.跨端、跨多專案、跨技術框架的通用元件/業務元件需求，目前沒有"),e("br"),n(" b.一套元件多端支持應該也會有更多設計和開發要注意的細節，目前沒有更深入評估")],-1);function x(V,v){const o=a("ExternalLinkIcon");return c(),l("div",null,[u,d,h,e("p",null,[n('30/Jun/2023，由中國哈嘍前端技術團隊的工程師介紹他們開源的一個項目"'),e("a",_,[n("Quark"),t(o)]),n('"')]),p,e("p",null,[e("a",w,[n("doc"),t(o)])]),m,b,e("ul",null,[e("li",null,[e("a",f,[n("npm"),t(o)])]),k])])}const C=r(i,[["render",x],["__file","webComponent.html.vue"]]);export{C as default};
