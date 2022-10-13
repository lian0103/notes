import{_ as p,r as o,o as i,c,a as n,b as s,d as e,e as t}from"./app.82e9343b.js";const l={},r=n("h1",{id:"vue3\u3001vite\u548Celementplus\u5C08\u6848\u5EFA\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3\u3001vite\u548Celementplus\u5C08\u6848\u5EFA\u7F6E","aria-hidden":"true"},"#"),s(" vue3\u3001vite\u548CElementPlus\u5C08\u6848\u5EFA\u7F6E")],-1),u={id:"\u5B89\u88DD\u6D41\u7A0B",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#\u5B89\u88DD\u6D41\u7A0B","aria-hidden":"true"},"#",-1),k={href:"https://cn.vitejs.dev/guide/#trying-vite-online",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># node -v //16.13.0</span>
<span class="token comment"># npm -v //8.1.0</span>

<span class="token function">npm</span> create vite@latest

<span class="token builtin class-name">cd</span> <span class="token variable">\${folder-name}</span>

<span class="token function">npm</span> <span class="token function">install</span>

<span class="token function">npm</span> run dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u555F\u52D5\u7D50\u679C <img src="https://i.imgur.com/oMXZAer.png" alt=""></p>`,2),m={id:"vite-config-js",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#vite-config-js","aria-hidden":"true"},"#",-1),g={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://element-plus.gitee.io/en-US/guide/quickstart.html#on-demand-import",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span>
            <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_PROJECT_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;stage&#39;</span>
                <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_PROJECT_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span>
                <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;@/assets/styles/elementPlusInit.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token string">&#39;sass&#39;</span>
                        <span class="token comment">// directives: true,</span>
                        <span class="token comment">// version: &quot;1.2.0-beta.1&quot;,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">1600</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C0D\u61C9\u5728package.json\u7684\u8173\u672C\uFF0C\u8173\u672C\u5E36\u7684\u53C3\u6578mode\u53EF\u8B93vite.config.js\u4F7F\u7528\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite --mode stage&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build-stage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build  --mode stage&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={class:"custom-container warning"},f=n("p",{class:"custom-container-title"},"WARNING",-1),q={href:"https://element-plus.gitee.io/en-US/guide/namespace.html#set-scss-css-vars",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*  elementPlusInit.scss */</span>
<span class="token atrule"><span class="token rule">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span> with <span class="token punctuation">(</span>
    $<span class="token property">colors</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
        <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
            <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #3bb071
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BE6\u969B\u5C08\u6848 <img src="https://i.imgur.com/wx0n43E.png" alt=""></p>`,2);function E(j,x){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,n("h2",u,[d,s(),n("a",k,[s("\u5B89\u88DD\u6D41\u7A0B"),e(a)])]),v,n("h2",m,[b,s(),n("a",g,[s("vite.config.js"),e(a)])]),n("p",null,[s("\u9019\u500B\u8A2D\u5B9A\u5C6C\u6027\u6709\u63D2\u4EF6(plugin)\u3001\u6253\u5305\u914D\u7F6E(build)\u3001\u6A23\u5F0F(css)\u3001\u958B\u767C(server)\u7B49\u914D\u7F6E\u3002 \u4EE5\u4E0B\u7BC4\u4F8B\u662F\u5728\u5C08\u6848\u4E2D\u4F7F\u7528\u4E86vue3\u548C"),n("a",h,[s("ElementPlus"),e(a)]),s("\u3001\u6839\u64DA\u4E0D\u540Cmode\u53C3\u6578\u5728\u6253\u5305\u6642\u505Abase\u8DEF\u5F91\u7684\u8ABF\u6574\u3001\u4E5F\u5728css\u90E8\u4EFD\u52A0\u5165sass(\u9019\u80FD\u8B93.vue\u6A94lang='scss'\u88AB\u89E3\u6790)\u3002")]),y,n("div",_,[f,n("p",null,[s("\u5728elementPlus\u8981\u8907\u5BEB\u65E2\u6709\u7684\u6A23\u5F0F\u5B9A\u7FA9\uFF0C\u53EF\u4EE5\u53C3\u7167"),n("a",q,[s("\u5B98\u7DB2"),e(a)]),s("\u5BEB\u6CD5\u8907\u5BEB\uFF0C\u800C\u5728vite.config.js\u4E2D\u7684\u8A2D\u5B9A\uFF0C\u662F\u8B93\u9019\u500B\u8907\u5BEB\u7684scss\u6A94\u80FD\u90FD\u5F15\u5165\u5230\u5404\u500B\u5143\u4EF6\u3002")])]),w])}const I=p(l,[["render",E],["__file","vue3AndVite.html.vue"]]);export{I as default};
