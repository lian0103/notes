import{_ as e,o as a,c as s,e as n}from"./app.2272493b.js";const i={},r=n(`<h1 id="dockerfile-image-hub" tabindex="-1"><a class="header-anchor" href="#dockerfile-image-hub" aria-hidden="true">#</a> Dockerfile &amp; image &amp; hub</h1><p>\u5728docker hub\u5EFA\u7ACB\u81EA\u5DF1\u7684\u5132\u5B58\u7A7A\u9593(registry)\u3002\u7DF4\u7FD2\u4E0A\u50B3(push)\u5728\u672C\u5730\u51FA\u7684\u6620\u50CF\u6A94(image)\u5230\u81EA\u5DF1\u7684\u5132\u5B58\u7A7A\u9593\u4E0B\u7684\u5132\u5B58\u5EAB(repository)\u3002</p><h3 id="step1-write-a-dockerfile" tabindex="-1"><a class="header-anchor" href="#step1-write-a-dockerfile" aria-hidden="true">#</a> step1 write a dockerfile</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM node:12.22.1-alpine

WORKDIR /app

COPY <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>

RUN <span class="token function">npm</span> <span class="token function">install</span>

EXPOSE <span class="token number">8080</span>

CMD <span class="token punctuation">[</span><span class="token string">&quot;npm&quot;</span>,<span class="token string">&quot;run&quot;</span>,<span class="token string">&quot;dev&quot;</span> <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step2-create-a-image" tabindex="-1"><a class="header-anchor" href="#step2-create-a-image" aria-hidden="true">#</a> step2 create a image</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> node12-app <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step3-run-image" tabindex="-1"><a class="header-anchor" href="#step3-run-image" aria-hidden="true">#</a> step3 run image</h3><p>give args <img src="https://i.imgur.com/yoDqpCS.jpg" alt=""></p><p>open on localhost <img src="https://i.imgur.com/4sWbwOy.jpg" alt=""></p><h3 id="step4-set-image-with-tag" tabindex="-1"><a class="header-anchor" href="#step4-set-image-with-tag" aria-hidden="true">#</a> step4 set image with tag</h3><p>local image name : node12-app my docker hub / repository name : jason0103/node12-app version : 1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> tag node12-app jason0103/node12-app:1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step5" tabindex="-1"><a class="header-anchor" href="#step5" aria-hidden="true">#</a> step5</h3><p>push the image to your registry of docker hub</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> push jason0103/node12-app:1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[r];function l(t,c){return a(),s("div",null,d)}const p=e(i,[["render",l],["__file","learnDockerfile.html.vue"]]);export{p as default};
