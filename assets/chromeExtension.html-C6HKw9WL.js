import{_ as t,r as o,o as p,c,a as n,d as a,b as e,f as i}from"./app-eRNuxQFn.js";const l="/assets/demo1-k7v29Zcd.png",u="/assets/demo2-lFYbKJ_W.png",r="/assets/demo3-x3K57cHK.png",d={},m=i('<h1 id="chrome-extension-manifest-v3-做一個網頁遮罩" tabindex="-1"><a class="header-anchor" href="#chrome-extension-manifest-v3-做一個網頁遮罩" aria-hidden="true">#</a> Chrome Extension Manifest V3 - 做一個網頁遮罩</h1><p>透過這個插件，讓當前的網頁插入一個定位固定在最上層的遮罩，同時操控畫面上的 overflow 樣式，讓高度卷軸消失。</p><h2 id="使用效果" tabindex="-1"><a class="header-anchor" href="#使用效果" aria-hidden="true">#</a> 使用效果</h2><p><img src="'+l+'" alt=""></p><ul><li>還可以切換圖片和遮罩背景色</li></ul><p><img src="'+u+`" alt=""></p><h2 id="chrome-object-model-的使用" tabindex="-1"><a class="header-anchor" href="#chrome-object-model-的使用" aria-hidden="true">#</a> chrome object model 的使用</h2><ul><li>runtime</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在chrome 背景執行完成時 do something...</span>
chrome<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>onInstalled<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something ex. 建立插件的操作選單</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>contextMenus</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建立插件的操作選單，contexts可以理解是在點選右鍵時的滑鼠位置的情境(對象)</span>
<span class="token keyword">const</span> contexts <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;selection&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editable&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;audio&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

chrome<span class="token punctuation">.</span>contextMenus<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
  <span class="token literal-property property">contexts</span><span class="token operator">:</span> contexts<span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 監聽操作選單的點擊事件</span>
chrome<span class="token punctuation">.</span>contextMenus<span class="token punctuation">.</span>onClicked<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>scripting</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在指定tab(網頁)裡執行Fn</span>
chrome<span class="token punctuation">.</span>scripting<span class="token punctuation">.</span><span class="token function">executeScript</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">tabId</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">func</span><span class="token operator">:</span> fn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>commands</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 監聽在manifest.json裡註冊的commands</span>
chrome<span class="token punctuation">.</span>commands<span class="token punctuation">.</span>onCommand<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>handleCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="註冊快捷鍵" tabindex="-1"><a class="header-anchor" href="#註冊快捷鍵" aria-hidden="true">#</a> 註冊快捷鍵</h2><p>目前發現，有些電腦可以載入插件後，就按照 manifest.json 設定快捷鍵。 但也有的情況是要在<a href="chrome://extensions/shortcuts">chrome://extensions/shortcuts</a>自行補上設定!</p><p><img src="`+r+'" alt=""></p><h2 id="補充" tabindex="-1"><a class="header-anchor" href="#補充" aria-hidden="true">#</a> 補充</h2>',19),k={href:"https://chrome.google.com/webstore/detail/tpp-mask/efgndgjkacnfncfjoglfngkjaififlkf?hl=zh-TW&authuser=0",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/lian0103/TPP-mask",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const s=o("ExternalLinkIcon");return p(),c("div",null,[m,n("p",null,[n("a",k,[a("Chrome 商店網址"),e(s)])]),n("p",null,[n("a",v,[a("github"),e(s)])])])}const x=t(d,[["render",h],["__file","chromeExtension.html.vue"]]);export{x as default};