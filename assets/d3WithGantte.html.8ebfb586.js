import{_ as c,r as e,o as i,c as l,a as n,d as a,w as p,b as s,e as u}from"./app.f5ade4da.js";const r={},k=n("h1",{id:"d3-js-\u756B\u7518\u7279\u5716",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#d3-js-\u756B\u7518\u7279\u5716","aria-hidden":"true"},"#"),s(" D3.js \u756B\u7518\u7279\u5716")],-1),d={class:"table-of-contents"},g=u(`<p>\u4EE5SVG\u6A19\u7C64\u70BA\u6280\u8853\u57FA\u790E\u7684D3.js\uFF0Cd3\u63D0\u4F9B\u5404\u7A2EAPI\u5EAB\u4F86\u64CD\u4F5CSVG\uFF0C\u5B83\u662F\u529F\u80FD\u5F88\u591A\u7684\u4E00\u500B\u51FD\u793A\u5EAB\u3002\u800C\u7406\u89E3SVG\u7684\u6838\u5FC3\uFF0C\u9700\u8981\u73FE\u6709\u5716\u5C64\u3001\u5B9A\u4F4D(x,y)\u7684\u8A8D\u77E5\uFF0C\u5728\u64CD\u4F5C\u7684\u904E\u7A0B\u5C31\u662F\u628A\u6BCF\u500B\u5716\u5C64\u758A\u52A0\u5728\u4E00\u8D77\uFF0C\u4E26\u5728\u5167\u7684\u6A19\u7C64\u4E0A\u7D81\u5B9A\u76E3\u807D\u4E8B\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u5BE6\u73FE\u4EA4\u4E92\u7684\u6548\u679C\u3002</p><h2 id="svg\u7D50\u69CB" tabindex="-1"><a class="header-anchor" href="#svg\u7D50\u69CB" aria-hidden="true">#</a> svg\u7D50\u69CB</h2><p>\u5F9E\u6E32\u67D3\u7D50\u679C\u4F86\u770B\uFF0C\u4E00\u500Bsvg\u4E2D\u6703\u5305\u542B\u591A\u500B&lt;g&gt;&lt;/g&gt;\u7684\u5167\u5BB9\uFF0C\u4E00\u500B&lt;g&gt;\u5373\u53EF\u4EE5\u7406\u89E3\u70BA\u5716\u5C64\uFF0C\u6BCF\u500B\u5716\u5C64\u5167\u6240\u7E6A\u88FD\u7684\u90E8\u5206\u5728d3\u4E2D\u5206\u958B\u8655\u7406\uFF0C\u4E5F\u8868\u793A\u6BCF\u500B\u5716\u5C64\u6709\u5B83\u5404\u81EA\u7684\u8CC7\u6599\u3002 <img src="https://i.imgur.com/OVKNZV9.png" alt=""></p><h2 id="\u5716\u5C64\u758A\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5716\u5C64\u758A\u52A0" aria-hidden="true">#</a> \u5716\u5C64\u758A\u52A0</h2><p><img src="https://i.imgur.com/uhIyg14.png" alt=""></p><h2 id="\u4EE3\u78BC" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u78BC" aria-hidden="true">#</a> \u4EE3\u78BC</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> svg <span class="token operator">=</span> d3
<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&#39;#d3-container&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span> height <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xAxisLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> titleLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> barlineLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> categoryLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> barsLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;barsRects&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> barsTextLayer <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;barsTexts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u5176\u4ED6\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v={href:"https://github.com/lian0103/nuxt3-notes/blob/main/components/GanttChart.vue",target:"_blank",rel:"noopener noreferrer"};function h(m,b){const t=e("router-link"),o=e("ExternalLinkIcon");return i(),l("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(t,{to:"#svg\u7D50\u69CB"},{default:p(()=>[s("svg\u7D50\u69CB")]),_:1})]),n("li",null,[a(t,{to:"#\u5716\u5C64\u758A\u52A0"},{default:p(()=>[s("\u5716\u5C64\u758A\u52A0")]),_:1})]),n("li",null,[a(t,{to:"#\u4EE3\u78BC"},{default:p(()=>[s("\u4EE3\u78BC")]),_:1})])])]),g,n("p",null,[n("a",v,[s("\u5B8C\u6574\u4EE3\u78BC"),a(o)])])])}const _=c(r,[["render",h],["__file","d3WithGantte.html.vue"]]);export{_ as default};
