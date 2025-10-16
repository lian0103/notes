import{_ as c,r as s,o as r,c as u,a as e,b as i,w as l,d as n,f as t}from"./app-a3YRQ2EQ.js";const v={},m=e("h1",{id:"mongodb指令操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mongodb指令操作","aria-hidden":"true"},"#"),n(" MongoDB指令操作")],-1),b={class:"table-of-contents"},h=t(`<h2 id="開啟mongo-shell" tabindex="-1"><a class="header-anchor" href="#開啟mongo-shell" aria-hidden="true">#</a> 開啟mongo shell</h2><p>終端使用指令開啟mongo shell進行對mongo server的操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongosh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此時會連線至本地的Mongo Server <img src="https://i.imgur.com/xwfN6VP.png" alt=""></p><h2 id="dbs、collections操作" tabindex="-1"><a class="header-anchor" href="#dbs、collections操作" aria-hidden="true">#</a> dbs、collections操作</h2><div class="language-shell! line-numbers-mode" data-ext="shell!"><pre class="language-shell!"><code># 顯示db列表
show dbs

# 進入db
use [dbName]

# 顯示該db下有哪些集合
show collections

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doc操作" tabindex="-1"><a class="header-anchor" href="#doc操作" aria-hidden="true">#</a> doc操作</h2><p>語法</p><div class="language-shell! line-numbers-mode" data-ext="shell!"><pre class="language-shell!"><code># 查詢
db.[collectionName].find({})

# 新增
db.[collectionName].insertOne({...})

db.[collectionName].insertMany([{...},{...}...])

# 修改
db.[collectionName].updateOne({...})

db.[collectionName].updateMany([{...},{...}...])

# 聚合
db.[collectionName].aggregate([條件1,條件2,...])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g=t(`<h2 id="實作" tabindex="-1"><a class="header-anchor" href="#實作" aria-hidden="true">#</a> 實作</h2><div class="language-shell! line-numbers-mode" data-ext="shell!"><pre class="language-shell!"><code>
# 對inventory集合，新增一筆資料，item Field為&#39;aa1&#39;,_id Field為&#39;a123&#39;
# _id一般情況Mongo server會自動添加
db.inventory.insertOne({item:&#39;aa1&#39;,_id:&#39;a123&#39;}) 

# 對inventory集合，新增多筆資料
db.inventory.insertMany([{item:&#39;cc1&#39;,price:34,size:{h:2,w:10,l:12}},{item:&#39;cc2&#39;,price:50,size:{h:1,w:8,l:11}},{item:&#39;cc3&#39;,price:100,size:{h:3,w:4,l:12}}])

# 對inventory集合，更新符合條件(第一個參數 item Field為&quot;cc1&quot;)的一筆document做更新(第二個參數內容)
db.inventory.updateOne({item:&quot;cc1&quot;},{$set:{&quot;size.w&quot;:9,&quot;size.h&quot;:11}})

# 對inventory集合，更新符合條件(第一個參數 item Field為&quot;cc1&quot;)的所有document做更新(第二個參數內容)
db.inventory.updateMany({item:&quot;cc2&quot;},{$set:{good:true}})

# 查詢itHome集合中，標題Field包含有&quot;前端&quot;的結果
db.itHome.find({title:{$regex:/前端/g}})

# 查詢itHome集合中，標題Field包含有&quot;前端&quot;的結果，顯示其執行的情況
db.itHome.find({title:{$regex:/前端/g}}).explain(&quot;executionStats&quot;)

# 對itHome集合的標題Field做索引標籤 (可以增加查詢效率)
db.itHome.createIndex({title:1})

# 查詢itHome集合中，標題Field包含有&quot;前端&quot;的結果，限制最多只有10筆
db.itHome.find({title:{$regex:/前端/g}}).limit(10)

# 對itHome篩選條件1(標題Field內有&quot;前端&quot;)和條件二(updateTime Field為&quot;2022-10-04&quot;)結果
db.itHome.aggregate([{$match : {title:{$regex:/前端/g}}},{$match:{updateTime:&quot;2022-10-04&quot;}}])

# 對itHome篩選條件1(標題Field內有&quot;前端&quot;)和條件二(updateTime Field在&quot;2022-10-04&quot;之後)結果，並做分群組條件(不指定Field計算筆數)
db.itHome.aggregate([{$match : {title:{$regex:/前端/g},updateTime:{$gte:&quot;2022-10-04&quot;}}}, {$group:{_id:null,count:{$count:{}}}}])

# 對itHome篩選條件1(標題Field內有&quot;vue&quot;)結果，做分群組條件(指定updateTime Field為分類基準做計算筆數)，並指定_id正向排序
db.itHome.aggregate([{$match : {title:{$regex:/vue/g}}}, {$group:{_id:&quot;$updateTime&quot;,count:{$count:{}}}},{$sort:{_id:1}}])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="連結" tabindex="-1"><a class="header-anchor" href="#連結" aria-hidden="true">#</a> 連結</h2>`,3),_={href:"https://www.youtube.com/watch?v=9cWm74DteMQ&ab_channel=Bitfumes",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.mongodb.com/docs/mongodb-shell/run-commands/",target:"_blank",rel:"noopener noreferrer"};function q(f,x){const d=s("router-link"),o=s("Info"),a=s("ExternalLinkIcon");return r(),u("div",null,[m,e("nav",b,[e("ul",null,[e("li",null,[i(d,{to:"#開啟mongo-shell"},{default:l(()=>[n("開啟mongo shell")]),_:1})]),e("li",null,[i(d,{to:"#dbs、collections操作"},{default:l(()=>[n("dbs、collections操作")]),_:1})]),e("li",null,[i(d,{to:"#doc操作"},{default:l(()=>[n("doc操作")]),_:1})]),e("li",null,[i(d,{to:"#實作"},{default:l(()=>[n("實作")]),_:1})]),e("li",null,[i(d,{to:"#連結"},{default:l(()=>[n("連結")]),_:1})])])]),h,i(o,null,{default:l(()=>[n(" 語法提示可在mongo shell打出開頭後，按tab鍵 ")]),_:1}),g,e("ol",null,[e("li",null,[e("a",_,[n("MongoDB course 2022 | MongoDB tutorial"),i(a)])]),e("li",null,[e("a",p,[n("MongoDB document"),i(a)])])])])}const w=c(v,[["render",q],["__file","mongoDBShell.html.vue"]]);export{w as default};
