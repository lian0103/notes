import{_ as l,r,o,c,a as n,d as a,w as t,b as e,e as d}from"./app.f5ade4da.js";const p={},u=n("h1",{id:"gt-ui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gt-ui","aria-hidden":"true"},"#"),e(" GT UI")],-1),m={class:"table-of-contents"},h=d(`<p>\u6253\u5305\u4E00\u500B\u5143\u4EF6\u5EAB\uFF0C\u5230\u767C\u4F48\u5230\u516C\u6709/\u79C1\u6709\u5009\u5EAB\u7A7A\u9593\uFF0C\u76EE\u524D\u5728\u5DE5\u5177\u4E0A\u5C0E\u5165\u4E86vite\uFF0C\u4E5F\u900F\u904E\u5354\u529B\u7684\u540C\u4E8B\u5C0E\u5165\u4E86gulp\u3002</p><h2 id="\u5143\u4EF6\u5EAB\u5B89\u88DD" tabindex="-1"><a class="header-anchor" href="#\u5143\u4EF6\u5EAB\u5B89\u88DD" aria-hidden="true">#</a> \u5143\u4EF6\u5EAB\u5B89\u88DD</h2><p><strong>npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/</strong> \u5B89\u88DD\u6642\u8981\u6307\u5B9A\u79C1\u6709\u5009\u5EAB\u5730\u5740\uFF0C\u516C\u53F8\u5916\u7DB2\u61C9\u53EF\u80FD\u7121\u6CD5\u4F7F\u7528\u3002</p><h2 id="\u4F7F\u7528gt-ui" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528gt-ui" aria-hidden="true">#</a> \u4F7F\u7528GT UI</h2><p>\u5168\u57DF\u5B89\u88DD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// \u8F09\u5165UI\u7684\u6A23\u5F0F\u6A94\u548C\u6A21\u7D44</span>
<span class="token keyword">import</span> <span class="token string">&#39;@greattree/front-ui/dist/assets/css/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GtUI <span class="token keyword">from</span> <span class="token string">&#39;@greattree/front-ui&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u900F\u904Euse\u65B9\u6CD5\u6703\u89F8\u767CGtUI install</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>GtUI<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u958B\u767C\u5C08\u6848\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u958B\u767C\u5C08\u6848\u914D\u7F6E" aria-hidden="true">#</a> \u958B\u767C\u5C08\u6848\u914D\u7F6E</h2><p>\u6240\u6709\u5143\u4EF6\u4F4D\u65BC package\u7D50\u69CB\u4E0B\u3002 package |<br> |__ scripts \u5305\u542B\u5C08\u6848\u4F7F\u7528\u5230\u7684npm\u3001sh\u8173\u672C |<br> |__ assets \u5143\u4EF6\u5305\u5167\u7684\u975C\u614B\u8CC7\u6E90(font svg scss) |<br> |__ components \u5143\u4EF6\u5305\u5167\u4F7F\u7528\u7684\u5143\u4EF6\uFF0C\u4F46\u6C92\u6709\u5217\u5728\u767C\u4F48\u7684\u5143\u4EF6\u6E05\u55AE\u5167 |<br> |__ gt-components \u6240\u6709@greattree/front-ui\u767C\u4F48\u7684\u5143\u4EF6\uFF0C\u6BCF\u500B\u5143\u4EF6\u518D\u5404\u81EA\u6709\u7368\u7ACB\u7684demo\u3001src\u593E |<br> |__ components.json \u900F\u904E<strong>npm run gen:component</strong>\u65B0\u589E\u5143\u4EF6\u5F8C\u7684\u5143\u4EF6\u6E05\u55AE |<br> |__ dist \u900F\u904E<strong>npm run build</strong>\u7522\u751F\u7684\u7D50\u679C |<br> |__ index.js \u900F\u904E<strong>npm run gen</strong> \u3001 <strong>npm run build</strong>\u7522\u751F</p><h2 id="\u6307\u5B9A\u79C1\u6709\u5EAB-optional" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u79C1\u6709\u5EAB-optional" aria-hidden="true">#</a> \u6307\u5B9A\u79C1\u6709\u5EAB(optional)</h2><ul><li>\u4F7F\u7528 <strong>.npmrc</strong> \u8A2D\u5B9A\u6A94</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#.npmrc
#\u6307\u5B9A@greattree package\u7684\u5009\u5EAB\u5730\u5740
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# \u4F7F\u7528npm\u5B89\u88DD\u5957\u4EF6\u6642 \u6703\u512A\u5148\u6307\u5411\u9019\u500B\u79C1\u6709\u5009\u5EAB \u5982\u679C\u6C92\u6709\u624D\u6703\u518D\u53BB\u516C\u958B\u5EAB\u67E5\u627E
registry=https://npmrg.greattree.com.tw/repository/npm-gt/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run gen

<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u767C\u4F48" tabindex="-1"><a class="header-anchor" href="#\u767C\u4F48" aria-hidden="true">#</a> \u767C\u4F48</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u9700\u8981\u8F38\u5165\u5E33\u865F \u5BC6\u78BC \u96FB\u5B50\u4FE1\u7BB1</span>
<span class="token function">npm</span> login
<span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#tag\u6307\u4EE4" aria-hidden="true">#</a> Tag\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## tag\u76EE\u9304</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span>

<span class="token comment">## tag\u65B0\u589E</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v0.0.xx

<span class="token comment">## tag\u522A\u9664</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.0.xx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95DC\u65BC\u79C1\u6709\u5EAB\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u95DC\u65BC\u79C1\u6709\u5EAB\u6587\u7AE0" aria-hidden="true">#</a> \u95DC\u65BC\u79C1\u6709\u5EAB\u6587\u7AE0</h2>`,18),v={href:"https://zhaomenghuan.js.org/blog/npm-private-repository-verdaccio.html#npm-%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93%E7%9A%84%E5%A5%BD%E5%A4%84",target:"_blank",rel:"noopener noreferrer"},g={href:"https://ithelp.ithome.com.tw/articles/10205616",target:"_blank",rel:"noopener noreferrer"},b={id:"\u5C08\u6848",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#\u5C08\u6848","aria-hidden":"true"},"#",-1),k={href:"https://github.com/lian0103/vue-ui",target:"_blank",rel:"noopener noreferrer"};function f(x,y){const s=r("router-link"),i=r("ExternalLinkIcon");return o(),c("div",null,[u,n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#\u5143\u4EF6\u5EAB\u5B89\u88DD"},{default:t(()=>[e("\u5143\u4EF6\u5EAB\u5B89\u88DD")]),_:1})]),n("li",null,[a(s,{to:"#\u4F7F\u7528gt-ui"},{default:t(()=>[e("\u4F7F\u7528GT UI")]),_:1})]),n("li",null,[a(s,{to:"#\u958B\u767C\u5C08\u6848\u914D\u7F6E"},{default:t(()=>[e("\u958B\u767C\u5C08\u6848\u914D\u7F6E")]),_:1})]),n("li",null,[a(s,{to:"#\u6307\u5B9A\u79C1\u6709\u5EAB-optional"},{default:t(()=>[e("\u6307\u5B9A\u79C1\u6709\u5EAB(optional)")]),_:1})]),n("li",null,[a(s,{to:"#\u6253\u5305"},{default:t(()=>[e("\u6253\u5305")]),_:1})]),n("li",null,[a(s,{to:"#\u767C\u4F48"},{default:t(()=>[e("\u767C\u4F48")]),_:1})]),n("li",null,[a(s,{to:"#tag\u6307\u4EE4"},{default:t(()=>[e("Tag\u6307\u4EE4")]),_:1})]),n("li",null,[a(s,{to:"#\u95DC\u65BC\u79C1\u6709\u5EAB\u6587\u7AE0"},{default:t(()=>[e("\u95DC\u65BC\u79C1\u6709\u5EAB\u6587\u7AE0")]),_:1})]),n("li",null,[a(s,{to:"#\u5C08\u6848"},{default:t(()=>[e("\u5C08\u6848")]),_:1})])])]),h,n("ol",null,[n("li",null,[n("a",v,[e("\u79C1\u6709\u5009\u7684\u9078\u9805"),a(i)])]),n("li",null,[n("a",g,[e("NPM: verdaccio"),a(i)])])]),n("h2",b,[_,e(),n("a",k,[e("\u5C08\u6848"),a(i)])])])}const w=l(p,[["render",f],["__file","library.html.vue"]]);export{w as default};
