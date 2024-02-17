import{_ as t,r as e,o,c as p,a as n,d as s,b as c,f as i}from"./app-QUezCbp3.js";const l={},u=n("h1",{id:"python-猜拳遊戲",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-猜拳遊戲","aria-hidden":"true"},"#"),s(" Python 猜拳遊戲")],-1),r={href:"https://replit.com/@k1319900103/Start#game.py",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">def</span> <span class="token function">get_choice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  choices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;rock&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;paper&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;scissors&quot;</span><span class="token punctuation">]</span>
  player_choice <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a choice ( rock , paper , scissors :)&quot;</span><span class="token punctuation">)</span>
  computer_choice <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>choices<span class="token punctuation">)</span>
  choices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">:</span> player_choice<span class="token punctuation">,</span> <span class="token string">&quot;computer&quot;</span><span class="token punctuation">:</span> computer_choice<span class="token punctuation">}</span>
  <span class="token keyword">return</span> choices


<span class="token keyword">def</span> <span class="token function">check_win</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> computer<span class="token punctuation">)</span><span class="token punctuation">:</span>
  choices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;rock&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;paper&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;scissors&quot;</span><span class="token punctuation">]</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You chose &quot;</span> <span class="token operator">+</span> player <span class="token operator">+</span> <span class="token string">&quot;, computer chose &quot;</span> <span class="token operator">+</span> computer<span class="token punctuation">)</span>

  <span class="token keyword">try</span><span class="token punctuation">:</span>
    choices<span class="token punctuation">.</span>index<span class="token punctuation">(</span>player<span class="token punctuation">)</span>
  <span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Your choice is not in list&quot;</span>

  <span class="token keyword">if</span> player <span class="token operator">==</span> computer<span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;No one win , it&#39;s tie&quot;</span>
  <span class="token keyword">elif</span> player <span class="token operator">==</span> <span class="token string">&quot;rock&quot;</span> <span class="token keyword">and</span> computer <span class="token operator">==</span> <span class="token string">&quot;paper&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;computer win&quot;</span>
  <span class="token keyword">elif</span> player <span class="token operator">==</span> <span class="token string">&quot;paper&quot;</span> <span class="token keyword">and</span> computer <span class="token operator">==</span> <span class="token string">&quot;scissors&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;computer win&quot;</span>
  <span class="token keyword">elif</span> player <span class="token operator">==</span> <span class="token string">&quot;scissors&quot;</span> <span class="token keyword">and</span> computer <span class="token operator">==</span> <span class="token string">&quot;rock&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;computer win&quot;</span>

  <span class="token keyword">return</span> <span class="token string">&quot;You win!&quot;</span>


choicesResult <span class="token operator">=</span> get_choice<span class="token punctuation">(</span><span class="token punctuation">)</span>
gameResult <span class="token operator">=</span> check_win<span class="token punctuation">(</span>choicesResult<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                       choicesResult<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;computer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---&gt; &quot;</span> <span class="token operator">+</span> gameResult<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=e("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",r,[s("https://replit.com/@k1319900103/Start#game.py"),c(a)])]),k])}const b=t(l,[["render",d],["__file","game.html.vue"]]);export{b as default};
