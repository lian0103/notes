import{_ as t,r as i,o as l,c as o,a as n,b as e,w as c,d as a,e as p}from"./app.d919249c.js";const r={},d=n("h1",{id:"docker\u4F7F\u7528\u77E5\u8B58\u8207\u65B9\u6CD5-\u95B1\u8B80\u7B46\u8A18-\u4E8C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker\u4F7F\u7528\u77E5\u8B58\u8207\u65B9\u6CD5-\u95B1\u8B80\u7B46\u8A18-\u4E8C","aria-hidden":"true"},"#"),a(" Docker\u4F7F\u7528\u77E5\u8B58\u8207\u65B9\u6CD5 \u95B1\u8B80\u7B46\u8A18(\u4E8C)")],-1),u={class:"table-of-contents"},m=p(`<img src="https://i.imgur.com/BhBysqw.jpg" style="width:300px;"><h2 id="\u5B89\u88DDdocker-desktop-mac\u7248" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88DDdocker-desktop-mac\u7248" aria-hidden="true">#</a> \u5B89\u88DDDocker Desktop(Mac\u7248)</h2><ul><li>\u5B89\u88DD\u7D50\u679C</li></ul><img src="https://i.imgur.com/HNS31yG.png" style="width:300px;"><ul><li>\u555F\u52D5\u8207\u505C\u7528Docker Engine</li></ul><img src="https://i.imgur.com/nMSnF1L.png" style="width:300px;"><h2 id="doccker\u64CD\u4F5C\u6307\u4EE4\u7684\u7D50\u69CB" tabindex="-1"><a class="header-anchor" href="#doccker\u64CD\u4F5C\u6307\u4EE4\u7684\u7D50\u69CB" aria-hidden="true">#</a> Doccker\u64CD\u4F5C\u6307\u4EE4\u7684\u7D50\u69CB</h2><ul><li>\u4E0A\u7D1A\u6307\u4EE4\u8207\u526F\u6307\u4EE4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token punctuation">[</span>\u4E0A\u7D1A\u6307\u4EE4+\u526F\u6307\u4EE4<span class="token punctuation">]</span> \u5C0D\u8C61
<span class="token comment">## ex docker container\uFF08\u4E0A\u7D1A\u6307\u4EE4\uFF09 run (\u526F\u6307\u4EE4) penguin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9078\u9805\u8207\u53C3\u6578(Optional) <strong>\u9078\u9805\u548C\u53C3\u6578\u64FA\u653E\u9806\u5E8F\u6703\u5F71\u97FF\u57F7\u884C</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token punctuation">[</span>\u4E0A\u7D1A\u6307\u4EE4+\u526F\u6307\u4EE4<span class="token punctuation">]</span> <span class="token punctuation">[</span>-\u9078\u9805<span class="token punctuation">]</span> <span class="token punctuation">[</span>--\u53C3\u6578<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u6620\u50CF\u6A94<span class="token punctuation">]</span> 
<span class="token comment">## ex docker container(\u4E0A\u7D1A\u6307\u4EE4) run(\u526F\u6307\u4EE4) -d(\u9078\u9805) penguin --mode=1(\u53C3\u6578)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u4EE5\u540C\u6642\u5E36\u5165\u591A\u500B<strong>\u9078\u9805 -dit</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container run <span class="token parameter variable">-dit</span> penguin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5E38\u7528\u6307\u4EE4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> version <span class="token comment">## \u67E5\u770B\u7248\u672C</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token comment">## \u7B49\u540C docker container ls -a(\u6240\u6709\u5BB9\u5668)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u5F97\u6620\u50CF\u6A94" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5F97\u6620\u50CF\u6A94" aria-hidden="true">#</a> \u53D6\u5F97\u6620\u50CF\u6A94</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token punctuation">[</span>image<span class="token punctuation">]</span> <span class="token comment">## \u5728docker hub\u4E2D\u5DF2\u767C\u4F48\u7684\u6620\u50CF\u6A94</span>
<span class="token function">docker</span> image <span class="token function">ls</span> <span class="token comment">## \u5728\u4E3B\u6A5F\u5DF2\u5B58\u5728\u7684\u6620\u50CF\u6A94</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i.imgur.com/UTKCNwB.png" style="width:300px;"><h2 id="\u5BB9\u5668-\u5EFA\u7ACB\u3001\u555F\u52D5\u3001\u505C\u7528\u3001\u522A\u9664" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668-\u5EFA\u7ACB\u3001\u555F\u52D5\u3001\u505C\u7528\u3001\u522A\u9664" aria-hidden="true">#</a> \u5BB9\u5668-\u5EFA\u7ACB\u3001\u555F\u52D5\u3001\u505C\u7528\u3001\u522A\u9664</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> webservice httpd:2.2 <span class="token comment">## \u4F9D\u64DAApache httpd\u6620\u50CF\u6A94[\u7248\u672C\u865F2.2]\uFF0C\u5EFA\u7ACB\u540D\u70BAwebservice\u7684\u5BB9\u5668\uFF0C\u5728\u80CC\u666F\u57F7\u884C(-d);\u672A\u6307\u5B9A\u7248\u672C\u865F\u6642\uFF0C\u9810\u8A2D\u662F\u6700\u65B0\u7248\u672C</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment">## \u67E5\u770B\u904B\u884C\u4E2D\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> stop <span class="token punctuation">[</span>container name<span class="token punctuation">]</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment">## \u67E5\u770B\u904B\u884C\u4E2D\u548C\u505C\u7528\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>container name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BB9\u5668-\u901A\u8A0A" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668-\u901A\u8A0A" aria-hidden="true">#</a> \u5BB9\u5668-\u901A\u8A0A</h2><ul><li>\u9023\u7DDAApache\u670D\u52D9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--name</span> webservice httpd 
<span class="token comment">## \u5916\u90E8\u8A2A\u554FDocker Engine\u8D708080port\uFF0C\u5C0D\u61C9\u5230webservice\u768480 port(\u7DB2\u8DEF\u9023\u63A5\u961C)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u672C\u5730\u8D70 http://localhost:8080 \u4FBF\u53EF\u4EE5\u8A2A\u554F\u3002</p><ul><li>\u9023\u7DDANgnix\u670D\u52D9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginxWebSerivec <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8907\u88FD\u5BB9\u5668\u8207\u4E3B\u6A5F\u7684\u6A94\u6848" tabindex="-1"><a class="header-anchor" href="#\u8907\u88FD\u5BB9\u5668\u8207\u4E3B\u6A5F\u7684\u6A94\u6848" aria-hidden="true">#</a> \u8907\u88FD\u5BB9\u5668\u8207\u4E3B\u6A5F\u7684\u6A94\u6848</h2><ul><li>\u66FF\u63DBApache\u7684index.html</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## step1 \u555F\u52D5\u7DB2\u8DEF\u670D\u52D9</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:80 <span class="token parameter variable">--name</span> webService001 httpd
<span class="token comment">## step2 \u8907\u88FD\u6A94\u6848</span>
<span class="token function">docker</span> <span class="token function">cp</span> /file/path <span class="token punctuation">[</span>container name<span class="token punctuation">]</span>:/usr/local/apache2/htdocs <span class="token comment">## \u6703\u770B\u5230\u65B0\u7684html\u5167\u5BB9</span>
<span class="token comment">## ex docker cp /Users/xxx/Desktop/index.html webService001:/usr/local/apache2/htdocs/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i.imgur.com/OMVpo65.png" style="width:300px;"><h2 id="\u5377\u5B97-volumn-\u639B\u8F09" tabindex="-1"><a class="header-anchor" href="#\u5377\u5B97-volumn-\u639B\u8F09" aria-hidden="true">#</a> \u5377\u5B97(volumn)\u639B\u8F09</h2><ul><li>-v\u9078\u9805\u5B58\u5728\u6642\uFF0C\u76EE\u7684\u662F\u8981\u628A\u6307\u5B9A\u5728<strong>\u5377\u5B97\u540D\u7A31/\u4E3B\u6A5F\u6A94\u6848\u8CC7\u6599\u593E\u8DEF\u5F91</strong>\uFF0C\u53D6\u4EE3<strong>\u5BB9\u5668\u5167\u6A94\u6848\u8CC7\u6599\u593E\u8DEF\u5F91</strong>\u4F86\u66FF\u4EE3\uFF0C\u56E0\u6B64\u5BB9\u5668\u5BE6\u969B\u4F7F\u7528\u7684\u8CC7\u6E90\u5C31\u6703\u662F\u5728\u672C\u6A5F\u3002\u63DB\u8A00\u4E4B\uFF0C\u5377\u5B97\u662F\u4E0D\u5B58\u5728\u65BC\u5BB9\u5668\u4E4B\u5167\uFF0C\u5377\u5B97\u662F\u5728\u5BB9\u5668\u904B\u884C\u6642\u639B\u8F09(mounted)\u4F86\u4F7F\u7528\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8084</span>:80 <span class="token parameter variable">--name</span> webService002 <span class="token parameter variable">-v</span> <span class="token punctuation">[</span>\u5377\u5B97\u540D\u7A31/\u4E3B\u6A5F\u6A94\u6848\u8CC7\u6599\u593E\u8DEF\u5F91<span class="token punctuation">]</span>:<span class="token punctuation">[</span>\u5BB9\u5668\u5167\u6A94\u6848\u8CC7\u6599\u593E\u8DEF\u5F91<span class="token punctuation">]</span> httpd 
<span class="token comment">## ex docker run -d -p 8084:80 --name webService002 -v /Users/jasonlien/Desktop/:/usr/local/apache2/htdocs/ httpd </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u639B\u8F09\u7D50\u679C</li></ul><img src="https://i.imgur.com/uOwHhwB.png" style="width:300px;"><br><img src="https://i.imgur.com/l7jLNEL.png" style="width:300px;">`,37);function k(h,v){const s=i("router-link");return l(),o("div",null,[d,n("nav",u,[n("ul",null,[n("li",null,[e(s,{to:"#\u5B89\u88DDdocker-desktop-mac\u7248"},{default:c(()=>[a("\u5B89\u88DDDocker Desktop(Mac\u7248)")]),_:1})]),n("li",null,[e(s,{to:"#doccker\u64CD\u4F5C\u6307\u4EE4\u7684\u7D50\u69CB"},{default:c(()=>[a("Doccker\u64CD\u4F5C\u6307\u4EE4\u7684\u7D50\u69CB")]),_:1})]),n("li",null,[e(s,{to:"#\u53D6\u5F97\u6620\u50CF\u6A94"},{default:c(()=>[a("\u53D6\u5F97\u6620\u50CF\u6A94")]),_:1})]),n("li",null,[e(s,{to:"#\u5BB9\u5668-\u5EFA\u7ACB\u3001\u555F\u52D5\u3001\u505C\u7528\u3001\u522A\u9664"},{default:c(()=>[a("\u5BB9\u5668-\u5EFA\u7ACB\u3001\u555F\u52D5\u3001\u505C\u7528\u3001\u522A\u9664")]),_:1})]),n("li",null,[e(s,{to:"#\u5BB9\u5668-\u901A\u8A0A"},{default:c(()=>[a("\u5BB9\u5668-\u901A\u8A0A")]),_:1})]),n("li",null,[e(s,{to:"#\u8907\u88FD\u5BB9\u5668\u8207\u4E3B\u6A5F\u7684\u6A94\u6848"},{default:c(()=>[a("\u8907\u88FD\u5BB9\u5668\u8207\u4E3B\u6A5F\u7684\u6A94\u6848")]),_:1})]),n("li",null,[e(s,{to:"#\u5377\u5B97-volumn-\u639B\u8F09"},{default:c(()=>[a("\u5377\u5B97(volumn)\u639B\u8F09")]),_:1})])])]),m])}const g=t(r,[["render",k],["__file","docker_2.html.vue"]]);export{g as default};
