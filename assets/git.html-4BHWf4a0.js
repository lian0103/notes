import{_ as e,o as s,c as a,e as n}from"./app-EReB7DYn.js";const i="/assets/git_01-hGYrHaho.png",t="/assets/git_02-EkTyjbiR.png",r="/assets/git_03-AVkpDsXX.png",d="/assets/git_04-BigxWjqU.png",c={},o=n('<h1 id="git-操作" tabindex="-1"><a class="header-anchor" href="#git-操作" aria-hidden="true">#</a> git 操作</h1><p>情境：當開發新功能，從分支<strong>main</strong>切出分支<strong>feat-test</strong>，提交了 Commit :c71017d，分支<strong>main</strong>也有了新的 Commit:773f3f6 紀錄。 <img src="'+i+`" alt="情境"></p><h2 id="第一種合併-使用-git-rebase" tabindex="-1"><a class="header-anchor" href="#第一種合併-使用-git-rebase" aria-hidden="true">#</a> 第一種合併:使用 git rebase</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout feat-test

<span class="token function">git</span> rebase main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作結果可以看到，rebase 動作將 Commit :c71017d 給轉換成 Commit: ec7262d，再加入回分支<strong>main</strong>。 <img src="`+t+`" alt="情境"></p><h2 id="第二種合併-使用-git-merge" tabindex="-1"><a class="header-anchor" href="#第二種合併-使用-git-merge" aria-hidden="true">#</a> 第二種合併:使用 git merge</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main

<span class="token function">git</span> merge feat-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作結果可以看到，merge 動作將 Commit :c71017d 改動併入了分支<strong>main</strong>，產生一個新的 Commit: 8c78f3bb。且分支<strong>feat-test</strong>的 Commit :c71017d 是留存在分支上，可以檢視完整的 commit 時序。 <img src="`+r+`" alt="情境"></p><h2 id="undo-git-操作" tabindex="-1"><a class="header-anchor" href="#undo-git-操作" aria-hidden="true">#</a> undo git 操作</h2><p>情境：不管使用 rebase 或 merge 動作，反悔了想要重做</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog

<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token variable">\${commit_hash}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先查看 git 的操作記錄，再指定要回到的 Commit，就可以達成重做的效果。 <img src="`+d+'" alt="情境"></p>',12),l=[o];function g(m,h){return s(),a("div",null,l)}const u=e(c,[["render",g],["__file","git.html.vue"]]);export{u as default};
