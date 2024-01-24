import{_ as o,r,o as n,c as d,a as e,b as l,w as t,d as a,e as c}from"./app-Pb3OPLon.js";const s={},h=e("h1",{id:"web-api設計閱讀筆記-一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-api設計閱讀筆記-一","aria-hidden":"true"},"#"),a(" web API設計閱讀筆記(一)")],-1),u={class:"table-of-contents"},p=c('<img src="https://i.imgur.com/P5JMd4o.jpg" style="width:300px;"><h2 id="章節一-初探web-api設計" tabindex="-1"><a class="header-anchor" href="#章節一-初探web-api設計" aria-hidden="true">#</a> 章節一 初探web API設計</h2><ul><li><p>web API和軟體設計有相同的基本概念，如模組、封裝、低耦合、高內聚的特性，以應對持續變動和成長的需求。 成功的API是為了不同使用者能夠和系統交換資訊，HTTP是其中一種主要的通訊協議，來達成請求/等待/回應的過程。</p></li><li><p>API設計的考量中，要讓使用者易懂和易用，讓系統內的資源可以對外服務，所以必須注重<strong>說明文件</strong>的撰寫。</p></li><li><p>在web應用的開發中，API通常是被歸類於後端範疇，由資源驅動前端的使用者的操作流程。比如，一個沒有權限的使用者，會被API的回應做出錯誤提示，前端的腳本則導引使用者回登入頁。</p></li></ul><h2 id="章節二-api設計與團隊合作" tabindex="-1"><a class="header-anchor" href="#章節二-api設計與團隊合作" aria-hidden="true">#</a> 章節二 API設計與團隊合作</h2><ul><li>web API設計當中，強調的是確認API的目標，並思考如何實現設計。</li><li>書中提到實現設計的一個參考心法：ADDR流程，Align(對齊產品定位和目標)、Define(定義出使用者需求所需要的服務資源是什麼)、Design(架構API的風格和說明文件)、Refine(優化從使用者反饋的體驗心得)。</li></ul><blockquote><p>在這些流程又會再去細分出實際執行的細節項目，這裡想強調的精神，是在設計過程要有設計優先的思維，否則會有各種反模式情況，比如先寫好API，但卻不符合使用者最後的需求。</p></blockquote><h2 id="章節三-鑑別數位能力" tabindex="-1"><a class="header-anchor" href="#章節三-鑑別數位能力" aria-hidden="true">#</a> 章節三 鑑別數位能力</h2><ul><li>每個產品所提供給使用者的功能或服務，可以被視為數位能力。</li></ul><blockquote><p>書中舉例是一個電商網站的使用者，可以在網站上a.瀏覽書單 b.關鍵字搜尋書籍 c.下訂單..等，而API的目的則是能明確提供這些服務。</p></blockquote><h2 id="章節四-產生活動與步驟" tabindex="-1"><a class="header-anchor" href="#章節四-產生活動與步驟" aria-hidden="true">#</a> 章節四 產生活動與步驟</h2><ul><li>工作故事(job story):從使用者角度出發會有一連串操作、觸發事件和交換資訊的過程。</li></ul><blockquote><p>這整個流程，參與開發的角色都應該Align(對齊產品定位和目標)來切分出各自的工作任務。</p></blockquote><h2 id="章節五-界定api邊界" tabindex="-1"><a class="header-anchor" href="#章節五-界定api邊界" aria-hidden="true">#</a> 章節五 界定API邊界</h2><ul><li>透過活動流程和當中的工作故事，可以了解到那些服務是可以被劃分在同個API範疇。</li></ul><blockquote><p>書中以購書流程為例，區分出了Shopping API、Order Creation API、Payment Processing API，這也是日後API模組的架構藍圖。</p></blockquote><hr>',16);function b(P,_){const i=r("router-link");return n(),d("div",null,[h,e("nav",u,[e("ul",null,[e("li",null,[l(i,{to:"#章節一-初探web-api設計"},{default:t(()=>[a("章節一 初探web API設計")]),_:1})]),e("li",null,[l(i,{to:"#章節二-api設計與團隊合作"},{default:t(()=>[a("章節二 API設計與團隊合作")]),_:1})]),e("li",null,[l(i,{to:"#章節三-鑑別數位能力"},{default:t(()=>[a("章節三 鑑別數位能力")]),_:1})]),e("li",null,[l(i,{to:"#章節四-產生活動與步驟"},{default:t(()=>[a("章節四 產生活動與步驟")]),_:1})]),e("li",null,[l(i,{to:"#章節五-界定api邊界"},{default:t(()=>[a("章節五 界定API邊界")]),_:1})])])]),p])}const I=o(s,[["render",b],["__file","webAPI_1.html.vue"]]);export{I as default};
