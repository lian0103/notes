import{_ as e,r as o,o as l,c as r,b as s,a as p,w as t,d as n,e as c}from"./app.bde56f88.js";const i={},u=s("h1",{id:"vue3-slot-card\u7D44\u4EF6\u5BE6\u4F5C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue3-slot-card\u7D44\u4EF6\u5BE6\u4F5C","aria-hidden":"true"},"#"),n(" vue3 slot & Card\u7D44\u4EF6\u5BE6\u4F5C")],-1),d={class:"table-of-contents"},k=c(`<h2 id="\u756B\u9762\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u756B\u9762\u9700\u6C42" aria-hidden="true">#</a> \u756B\u9762\u9700\u6C42</h2><p>1.\u5716\u7247\u5BEC\u9AD8\u6BD416:9</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">;</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 16 / 9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4F7F\u7528vue3 props &amp; slot \u5728vue3\u7684template\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E0D\u5177\u540D\u6216\u5177\u540D\u7684slot\u6A19\u7C64\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5B50\u5C64  </span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;dics&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>

<span class="token comment">//\u7236\u5C64</span>
<span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>dics<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;key in Object.keys(item.dics)&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;key&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>dics<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u5B50\u5C64\u8A3B\u518A\u4E8B\u4EF6\u4E26\u56DE\u50B3\u64CD\u4F5C\u7236\u5C64\u8CC7\u6599 -&gt; \u6211\u5728\u7236\u5C64\u5B9A\u7FA9fn\u50B3\u7D66\u5B50\u5C64\u505A\u547C\u53EB\uFF0C\u9054\u5230callback\u4F5C\u7528</p><p>4.\u6392\u7248\u4F7F\u7528flex &amp; grid</p><p><img src="https://i.imgur.com/poCoY2t.jpg" alt=""></p><h2 id="card-vue" tabindex="-1"><a class="header-anchor" href="#card-vue" aria-hidden="true">#</a> Card.vue</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">img</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">isClick</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">handleBtnClick</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;ratioBox&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;img&quot;</span> <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;props.img&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;dics&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;dics&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btnP&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button
          <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn&quot;</span>
          <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;props.isClick ? &#39;btnDelete&#39; : &#39;btnPrimary&#39;&quot;</span>
          @click<span class="token operator">=</span><span class="token string">&quot;handleBtnClick&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>isClick <span class="token operator">?</span> <span class="token string">&quot;DELETE&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ADD&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>card <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 0px 10px<span class="token punctuation">;</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> 350px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>img <span class="token punctuation">{</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  aspect<span class="token operator">-</span>ratio<span class="token operator">:</span> <span class="token number">16</span> <span class="token operator">/</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>dics <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
p <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> 1fr 3fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

span <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>btnP <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 10px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 10px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btnPrimary <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> paleturquoise<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btnDelete <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const a=o("router-link");return l(),r("div",null,[u,s("nav",d,[s("ul",null,[s("li",null,[p(a,{to:"#\u756B\u9762\u9700\u6C42"},{default:t(()=>[n("\u756B\u9762\u9700\u6C42")]),_:1})]),s("li",null,[p(a,{to:"#card-vue"},{default:t(()=>[n("Card.vue")]),_:1})])])]),k])}const y=e(i,[["render",v],["__file","card.html.vue"]]);export{y as default};
