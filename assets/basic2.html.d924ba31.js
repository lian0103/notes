import{_ as t,r as p,o as e,c as o,b as n,d as s,a as i,e as c}from"./app.bfd34305.js";const l={},u=n("h1",{id:"python-\u57FA\u790E\u5B78\u7FD2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-\u57FA\u790E\u5B78\u7FD2","aria-hidden":"true"},"#"),s(" Python \u57FA\u790E\u5B78\u7FD2")],-1),r={href:"https://replit.com/@k1319900103/Start#basic2.py",target:"_blank",rel:"noopener noreferrer"},k=c(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># functions</span>
<span class="token comment"># closure \u9589\u5305</span>
<span class="token keyword">def</span> <span class="token function">calcTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  total <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">nonlocal</span> total
    total <span class="token operator">+=</span> num
    <span class="token keyword">return</span> total

  <span class="token keyword">return</span> add


calc <span class="token operator">=</span> calcTotal<span class="token punctuation">(</span><span class="token punctuation">)</span>

calc<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
calc<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
calc<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>calc<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#40</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># loops while</span>
times <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> times <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;times is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
  times <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;loops end&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># loops for</span>
items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> items<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;item is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;item index is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; and item is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;range item is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> item <span class="token operator">!=</span> <span class="token number">9</span><span class="token punctuation">:</span>
    <span class="token keyword">continue</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;only item 9: &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># classes</span>


<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>

  <span class="token keyword">def</span> <span class="token function">walk</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;walking...&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>

  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

  <span class="token keyword">def</span> <span class="token function">bark</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;woof! &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>


andy <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Andy&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>andy<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
andy<span class="token punctuation">.</span>bark<span class="token punctuation">(</span><span class="token punctuation">)</span>
andy<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Modules</span>
<span class="token keyword">import</span> module

module<span class="token punctuation">.</span>test<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">from</span> math <span class="token keyword">import</span> sqrt

<span class="token keyword">print</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">(</span><span class="token number">81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("https://replit.com/@k1319900103/Start#basic2.py"),i(a)])]),k])}const y=t(l,[["render",d],["__file","basic2.html.vue"]]);export{y as default};
