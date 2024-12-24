import{_ as l,r,o,c as d,a as e,b as n,w as s,d as a,f as c}from"./app-eRNuxQFn.js";const h={},b=e("h1",{id:"google開發全家餐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google開發全家餐","aria-hidden":"true"},"#"),a(" Google開發全家餐")],-1),p={class:"table-of-contents"},u=e("p",null,"Google開發全家餐系列預計包含Google Firebase、Google AdSense、Google Analytics..。本篇主要在記錄使用Firebase部分功能。",-1),m={href:"https://github.com/lian0103/portfolio",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/lian0103/hexo-blog",target:"_blank",rel:"noopener noreferrer"},f=c(`<h2 id="firebase-realtime-database" tabindex="-1"><a class="header-anchor" href="#firebase-realtime-database" aria-hidden="true">#</a> Firebase Realtime Database</h2><p>每筆資料會像是文件檔一樣各自獨立地儲存，而DB可以視為很多文件的集合物件。前端/APP端在使用時，也會隨著DB內的文件更新，也會即時將有該筆資料的訂閱端做推送更新，也就是不同使用者和應用程式可以同時共享最新的資料。</p><h2 id="應用實作-留言板" tabindex="-1"><a class="header-anchor" href="#應用實作-留言板" aria-hidden="true">#</a> 應用實作:留言板</h2><p>在這裡呈現的留言板即是將資料存放在Realtime DB。多個使用者/視窗同時留言，會同步推送給其他人的畫面。 <img src="https://i.imgur.com/NtHhZMK.jpg" alt=""></p><h2 id="firebase-hosting" tabindex="-1"><a class="header-anchor" href="#firebase-hosting" aria-hidden="true">#</a> Firebase Hosting</h2><p>和github pages類似，這個服務可以把部屬應用程式到它的主機上，Hosting預設會給兩種domain的網址。 <img src="https://i.imgur.com/pYy4vm4.jpg" alt=""></p><h2 id="應用實作-部屬上線" tabindex="-1"><a class="header-anchor" href="#應用實作-部屬上線" aria-hidden="true">#</a> 應用實作:部屬上線</h2><p>以這個部落格的專案為例，我是使用Hexo的架站模組，會用到的指令如下。流程上是需要可以先建置好部落格的專案，後續再使用Hosting即可。</p><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#Hexo cli指定</span>
<span class="token comment">#清除cache並生產靜態檔</span>
hexo clean <span class="token operator">&amp;&amp;</span> hexo g

<span class="token comment">#Firebase cli指令</span>

firebase login <span class="token parameter variable">--interactive</span>

firebase init <span class="token parameter variable">--hosting</span>

firebase deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(_,x){const i=r("router-link"),t=r("ExternalLinkIcon");return o(),d("div",null,[b,e("nav",p,[e("ul",null,[e("li",null,[n(i,{to:"#firebase-realtime-database"},{default:s(()=>[a("Firebase Realtime Database")]),_:1})]),e("li",null,[n(i,{to:"#應用實作-留言板"},{default:s(()=>[a("應用實作:留言板")]),_:1})]),e("li",null,[n(i,{to:"#firebase-hosting"},{default:s(()=>[a("Firebase Hosting")]),_:1})]),e("li",null,[n(i,{to:"#應用實作-部屬上線"},{default:s(()=>[a("應用實作:部屬上線")]),_:1})]),e("li",null,[n(i,{to:"#指令"},{default:s(()=>[a("指令")]),_:1})])])]),u,e("p",null,[a("實作部分，我有兩個小專案應用放在Firebase上: 1.Portfolio 作品集 "),e("a",m,[a("github link"),n(t)]),a(" 2.Hexo-blog 部落格 "),e("a",g,[a("github link"),n(t)])]),f])}const F=l(h,[["render",v],["__file","firebaseApp.html.vue"]]);export{F as default};