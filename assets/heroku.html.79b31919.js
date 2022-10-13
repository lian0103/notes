import{_ as i,r as t,o as c,c as p,a as e,d as s,w as r,b as n,e as l}from"./app.b6038fa3.js";const u={},d=e("h1",{id:"heroku\u90E8\u7F72web-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroku\u90E8\u7F72web-application","aria-hidden":"true"},"#"),n(" Heroku\u90E8\u7F72Web Application")],-1),h={class:"table-of-contents"},k=e("h2",{id:"\u4F48\u7F72node-application\u5230heroku",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F48\u7F72node-application\u5230heroku","aria-hidden":"true"},"#"),n(" \u4F48\u7F72node application\u5230Heroku")],-1),m=e("p",null,"step1 \u5148\u5728\u500B\u4EBA\u7E3D\u89BD\u9801\u65B0\u589Eapp\u9805\u76EE",-1),_={href:"https://id.heroku.com/login",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"\u5047\u8A2D\u6211\u4F7F\u7528\u7684app\u9805\u76EE\u540D\u7A31\u662F:jason-node",-1),b=l(`<p>step2 \u4F48\u7F72\u8A2D\u5B9A</p><ul><li>server\u4F48\u7F72\u6642\u9810\u8A2D\u662F\u57F7\u884C npm start \u6240\u5C0D\u61C9\u7684\u8173\u672C\u3002\u6240\u4EE5\u5728package.json\u9700\u8981\u6709\u5C0D\u61C9\u7684\u5728\u5C08\u6848\u7684\u555F\u52D5\u6307\u4EE4</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">//package.json</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node appHeroku.js &quot;</span> <span class="token comment">// appHeroku.js \u4F5C\u70BA\u61C9\u7528\u7684\u9032\u5165\u9EDE</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528heroku\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528heroku\u6307\u4EE4" aria-hidden="true">#</a> \u4F7F\u7528heroku\u6307\u4EE4</h2>`,4),f={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},g=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u672C\u6A5F\u767B\u5165</span>
heroku login 

<span class="token comment">#\u628A\u5C08\u6848\u8DDFheroku\u7684app server\u540D\u7A31\u7D81\u5B9A</span>
heroku git:remote <span class="token parameter variable">-a</span> <span class="token variable">\${heroku-app-name}</span> <span class="token comment">#jason-node  </span>

<span class="token comment">#\u4F48\u7F72</span>
<span class="token function">git</span> push heroku <span class="token variable">\${\u5206\u652F\u540D\u7A31}</span> <span class="token comment">#main  </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E={href:"https://line-bot-doope.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),j={href:"https://medium.com/enjoy-life-enjoy-coding/heroku-%E6%90%AD%E9%85%8D-git-%E5%9C%A8-heroku-%E4%B8%8A%E9%83%A8%E7%BD%B2%E7%B6%B2%E7%AB%99%E7%9A%84%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E5%AD%B8-bf4fd6f998b8",target:"_blank",rel:"noopener noreferrer"};function q(B,A){const o=t("router-link"),a=t("ExternalLinkIcon");return c(),p("div",null,[d,e("nav",h,[e("ul",null,[e("li",null,[s(o,{to:"#\u4F48\u7F72node-application\u5230heroku"},{default:r(()=>[n("\u4F48\u7F72node application\u5230Heroku")]),_:1})]),e("li",null,[s(o,{to:"#\u4F7F\u7528heroku\u6307\u4EE4"},{default:r(()=>[n("\u4F7F\u7528heroku\u6307\u4EE4")]),_:1})])])]),k,m,e("ul",null,[e("li",null,[e("a",_,[n("\u767B\u5165 heroku "),s(a)]),n(" \u5148\u524D\u5EFA\u7ACB\u7684Heroku\u5E33\u5BC6")]),v]),b,e("p",null,[n("\u8981\u5148\u4E0B\u8F09heroku\u5728\u672C\u6A5F\u5F8C\u5B89\u88DD "),e("a",f,[n("heroku-cli"),s(a)])]),g,e("p",null,[e("a",E,[n("\u4F48\u7F72\u4E0A\u7DDA\u7D50\u679C Heroku jason-node"),s(a)])]),x,e("p",null,[n("\u53C3\u8003\u8CC7\u6E90 "),e("a",j,[n("\u795EQ\u8D85\u4EBA heroku\u4F48\u7F72\u57FA\u790E\u6559\u5B78"),s(a)])])])}const y=i(u,[["render",q],["__file","heroku.html.vue"]]);export{y as default};
