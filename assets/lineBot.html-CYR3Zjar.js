import{_ as l,r as p,o as c,c as i,a as n,b as a,w as o,d as s,e as r}from"./app-EReB7DYn.js";const u={},d=n("h1",{id:"linebot-api串接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linebot-api串接","aria-hidden":"true"},"#"),s(" LineBot API串接")],-1),k={class:"table-of-contents"},h=n("br",null,null,-1),b={href:"https://line-bot-doope.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://line-bot-doope.herokuapp.com/api-docs/#/",target:"_blank",rel:"noopener noreferrer"},_=r(`<h2 id="message-hook" tabindex="-1"><a class="header-anchor" href="#message-hook" aria-hidden="true">#</a> Message Hook</h2><div class="custom-container tip"><p class="custom-container-title">info</p><p>1.官方範例是啟一個express app應來並且監聽https的Post /callback，來接收官方line所收到的訊息。 2.串接line bot message API 需要使用https連線方式 本地開發時，借助ngrok可以建立一個對外的https url 指向給本地的服務對外使用</p></div><h2 id="line-bot-sdk模組與使用" tabindex="-1"><a class="header-anchor" href="#line-bot-sdk模組與使用" aria-hidden="true">#</a> line bot sdk模組與使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@line/bot-sdk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">channelAccessToken</span><span class="token operator">:</span> <span class="token string">&quot;來自line developer&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">channelSecret</span><span class="token operator">:</span> <span class="token string">&quot;來自line developer&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">line<span class="token punctuation">.</span>Client</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 此client物件可用來回傳訊息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="監聽-post-callback" tabindex="-1"><a class="header-anchor" href="#監聽-post-callback" aria-hidden="true">#</a> 監聽 Post /callback</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/callback&quot;</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>handleEvent<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">info</p><p>當有line訊息傳給官方line後，需要在line developer設定設有監聽服務的地址 本次實作的例子 Webhook URL 是設置為 https://line-bot-doope.herokuapp.com/callback</p></div><h2 id="圖片推播" tabindex="-1"><a class="header-anchor" href="#圖片推播" aria-hidden="true">#</a> 圖片推播</h2><p>參考官方Message API 文件的圖片訊息格式，可以加入靜態資源(圖片)的url 同在express app 做http GET的監聽，並利用express app的res.sendFile()傳送圖檔</p><div class="custom-container tip"><p class="custom-container-title">info</p><p>利用nodeJS 架設能提供靜態資源服務的應用</p></div>`,10),v={href:"http://expressjs.com/en/api.html#res.sendFile",target:"_blank",rel:"noopener noreferrer"},f=n("hr",null,null,-1),g=n("h2",{id:"連結",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#連結","aria-hidden":"true"},"#"),s(" 連結")],-1),x={href:"https://github.com/lian0103/line-bot-dopee",target:"_blank",rel:"noopener noreferrer"},E={href:"https://manager.line.biz/account/@928wyrpi",target:"_blank",rel:"noopener noreferrer"},B={href:"https://developers.line.biz/console/channel/1656497673/basics",target:"_blank",rel:"noopener noreferrer"},A={href:"https://medium.com/pyradise/%E4%BD%BF%E7%94%A8node-js%E5%BB%BA%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bline-bot-590b7ba7a28a",target:"_blank",rel:"noopener noreferrer"},j={href:"https://dashboard.ngrok.com/get-started/setup",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/line/line-bot-sdk-nodejs/tree/next/examples/echo-bot",target:"_blank",rel:"noopener noreferrer"};function y(P,I){const t=p("router-link"),e=p("ExternalLinkIcon");return c(),i("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#message-hook"},{default:o(()=>[s("Message Hook")]),_:1})]),n("li",null,[a(t,{to:"#line-bot-sdk模組與使用"},{default:o(()=>[s("line bot sdk模組與使用")]),_:1})]),n("li",null,[a(t,{to:"#監聽-post-callback"},{default:o(()=>[s("監聽 Post /callback")]),_:1})]),n("li",null,[a(t,{to:"#圖片推播"},{default:o(()=>[s("圖片推播")]),_:1})]),n("li",null,[a(t,{to:"#連結"},{default:o(()=>[s("連結")]),_:1})])])]),n("p",null,[s("使用nodeJS 和 Express 套件架設基礎的http服務。並串接line-bot message API。 實作功能:line官方帳號訊息回覆和紀錄、推播文字和圖片訊息。"),h,n("a",b,[s("demo"),a(e)])]),n("p",null,[n("a",m,[s("API docs"),a(e)])]),_,n("p",null,[n("a",v,[s("express API 官方文件 res.sendFile"),a(e)])]),f,g,n("p",null,[n("a",x,[s("完整程式碼"),a(e)])]),n("p",null,[n("a",E,[s("豆皮官方line 管理台"),a(e)])]),n("p",null,[n("a",B,[s("line developer //開發者管理API服務"),a(e)])]),n("p",null,[n("a",A,[s("使用Node.js建置你的第一個LINE BOT"),a(e)]),n("a",j,[s("讓本地https 服務指向localhost:port"),a(e)])]),n("p",null,[n("a",q,[s("官方line bot nodeJS範例"),a(e)])])])}const N=l(u,[["render",y],["__file","lineBot.html.vue"]]);export{N as default};
