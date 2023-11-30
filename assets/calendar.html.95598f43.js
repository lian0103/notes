import{_ as t,r as p,o as e,c as o,a as s,d as n,b as c,e as i}from"./app.17b384ce.js";const u="/./assets/calendar01.bb19827a.png",l="/./assets/calendar02.af56e804.png",r="/./assets/calendar03.df79f217.png",k={},d=s("h1",{id:"_30-\u5929\u65E5\u66C6\u73ED\u8868\u986F\u793A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_30-\u5929\u65E5\u66C6\u73ED\u8868\u986F\u793A","aria-hidden":"true"},"#"),n(" 30 \u5929\u65E5\u66C6\u73ED\u8868\u986F\u793A")],-1),v={href:"https://codesandbox.io/discover",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="\u65E5\u66C6\u986F\u793A" tabindex="-1"><a class="header-anchor" href="#\u65E5\u66C6\u986F\u793A" aria-hidden="true">#</a> \u65E5\u66C6\u986F\u793A</h2><p>\u627E\u5230\u7684\u7BC4\u4F8B\u662F\u4F7F\u7528 vue2\u3001daysjs \u548C grid \u6392\u7248\u65B9\u5F0F\u5B8C\u6210\uFF0C\u6709\u57FA\u672C\u5207\u63DB\u524D\u5F8C\u6708\u4EFD\u7684\u529F\u80FD</p><p><img src="'+u+'" alt="\u65E5\u66C6\u986F\u793A"></p><h2 id="\u76EE\u6A19\u7D50\u679C" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6A19\u7D50\u679C" aria-hidden="true">#</a> \u76EE\u6A19\u7D50\u679C</h2><p>\u6BCF\u4E00\u500B\u73ED\u8868\u53EF\u80FD\u6703\u6709\u8DE8\u591A\u5929\u7684\u60C5\u6CC1\uFF0C\u8981\u5728\u6BCF\u4E00\u500B\u65E5\u671F\u683C\u5B50\u5167\u5224\u65B7\u73ED\u8868\u8981\u5448\u73FE\u7684\u72C0\u614B\uFF0C\u5305\u542B\uFF1A\u662F\u7B2C\u4E00\u5929\u3001\u662F\u4EFB\u52D9\u671F\u9593\u3001\u662F\u6700\u5F8C\u4E00\u5929\uFF0C\u4F86\u6C7A\u5B9A\u8981\u986F\u793A\u7684\u6A23\u5F0F\u3002\u6A23\u5F0F\u90E8\u5206\u5229\u7528\u4E86::before ::affter \u628A\u8DE8\u65E5\u671F\u7684\u5340\u584A\u88DC\u4E0A\u3002</p><p><img src="'+l+'" alt="\u65E5\u66C6\u986F\u793A"></p><p><img src="'+r+`" alt="\u65E5\u66C6\u986F\u793A"></p><h2 id="\u8A08\u7B97\u51FA\u6BCF\u4E00\u5929\u7684\u4EFB\u52D9\u9663\u5217" tabindex="-1"><a class="header-anchor" href="#\u8A08\u7B97\u51FA\u6BCF\u4E00\u5929\u7684\u4EFB\u52D9\u9663\u5217" aria-hidden="true">#</a> \u8A08\u7B97\u51FA\u6BCF\u4E00\u5929\u7684\u4EFB\u52D9\u9663\u5217</h2><p>\u9019\u88E1\u505A\u7684\u4E8B\u60C5\uFF0C\u662F\u628A\u6BCF\u4E00\u5929\u7684\u4EFB\u52D9\u505A\u91CD\u65B0\u6392\u5E8F(\u63DB\u4F4D\u7F6E)\uFF0C\u9019\u6A23\u53EF\u4EE5\u8B93\u4EFB\u52D9\u5728\u63DB\u5929\u6642\u80FD\u5728\u540C\u4E00\u500B\u6C34\u5E73\u7DDA\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">daysTasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> daysDate <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>days<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">day</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> day<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> daysTask <span class="token operator">=</span> daysDate<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dayTaskArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roster <span class="token comment">//\u73ED\u8868\u8CC7\u6599</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getIsInTaskDuration</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> task<span class="token punctuation">.</span>start<span class="token punctuation">,</span> task<span class="token punctuation">.</span>end<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>task<span class="token punctuation">,</span> date <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> dayTaskArr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> formatDaysTask <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  daysTask<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">curArr<span class="token punctuation">,</span> currentIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      formatDaysTask<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> prevFormatArr <span class="token operator">=</span> formatDaysTask<span class="token punctuation">[</span>currentIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> formatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    curArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> inPreDayTask <span class="token operator">=</span> prevFormatArr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preItem</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> preItem<span class="token operator">?.</span>id <span class="token operator">===</span> item<span class="token operator">?.</span>id<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inPreDayTask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> inPreDayTaskIndex <span class="token operator">=</span> prevFormatArr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">preItem</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> preItem<span class="token operator">?.</span>id <span class="token operator">===</span> item<span class="token operator">?.</span>id
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>formatArr<span class="token punctuation">[</span>inPreDayTaskIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u63DB\u4F4D\u7F6E</span>
          <span class="token keyword">let</span> temp <span class="token operator">=</span> formatArr<span class="token punctuation">[</span>inPreDayTaskIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
          formatArr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        formatArr<span class="token punctuation">[</span>inPreDayTaskIndex<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>formatArr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u63DB\u4F4D\u7F6E</span>
          formatArr<span class="token punctuation">[</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        formatArr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    formatDaysTask<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>formatArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> formatDaysTask<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(f,y){const a=p("ExternalLinkIcon");return e(),o("div",null,[d,s("p",null,[n("\u5DE5\u4F5C\u4E0A\u9047\u5230\u7684\u9700\u6C42\uFF0C\u4F7F\u7528\u8005\u9700\u8981\u5728\u756B\u9762\u986F\u793A\u7576\u6708\u7684\u6392\u73ED\u3002\u6280\u8853\u4E0A\uFF0C\u53EF\u4EE5\u5148\u62C6\u89E3\u6210\u65E5\u66C6\u90E8\u5206\u548C\u986F\u793A\u73ED\u8868\u5169\u9805\uFF0C\u524D\u8005\u5728"),s("a",v,[n("codesanbox"),c(a)]),n("\u627E\u5230\u4E00\u4E9B\u7BC4\u4F8B\uFF0C\u5F8C\u8005\u5247\u9700\u8981\u601D\u8003\u8981\u600E\u9EBC\u505A\u5230\u4EFB\u52D9\u986F\u793A\u3002")]),m])}const _=t(k,[["render",b],["__file","calendar.html.vue"]]);export{_ as default};