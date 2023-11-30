import{_ as l,r,o,c as d,a as e,b as n,w as s,d as a,e as c}from"./app.17b384ce.js";const h={},b=e("h1",{id:"google\u958B\u767C\u5168\u5BB6\u9910",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google\u958B\u767C\u5168\u5BB6\u9910","aria-hidden":"true"},"#"),a(" Google\u958B\u767C\u5168\u5BB6\u9910")],-1),p={class:"table-of-contents"},u=e("p",null,"Google\u958B\u767C\u5168\u5BB6\u9910\u7CFB\u5217\u9810\u8A08\u5305\u542BGoogle Firebase\u3001Google AdSense\u3001Google Analytics..\u3002\u672C\u7BC7\u4E3B\u8981\u5728\u8A18\u9304\u4F7F\u7528Firebase\u90E8\u5206\u529F\u80FD\u3002",-1),m={href:"https://github.com/lian0103/portfolio",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/lian0103/hexo-blog",target:"_blank",rel:"noopener noreferrer"},f=c(`<h2 id="firebase-realtime-database" tabindex="-1"><a class="header-anchor" href="#firebase-realtime-database" aria-hidden="true">#</a> Firebase Realtime Database</h2><p>\u6BCF\u7B46\u8CC7\u6599\u6703\u50CF\u662F\u6587\u4EF6\u6A94\u4E00\u6A23\u5404\u81EA\u7368\u7ACB\u5730\u5132\u5B58\uFF0C\u800CDB\u53EF\u4EE5\u8996\u70BA\u5F88\u591A\u6587\u4EF6\u7684\u96C6\u5408\u7269\u4EF6\u3002\u524D\u7AEF/APP\u7AEF\u5728\u4F7F\u7528\u6642\uFF0C\u4E5F\u6703\u96A8\u8457DB\u5167\u7684\u6587\u4EF6\u66F4\u65B0\uFF0C\u4E5F\u6703\u5373\u6642\u5C07\u6709\u8A72\u7B46\u8CC7\u6599\u7684\u8A02\u95B1\u7AEF\u505A\u63A8\u9001\u66F4\u65B0\uFF0C\u4E5F\u5C31\u662F\u4E0D\u540C\u4F7F\u7528\u8005\u548C\u61C9\u7528\u7A0B\u5F0F\u53EF\u4EE5\u540C\u6642\u5171\u4EAB\u6700\u65B0\u7684\u8CC7\u6599\u3002</p><h2 id="\u61C9\u7528\u5BE6\u4F5C-\u7559\u8A00\u677F" tabindex="-1"><a class="header-anchor" href="#\u61C9\u7528\u5BE6\u4F5C-\u7559\u8A00\u677F" aria-hidden="true">#</a> \u61C9\u7528\u5BE6\u4F5C:\u7559\u8A00\u677F</h2><p>\u5728\u9019\u88E1\u5448\u73FE\u7684\u7559\u8A00\u677F\u5373\u662F\u5C07\u8CC7\u6599\u5B58\u653E\u5728Realtime DB\u3002\u591A\u500B\u4F7F\u7528\u8005/\u8996\u7A97\u540C\u6642\u7559\u8A00\uFF0C\u6703\u540C\u6B65\u63A8\u9001\u7D66\u5176\u4ED6\u4EBA\u7684\u756B\u9762\u3002 <img src="https://i.imgur.com/NtHhZMK.jpg" alt=""></p><h2 id="firebase-hosting" tabindex="-1"><a class="header-anchor" href="#firebase-hosting" aria-hidden="true">#</a> Firebase Hosting</h2><p>\u548Cgithub pages\u985E\u4F3C\uFF0C\u9019\u500B\u670D\u52D9\u53EF\u4EE5\u628A\u90E8\u5C6C\u61C9\u7528\u7A0B\u5F0F\u5230\u5B83\u7684\u4E3B\u6A5F\u4E0A\uFF0CHosting\u9810\u8A2D\u6703\u7D66\u5169\u7A2Edomain\u7684\u7DB2\u5740\u3002 <img src="https://i.imgur.com/pYy4vm4.jpg" alt=""></p><h2 id="\u61C9\u7528\u5BE6\u4F5C-\u90E8\u5C6C\u4E0A\u7DDA" tabindex="-1"><a class="header-anchor" href="#\u61C9\u7528\u5BE6\u4F5C-\u90E8\u5C6C\u4E0A\u7DDA" aria-hidden="true">#</a> \u61C9\u7528\u5BE6\u4F5C:\u90E8\u5C6C\u4E0A\u7DDA</h2><p>\u4EE5\u9019\u500B\u90E8\u843D\u683C\u7684\u5C08\u6848\u70BA\u4F8B\uFF0C\u6211\u662F\u4F7F\u7528Hexo\u7684\u67B6\u7AD9\u6A21\u7D44\uFF0C\u6703\u7528\u5230\u7684\u6307\u4EE4\u5982\u4E0B\u3002\u6D41\u7A0B\u4E0A\u662F\u9700\u8981\u53EF\u4EE5\u5148\u5EFA\u7F6E\u597D\u90E8\u843D\u683C\u7684\u5C08\u6848\uFF0C\u5F8C\u7E8C\u518D\u4F7F\u7528Hosting\u5373\u53EF\u3002</p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Hexo cli\u6307\u5B9A</span>
<span class="token comment">#\u6E05\u9664cache\u4E26\u751F\u7522\u975C\u614B\u6A94</span>
hexo clean <span class="token operator">&amp;&amp;</span> hexo g

<span class="token comment">#Firebase cli\u6307\u4EE4</span>

firebase login <span class="token parameter variable">--interactive</span>

firebase init <span class="token parameter variable">--hosting</span>

firebase deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(_,x){const i=r("router-link"),t=r("ExternalLinkIcon");return o(),d("div",null,[b,e("nav",p,[e("ul",null,[e("li",null,[n(i,{to:"#firebase-realtime-database"},{default:s(()=>[a("Firebase Realtime Database")]),_:1})]),e("li",null,[n(i,{to:"#\u61C9\u7528\u5BE6\u4F5C-\u7559\u8A00\u677F"},{default:s(()=>[a("\u61C9\u7528\u5BE6\u4F5C:\u7559\u8A00\u677F")]),_:1})]),e("li",null,[n(i,{to:"#firebase-hosting"},{default:s(()=>[a("Firebase Hosting")]),_:1})]),e("li",null,[n(i,{to:"#\u61C9\u7528\u5BE6\u4F5C-\u90E8\u5C6C\u4E0A\u7DDA"},{default:s(()=>[a("\u61C9\u7528\u5BE6\u4F5C:\u90E8\u5C6C\u4E0A\u7DDA")]),_:1})]),e("li",null,[n(i,{to:"#\u6307\u4EE4"},{default:s(()=>[a("\u6307\u4EE4")]),_:1})])])]),u,e("p",null,[a("\u5BE6\u4F5C\u90E8\u5206\uFF0C\u6211\u6709\u5169\u500B\u5C0F\u5C08\u6848\u61C9\u7528\u653E\u5728Firebase\u4E0A: 1.Portfolio \u4F5C\u54C1\u96C6 "),e("a",m,[a("github link"),n(t)]),a(" 2.Hexo-blog \u90E8\u843D\u683C "),e("a",g,[a("github link"),n(t)])]),f])}const F=l(h,[["render",v],["__file","firebaseApp.html.vue"]]);export{F as default};
