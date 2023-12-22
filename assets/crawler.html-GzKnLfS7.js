import{_ as l,r as p,o as r,c,a as n,b as e,w as t,d as s,e as i}from"./app-EReB7DYn.js";const u={},d=n("h1",{id:"網站資料爬取工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#網站資料爬取工具","aria-hidden":"true"},"#"),s(" 網站資料爬取工具")],-1),k={class:"table-of-contents"},h=n("p",null,"參考鐵人賽的系列文章，使用 NodeJS 來實作網頁資料爬取和儲存於 google 表單，在嘗試過程中把系列文的 selenium-webdriver 套件改用 puppeteer 和 cheerio， 而該系列文主要針對的是臉書和 IG 的追蹤數爬取，我則針對 yahoo 入口頁面的新聞和 momo 購物網的商品搜尋資訊。",-1),m=n("h2",{id:"puppeteer、cheerio、googleapis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#puppeteer、cheerio、googleapis","aria-hidden":"true"},"#"),s(" puppeteer、cheerio、googleapis")],-1),g={href:"https://www.npmjs.com/package/puppeteer",target:"_blank",rel:"noopener noreferrer"},_=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"info"),n("p",null,"momo 搜尋產品頁 https://www.momoshop.com.tw/search/searchShop.jsp?keyword=$keyword"),n("p",null,"google 搜尋頁 https://www.google.com.tw/search?q=$keyword")],-1),b={href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.npmjs.com/package/googleapis",target:"_blank",rel:"noopener noreferrer"},w={href:"https://console.cloud.google.com/apis/dashboard?project=node-crawler-359702",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"代碼",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代碼","aria-hidden":"true"},"#"),s(" 代碼")],-1),y={href:"https://github.com/lian0103/nodeServices/blob/main/services/puppet.js",target:"_blank",rel:"noopener noreferrer"},j=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;puppeteer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">puppetGetWebContent</span><span class="token punctuation">(</span><span class="token parameter">webUrl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;--no-sandbox&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--disable-setuid-sandbox&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ignoreDefaultArgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;--disable-extensions&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span>webUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={href:"https://github.com/lian0103/nodeServices/blob/main/services/momoCrawler.js",target:"_blank",rel:"noopener noreferrer"},S=n("img",{src:"https://i.imgur.com/ebt53Gi.png",alt:""},null,-1),C={href:"https://github.com/lian0103/nodeServices/blob/main/services/yahooCrawler.js",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/lian0103/nodeServices/blob/main/services/googleSheets.js",target:"_blank",rel:"noopener noreferrer"},N=n("img",{src:"https://i.imgur.com/brb2Pfj.png",alt:""},null,-1),P=n("h2",{id:"參考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#參考","aria-hidden":"true"},"#"),s(" 參考")],-1),q={href:"https://ithelp.ithome.com.tw/users/20103256/ironman/2940",target:"_blank",rel:"noopener noreferrer"};function B(G,V){const o=p("router-link"),a=p("ExternalLinkIcon");return r(),c("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[e(o,{to:"#puppeteer、cheerio、googleapis"},{default:t(()=>[s("puppeteer、cheerio、googleapis")]),_:1})]),n("li",null,[e(o,{to:"#代碼"},{default:t(()=>[s("代碼")]),_:1})]),n("li",null,[e(o,{to:"#參考"},{default:t(()=>[s("參考")]),_:1})])])]),h,m,n("ul",null,[n("li",null,[n("a",g,[s("puppeteer"),e(a)]),s(" 提供基於瀏覽器操作行為的 API，也可以截取圖片、產生 PDF。使用概念上要瞭解瀏覽器渲染 DOM 的生命週期，以及對於網站 url 的規則去分析。 在資料公開的網站，url 的 path 和 query 部份，通常就指向對應的資料內容。")])]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",b,[s("cheerio"),e(a)]),s(" 用來處理網頁的 dom 結構，功能和 jQuery 的選取和操作相近。在這次嘗試過程中，是拿來抓取 dom 的資料。")])]),n("li",null,[n("p",null,[n("a",v,[s("googleapis"),e(a)]),s(" 用來使用線上 google 表單的操作，官方提供的 API 相當龐雜。這次有使用的部分是基本的寫入資料、新增 sheet。在概念上，它可以做為一個線上儲存資料的載體。")]),n("blockquote",null,[n("p",null,[s("使用重點是在"),n("a",w,[s("google developer console"),e(a)]),s("要先開通 google sheet api 服務，並設定服務權限，取得憑證(credentials.json)")])])])]),f,n("ul",null,[n("li",null,[n("a",y,[s("puppet.js"),e(a)]),s(" 腳本可以理解為操作瀏覽器來更新畫面的流程")])]),j,n("ul",null,[n("li",null,[n("p",null,[n("a",x,[s("momoCrawler.js"),e(a)]),s(" 爬取 momo 產品搜尋頁，並把前五項的商品連結記下，再前往商品頁中爬取商品資訊。 "),S])]),n("li",null,[n("p",null,[n("a",C,[s("yahooCrawler.js"),e(a)]),s(" & "),n("a",I,[s("googleSheets.js"),e(a)]),s(" 爬取資料後，將它存放到線上 google 表單。 "),N])])]),P,n("ul",null,[n("li",null,[n("a",q,[s("行銷廣告、電商小編的武器，FB & IG 爬蟲專案從零開始"),e(a)])])])])}const D=l(u,[["render",B],["__file","crawler.html.vue"]]);export{D as default};
