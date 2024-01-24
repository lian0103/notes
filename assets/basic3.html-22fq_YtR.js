import{_ as e,r as t,o as p,c as o,a as n,d as c,b as i,e as s}from"./app-3yLlkFXl.js";const l={},r=s(`<h1 id="python-基礎學習" tabindex="-1"><a class="header-anchor" href="#python-基礎學習" aria-hidden="true">#</a> Python 基礎學習</h1><ul><li>執行 .py</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python basic.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>執行時添加必要參數</li></ul>`,4),u={href:"https://replit.com/@k1319900103/Start#basic3.py",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> argparse

parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token string">&#39;this is desc..&#39;</span><span class="token punctuation">)</span>

parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;--color&#39;</span><span class="token punctuation">,</span>
                    metavar<span class="token operator">=</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
                    required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
                    choices<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">&#39;set a color as parameter&#39;</span><span class="token punctuation">)</span>

args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>color<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[c("https://replit.com/@k1319900103/Start#basic3.py"),i(a)])]),d])}const h=e(l,[["render",k],["__file","basic3.html.vue"]]);export{h as default};
