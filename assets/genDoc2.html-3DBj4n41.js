import{_ as e,r as o,o as c,c as l,a as n,b as t,w as p,d as s,e as i}from"./app-UadwKsYY.js";const u={},k=n("h1",{id:"vue3-ui頁面文檔建構過程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3-ui頁面文檔建構過程","aria-hidden":"true"},"#"),s(" vue3 UI頁面文檔建構過程")],-1),r={class:"table-of-contents"},d=i(`<h2 id="md套件-kangc-v-md-editor" tabindex="-1"><a class="header-anchor" href="#md套件-kangc-v-md-editor" aria-hidden="true">#</a> md套件 @kangc/v-md-editor</h2><p>在頁面上呈現md檔內容，借助於第三方的套件支持，也可以掛載在全局使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VMdEditor <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@kangc/v-md-editor/lib/style/base-editor.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vuepressTheme <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor/lib/theme/vuepress.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@kangc/v-md-editor/lib/theme/style/vuepress.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createHighlightLinesPlugin <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor/lib/plugins/highlight-lines/index&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createLineNumbertPlugin <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor/lib/plugins/line-number/index&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Prism <span class="token keyword">from</span> <span class="token string">&#39;prismjs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;prismjs/components/prism-json&#39;</span><span class="token punctuation">;</span>

VMdEditor<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuepressTheme<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  Prism<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

VMdEditor<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createHighlightLinesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
VMdEditor<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createLineNumbertPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VMdEditor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="準備頁面的展示和md文檔" tabindex="-1"><a class="header-anchor" href="#準備頁面的展示和md文檔" aria-hidden="true">#</a> 準備頁面的展示和md文檔</h2><p>每個組件依據 <strong>組件名稱</strong> 命名的資料夾下的結構如下: <img src="https://i.imgur.com/9dLASa7.png" alt=""></p><p>其中要生成展示頁面的md文檔內容，就來自docs資料夾下。 <img src="https://i.imgur.com/aVVmVUn.png" alt=""></p><p><img src="https://i.imgur.com/Ozlqosz.png" alt=""></p><h2 id="遍歷每個組件結構中的demo-vue和docs-index-js" tabindex="-1"><a class="header-anchor" href="#遍歷每個組件結構中的demo-vue和docs-index-js" aria-hidden="true">#</a> 遍歷每個組件結構中的demo.vue和docs/index.js</h2><p>腳本如下: 檔案讀取寫入倚賴fs和handlebars。這裡處理的過程，遍歷組件列表，最後要生成一個依據<strong>組件名稱</strong>對應的範例內容的物件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">genGtDoc</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tpl <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./.template/gtDoc.js.tpl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;utf-8&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> list <span class="token operator">=</span> targetMap<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">.</span>list<span class="token punctuation">;</span>

  <span class="token keyword">const</span> docList <span class="token operator">=</span> list
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">compName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> demoFilePath <span class="token operator">=</span> targetMap<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getDemoFilePath</span><span class="token punctuation">(</span>compName<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> demoFile <span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span>demoFilePath<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 在這裡有要先處理特殊符號 避免在生成md檔錯誤</span>
      demoFile <span class="token operator">=</span> demoFile<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\`</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\$\\{</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>compName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;: \\\` \\\\\\\`\\\\\\\`\\\\\\\` html 
        </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>demoFile<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  \\\\\\\`\\\\\\\`\\\\\\\`  \\\`,</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n    &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> contentCompiled <span class="token operator">=</span> handlebars<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>tpl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">noEscape</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span> docList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  fs<span class="token punctuation">.</span><span class="token function">outputFile</span><span class="token punctuation">(</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> targetMap<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">.</span>demoFileOutputPath<span class="token punctuation">)</span><span class="token punctuation">,</span>
    contentCompiled<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>後續也要依據 <strong>組件名稱</strong> 列表來生成路由和頁面，也是依據相同的方式，遍歷組件列表後來生成。</p></blockquote><h2 id="最後使用上一開始掛載的v-md-editor" tabindex="-1"><a class="header-anchor" href="#最後使用上一開始掛載的v-md-editor" aria-hidden="true">#</a> 最後使用上一開始掛載的v-md-editor</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innerWrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full py-4 flex justify-center items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>componentName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-3 px-2 pt-6 w-full 2xl:w-3/4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docTableRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in docTableRef.show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-md-editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docTableRef[item]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preview<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-md-editor</span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoSourceRef<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoSourceRef<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preview<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function m(v,g){const a=o("router-link");return c(),l("div",null,[k,n("nav",r,[n("ul",null,[n("li",null,[t(a,{to:"#md套件-kangc-v-md-editor"},{default:p(()=>[s("md套件 @kangc/v-md-editor")]),_:1})]),n("li",null,[t(a,{to:"#準備頁面的展示和md文檔"},{default:p(()=>[s("準備頁面的展示和md文檔")]),_:1})]),n("li",null,[t(a,{to:"#遍歷每個組件結構中的demo-vue和docs-index-js"},{default:p(()=>[s("遍歷每個組件結構中的demo.vue和docs/index.js")]),_:1})]),n("li",null,[t(a,{to:"#最後使用上一開始掛載的v-md-editor"},{default:p(()=>[s("最後使用上一開始掛載的v-md-editor")]),_:1})])])]),d])}const h=e(u,[["render",m],["__file","genDoc2.html.vue"]]);export{h as default};