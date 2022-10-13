import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as i}from"./app.f5b9a5c3.js";const l={},u=i(`<h1 id="vite-build-config" tabindex="-1"><a class="header-anchor" href="#vite-build-config" aria-hidden="true">#</a> Vite build config</h1><h2 id="\u60C5\u5883\u4E00-vite-build\u7684chunk\u9AD4\u7A4D\u904E\u5927" tabindex="-1"><a class="header-anchor" href="#\u60C5\u5883\u4E00-vite-build\u7684chunk\u9AD4\u7A4D\u904E\u5927" aria-hidden="true">#</a> \u60C5\u5883\u4E00:vite build\u7684chunk\u9AD4\u7A4D\u904E\u5927</h2><p>\u96A8\u8457\u5C08\u6848\u5167\u5BB9\u7684\u589E\u52A0\uFF0C\u5728\u6253\u5305/\u5206\u6A94\u7684\u7B56\u7565\u4E0A\u5FC5\u9808\u81EA\u884C\u6DFB\u52A0\uFF0C\u5426\u5247\u6703\u51FA\u73FE\u50CF\u622A\u5716\u7684\u932F\u8AA4\u8A0A\u606F\uFF0C\u55AE\u4E00\u500B\u7684chunk\u9AD4\u7A4D\u904E\u5927\u3002</p><p><img src="https://i.imgur.com/WLC92uq.jpg" alt=""></p><h3 id="\u5C0D\u61C9\u7684\u512A\u5316" tabindex="-1"><a class="header-anchor" href="#\u5C0D\u61C9\u7684\u512A\u5316" aria-hidden="true">#</a> \u5C0D\u61C9\u7684\u512A\u5316</h3><p>\u4F9D\u7167\u63D0\u793A\u7684build.rollupOptions.output.manualChunks\u4F86\u5EFA\u7ACB\u898F\u5247\u3002\u7576\u501A\u8CF4\u7684id\u5305\u542Bnode_modules\u6642\u53EF\u4EE5\u7406\u89E3\u70BA\u9019\u662F\u5C08\u6848\u4E2D\u4F7F\u7528\u5230\u7684\u5176\u4ED6npm\u958B\u6E90package\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7368\u7ACB\u6210\u4E00\u500Bchunk\uFF0C\u4E26\u53EA\u64F7\u53D6\u5176package name\u4F5C\u70BA\u5176[name]\uFF0C\u9019\u6A23\u5C31\u4E0D\u6703\u628A\u501A\u8CF4\u7684package\u6253\u5305\u5728\u4E00\u8D77\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> config <span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token literal-property property">build</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
          <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;assets/js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">assetFileNames</span><span class="token operator">:</span> <span class="token string">&#39;assets/static/[name]-[hash].[ext]&#39;</span><span class="token punctuation">,</span>
              <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u4E5F\u53EF\u4EE5\u4F9D\u64DA\u9700\u6C42\uFF0C\u518D\u628A\u6307\u5B9A\u7684\u501A\u8CF4\u505A\u5206\u6A94</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r={href:"https://juejin.cn/post/7119455615840092173",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"\u5207\u5206\u5F8C\u7684\u7D50\u679C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5207\u5206\u5F8C\u7684\u7D50\u679C","aria-hidden":"true"},"#"),s(" \u5207\u5206\u5F8C\u7684\u7D50\u679C")],-1),k=n("p",null,[n("img",{src:"https://i.imgur.com/FSL45my.jpg",alt:""})],-1);function m(v,h){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("\u53C3\u8003\u6587\u7AE0"),c(a)])]),d,k])}const g=t(l,[["render",m],["__file","buildByVite.html.vue"]]);export{g as default};