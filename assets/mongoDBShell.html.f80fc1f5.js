import{_ as c,r as s,o as r,c as u,b as e,a as i,w as l,d as n,e as o}from"./app.292e8b48.js";const v={},m=e("h1",{id:"mongodb\u6307\u4EE4\u64CD\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mongodb\u6307\u4EE4\u64CD\u4F5C","aria-hidden":"true"},"#"),n(" MongoDB\u6307\u4EE4\u64CD\u4F5C")],-1),b={class:"table-of-contents"},h=o(`<h2 id="\u958B\u555Fmongo-shell" tabindex="-1"><a class="header-anchor" href="#\u958B\u555Fmongo-shell" aria-hidden="true">#</a> \u958B\u555Fmongo shell</h2><p>\u7D42\u7AEF\u4F7F\u7528\u6307\u4EE4\u958B\u555Fmongo shell\u9032\u884C\u5C0Dmongo server\u7684\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongosh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u6642\u6703\u9023\u7DDA\u81F3\u672C\u5730\u7684Mongo Server <img src="https://i.imgur.com/xwfN6VP.png" alt=""></p><h2 id="dbs\u3001collections\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dbs\u3001collections\u64CD\u4F5C" aria-hidden="true">#</a> dbs\u3001collections\u64CD\u4F5C</h2><div class="language-shell! ext-shell! line-numbers-mode"><pre class="language-shell!"><code># \u986F\u793Adb\u5217\u8868
show dbs

# \u9032\u5165db
use [dbName]

# \u986F\u793A\u8A72db\u4E0B\u6709\u54EA\u4E9B\u96C6\u5408
show collections

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doc\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#doc\u64CD\u4F5C" aria-hidden="true">#</a> doc\u64CD\u4F5C</h2><p>\u8A9E\u6CD5</p><div class="language-shell! ext-shell! line-numbers-mode"><pre class="language-shell!"><code># \u67E5\u8A62
db.[collectionName].find({})

# \u65B0\u589E
db.[collectionName].insertOne({...})

db.[collectionName].insertMany([{...},{...}...])

# \u4FEE\u6539
db.[collectionName].updateOne({...})

db.[collectionName].updateMany([{...},{...}...])

# \u805A\u5408
db.[collectionName].aggregate([\u689D\u4EF61,\u689D\u4EF62,...])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g=o(`<h2 id="\u5BE6\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BE6\u4F5C" aria-hidden="true">#</a> \u5BE6\u4F5C</h2><div class="language-shell! ext-shell! line-numbers-mode"><pre class="language-shell!"><code>
# \u5C0Dinventory\u96C6\u5408\uFF0C\u65B0\u589E\u4E00\u7B46\u8CC7\u6599\uFF0Citem Field\u70BA&#39;aa1&#39;,_id Field\u70BA&#39;a123&#39;
# _id\u4E00\u822C\u60C5\u6CC1Mongo server\u6703\u81EA\u52D5\u6DFB\u52A0
db.inventory.insertOne({item:&#39;aa1&#39;,_id:&#39;a123&#39;}) 

# \u5C0Dinventory\u96C6\u5408\uFF0C\u65B0\u589E\u591A\u7B46\u8CC7\u6599
db.inventory.insertMany([{item:&#39;cc1&#39;,price:34,size:{h:2,w:10,l:12}},{item:&#39;cc2&#39;,price:50,size:{h:1,w:8,l:11}},{item:&#39;cc3&#39;,price:100,size:{h:3,w:4,l:12}}])

# \u5C0Dinventory\u96C6\u5408\uFF0C\u66F4\u65B0\u7B26\u5408\u689D\u4EF6(\u7B2C\u4E00\u500B\u53C3\u6578 item Field\u70BA&quot;cc1&quot;)\u7684\u4E00\u7B46document\u505A\u66F4\u65B0(\u7B2C\u4E8C\u500B\u53C3\u6578\u5167\u5BB9)
db.inventory.updateOne({item:&quot;cc1&quot;},{$set:{&quot;size.w&quot;:9,&quot;size.h&quot;:11}})

# \u5C0Dinventory\u96C6\u5408\uFF0C\u66F4\u65B0\u7B26\u5408\u689D\u4EF6(\u7B2C\u4E00\u500B\u53C3\u6578 item Field\u70BA&quot;cc1&quot;)\u7684\u6240\u6709document\u505A\u66F4\u65B0(\u7B2C\u4E8C\u500B\u53C3\u6578\u5167\u5BB9)
db.inventory.updateMany({item:&quot;cc2&quot;},{$set:{good:true}})

# \u67E5\u8A62itHome\u96C6\u5408\u4E2D\uFF0C\u6A19\u984CField\u5305\u542B\u6709&quot;\u524D\u7AEF&quot;\u7684\u7D50\u679C
db.itHome.find({title:{$regex:/\u524D\u7AEF/g}})

# \u67E5\u8A62itHome\u96C6\u5408\u4E2D\uFF0C\u6A19\u984CField\u5305\u542B\u6709&quot;\u524D\u7AEF&quot;\u7684\u7D50\u679C\uFF0C\u986F\u793A\u5176\u57F7\u884C\u7684\u60C5\u6CC1
db.itHome.find({title:{$regex:/\u524D\u7AEF/g}}).explain(&quot;executionStats&quot;)

# \u5C0DitHome\u96C6\u5408\u7684\u6A19\u984CField\u505A\u7D22\u5F15\u6A19\u7C64 (\u53EF\u4EE5\u589E\u52A0\u67E5\u8A62\u6548\u7387)
db.itHome.createIndex({title:1})

# \u67E5\u8A62itHome\u96C6\u5408\u4E2D\uFF0C\u6A19\u984CField\u5305\u542B\u6709&quot;\u524D\u7AEF&quot;\u7684\u7D50\u679C\uFF0C\u9650\u5236\u6700\u591A\u53EA\u670910\u7B46
db.itHome.find({title:{$regex:/\u524D\u7AEF/g}}).limit(10)

# \u5C0DitHome\u7BE9\u9078\u689D\u4EF61(\u6A19\u984CField\u5167\u6709&quot;\u524D\u7AEF&quot;)\u548C\u689D\u4EF6\u4E8C(updateTime Field\u70BA&quot;2022-10-04&quot;)\u7D50\u679C
db.itHome.aggregate([{$match : {title:{$regex:/\u524D\u7AEF/g}}},{$match:{updateTime:&quot;2022-10-04&quot;}}])

# \u5C0DitHome\u7BE9\u9078\u689D\u4EF61(\u6A19\u984CField\u5167\u6709&quot;\u524D\u7AEF&quot;)\u548C\u689D\u4EF6\u4E8C(updateTime Field\u5728&quot;2022-10-04&quot;\u4E4B\u5F8C)\u7D50\u679C\uFF0C\u4E26\u505A\u5206\u7FA4\u7D44\u689D\u4EF6(\u4E0D\u6307\u5B9AField\u8A08\u7B97\u7B46\u6578)
db.itHome.aggregate([{$match : {title:{$regex:/\u524D\u7AEF/g},updateTime:{$gte:&quot;2022-10-04&quot;}}}, {$group:{_id:null,count:{$count:{}}}}])

# \u5C0DitHome\u7BE9\u9078\u689D\u4EF61(\u6A19\u984CField\u5167\u6709&quot;vue&quot;)\u7D50\u679C\uFF0C\u505A\u5206\u7FA4\u7D44\u689D\u4EF6(\u6307\u5B9AupdateTime Field\u70BA\u5206\u985E\u57FA\u6E96\u505A\u8A08\u7B97\u7B46\u6578)\uFF0C\u4E26\u6307\u5B9A_id\u6B63\u5411\u6392\u5E8F
db.itHome.aggregate([{$match : {title:{$regex:/vue/g}}}, {$group:{_id:&quot;$updateTime&quot;,count:{$count:{}}}},{$sort:{_id:1}}])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9023\u7D50" tabindex="-1"><a class="header-anchor" href="#\u9023\u7D50" aria-hidden="true">#</a> \u9023\u7D50</h2>`,3),_={href:"https://www.youtube.com/watch?v=9cWm74DteMQ&ab_channel=Bitfumes",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.mongodb.com/docs/mongodb-shell/run-commands/",target:"_blank",rel:"noopener noreferrer"};function q(f,x){const d=s("router-link"),t=s("Info"),a=s("ExternalLinkIcon");return r(),u("div",null,[m,e("nav",b,[e("ul",null,[e("li",null,[i(d,{to:"#\u958B\u555Fmongo-shell"},{default:l(()=>[n("\u958B\u555Fmongo shell")]),_:1})]),e("li",null,[i(d,{to:"#dbs\u3001collections\u64CD\u4F5C"},{default:l(()=>[n("dbs\u3001collections\u64CD\u4F5C")]),_:1})]),e("li",null,[i(d,{to:"#doc\u64CD\u4F5C"},{default:l(()=>[n("doc\u64CD\u4F5C")]),_:1})]),e("li",null,[i(d,{to:"#\u5BE6\u4F5C"},{default:l(()=>[n("\u5BE6\u4F5C")]),_:1})]),e("li",null,[i(d,{to:"#\u9023\u7D50"},{default:l(()=>[n("\u9023\u7D50")]),_:1})])])]),h,i(t,null,{default:l(()=>[n(" \u8A9E\u6CD5\u63D0\u793A\u53EF\u5728mongo shell\u6253\u51FA\u958B\u982D\u5F8C\uFF0C\u6309tab\u9375 ")]),_:1}),g,e("ol",null,[e("li",null,[e("a",_,[n("MongoDB course 2022 | MongoDB tutorial"),i(a)])]),e("li",null,[e("a",p,[n("MongoDB document"),i(a)])])])])}const w=c(v,[["render",q],["__file","mongoDBShell.html.vue"]]);export{w as default};
