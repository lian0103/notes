import{_ as o,r,o as n,c as d,b as e,a as l,w as t,d as a,e as c}from"./app.60361baf.js";const s={},h=e("h1",{id:"web-api\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18-\u4E00",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-api\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18-\u4E00","aria-hidden":"true"},"#"),a(" web API\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18(\u4E00)")],-1),u={class:"table-of-contents"},p=c('<img src="https://i.imgur.com/P5JMd4o.jpg" style="width:300px;"><h2 id="\u7AE0\u7BC0\u4E00-\u521D\u63A2web-api\u8A2D\u8A08" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E00-\u521D\u63A2web-api\u8A2D\u8A08" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E00 \u521D\u63A2web API\u8A2D\u8A08</h2><ul><li><p>web API\u548C\u8EDF\u9AD4\u8A2D\u8A08\u6709\u76F8\u540C\u7684\u57FA\u672C\u6982\u5FF5\uFF0C\u5982\u6A21\u7D44\u3001\u5C01\u88DD\u3001\u4F4E\u8026\u5408\u3001\u9AD8\u5167\u805A\u7684\u7279\u6027\uFF0C\u4EE5\u61C9\u5C0D\u6301\u7E8C\u8B8A\u52D5\u548C\u6210\u9577\u7684\u9700\u6C42\u3002 \u6210\u529F\u7684API\u662F\u70BA\u4E86\u4E0D\u540C\u4F7F\u7528\u8005\u80FD\u5920\u548C\u7CFB\u7D71\u4EA4\u63DB\u8CC7\u8A0A\uFF0CHTTP\u662F\u5176\u4E2D\u4E00\u7A2E\u4E3B\u8981\u7684\u901A\u8A0A\u5354\u8B70\uFF0C\u4F86\u9054\u6210\u8ACB\u6C42/\u7B49\u5F85/\u56DE\u61C9\u7684\u904E\u7A0B\u3002</p></li><li><p>API\u8A2D\u8A08\u7684\u8003\u91CF\u4E2D\uFF0C\u8981\u8B93\u4F7F\u7528\u8005\u6613\u61C2\u548C\u6613\u7528\uFF0C\u8B93\u7CFB\u7D71\u5167\u7684\u8CC7\u6E90\u53EF\u4EE5\u5C0D\u5916\u670D\u52D9\uFF0C\u6240\u4EE5\u5FC5\u9808\u6CE8\u91CD<strong>\u8AAA\u660E\u6587\u4EF6</strong>\u7684\u64B0\u5BEB\u3002</p></li><li><p>\u5728web\u61C9\u7528\u7684\u958B\u767C\u4E2D\uFF0CAPI\u901A\u5E38\u662F\u88AB\u6B78\u985E\u65BC\u5F8C\u7AEF\u7BC4\u7587\uFF0C\u7531\u8CC7\u6E90\u9A45\u52D5\u524D\u7AEF\u7684\u4F7F\u7528\u8005\u7684\u64CD\u4F5C\u6D41\u7A0B\u3002\u6BD4\u5982\uFF0C\u4E00\u500B\u6C92\u6709\u6B0A\u9650\u7684\u4F7F\u7528\u8005\uFF0C\u6703\u88ABAPI\u7684\u56DE\u61C9\u505A\u51FA\u932F\u8AA4\u63D0\u793A\uFF0C\u524D\u7AEF\u7684\u8173\u672C\u5247\u5C0E\u5F15\u4F7F\u7528\u8005\u56DE\u767B\u5165\u9801\u3002</p></li></ul><h2 id="\u7AE0\u7BC0\u4E8C-api\u8A2D\u8A08\u8207\u5718\u968A\u5408\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E8C-api\u8A2D\u8A08\u8207\u5718\u968A\u5408\u4F5C" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E8C API\u8A2D\u8A08\u8207\u5718\u968A\u5408\u4F5C</h2><ul><li>web API\u8A2D\u8A08\u7576\u4E2D\uFF0C\u5F37\u8ABF\u7684\u662F\u78BA\u8A8DAPI\u7684\u76EE\u6A19\uFF0C\u4E26\u601D\u8003\u5982\u4F55\u5BE6\u73FE\u8A2D\u8A08\u3002</li><li>\u66F8\u4E2D\u63D0\u5230\u5BE6\u73FE\u8A2D\u8A08\u7684\u4E00\u500B\u53C3\u8003\u5FC3\u6CD5\uFF1AADDR\u6D41\u7A0B\uFF0CAlign(\u5C0D\u9F4A\u7522\u54C1\u5B9A\u4F4D\u548C\u76EE\u6A19)\u3001Define(\u5B9A\u7FA9\u51FA\u4F7F\u7528\u8005\u9700\u6C42\u6240\u9700\u8981\u7684\u670D\u52D9\u8CC7\u6E90\u662F\u4EC0\u9EBC)\u3001Design(\u67B6\u69CBAPI\u7684\u98A8\u683C\u548C\u8AAA\u660E\u6587\u4EF6)\u3001Refine(\u512A\u5316\u5F9E\u4F7F\u7528\u8005\u53CD\u994B\u7684\u9AD4\u9A57\u5FC3\u5F97)\u3002</li></ul><blockquote><p>\u5728\u9019\u4E9B\u6D41\u7A0B\u53C8\u6703\u518D\u53BB\u7D30\u5206\u51FA\u5BE6\u969B\u57F7\u884C\u7684\u7D30\u7BC0\u9805\u76EE\uFF0C\u9019\u88E1\u60F3\u5F37\u8ABF\u7684\u7CBE\u795E\uFF0C\u662F\u5728\u8A2D\u8A08\u904E\u7A0B\u8981\u6709\u8A2D\u8A08\u512A\u5148\u7684\u601D\u7DAD\uFF0C\u5426\u5247\u6703\u6709\u5404\u7A2E\u53CD\u6A21\u5F0F\u60C5\u6CC1\uFF0C\u6BD4\u5982\u5148\u5BEB\u597DAPI\uFF0C\u4F46\u537B\u4E0D\u7B26\u5408\u4F7F\u7528\u8005\u6700\u5F8C\u7684\u9700\u6C42\u3002</p></blockquote><h2 id="\u7AE0\u7BC0\u4E09-\u9451\u5225\u6578\u4F4D\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E09-\u9451\u5225\u6578\u4F4D\u80FD\u529B" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E09 \u9451\u5225\u6578\u4F4D\u80FD\u529B</h2><ul><li>\u6BCF\u500B\u7522\u54C1\u6240\u63D0\u4F9B\u7D66\u4F7F\u7528\u8005\u7684\u529F\u80FD\u6216\u670D\u52D9\uFF0C\u53EF\u4EE5\u88AB\u8996\u70BA\u6578\u4F4D\u80FD\u529B\u3002</li></ul><blockquote><p>\u66F8\u4E2D\u8209\u4F8B\u662F\u4E00\u500B\u96FB\u5546\u7DB2\u7AD9\u7684\u4F7F\u7528\u8005\uFF0C\u53EF\u4EE5\u5728\u7DB2\u7AD9\u4E0Aa.\u700F\u89BD\u66F8\u55AE b.\u95DC\u9375\u5B57\u641C\u5C0B\u66F8\u7C4D c.\u4E0B\u8A02\u55AE..\u7B49\uFF0C\u800CAPI\u7684\u76EE\u7684\u5247\u662F\u80FD\u660E\u78BA\u63D0\u4F9B\u9019\u4E9B\u670D\u52D9\u3002</p></blockquote><h2 id="\u7AE0\u7BC0\u56DB-\u7522\u751F\u6D3B\u52D5\u8207\u6B65\u9A5F" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u56DB-\u7522\u751F\u6D3B\u52D5\u8207\u6B65\u9A5F" aria-hidden="true">#</a> \u7AE0\u7BC0\u56DB \u7522\u751F\u6D3B\u52D5\u8207\u6B65\u9A5F</h2><ul><li>\u5DE5\u4F5C\u6545\u4E8B(job story):\u5F9E\u4F7F\u7528\u8005\u89D2\u5EA6\u51FA\u767C\u6703\u6709\u4E00\u9023\u4E32\u64CD\u4F5C\u3001\u89F8\u767C\u4E8B\u4EF6\u548C\u4EA4\u63DB\u8CC7\u8A0A\u7684\u904E\u7A0B\u3002</li></ul><blockquote><p>\u9019\u6574\u500B\u6D41\u7A0B\uFF0C\u53C3\u8207\u958B\u767C\u7684\u89D2\u8272\u90FD\u61C9\u8A72Align(\u5C0D\u9F4A\u7522\u54C1\u5B9A\u4F4D\u548C\u76EE\u6A19)\u4F86\u5207\u5206\u51FA\u5404\u81EA\u7684\u5DE5\u4F5C\u4EFB\u52D9\u3002</p></blockquote><h2 id="\u7AE0\u7BC0\u4E94-\u754C\u5B9Aapi\u908A\u754C" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E94-\u754C\u5B9Aapi\u908A\u754C" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E94 \u754C\u5B9AAPI\u908A\u754C</h2><ul><li>\u900F\u904E\u6D3B\u52D5\u6D41\u7A0B\u548C\u7576\u4E2D\u7684\u5DE5\u4F5C\u6545\u4E8B\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5230\u90A3\u4E9B\u670D\u52D9\u662F\u53EF\u4EE5\u88AB\u5283\u5206\u5728\u540C\u500BAPI\u7BC4\u7587\u3002</li></ul><blockquote><p>\u66F8\u4E2D\u4EE5\u8CFC\u66F8\u6D41\u7A0B\u70BA\u4F8B\uFF0C\u5340\u5206\u51FA\u4E86Shopping API\u3001Order Creation API\u3001Payment Processing API\uFF0C\u9019\u4E5F\u662F\u65E5\u5F8CAPI\u6A21\u7D44\u7684\u67B6\u69CB\u85CD\u5716\u3002</p></blockquote><hr>',16);function b(P,_){const i=r("router-link");return n(),d("div",null,[h,e("nav",u,[e("ul",null,[e("li",null,[l(i,{to:"#\u7AE0\u7BC0\u4E00-\u521D\u63A2web-api\u8A2D\u8A08"},{default:t(()=>[a("\u7AE0\u7BC0\u4E00 \u521D\u63A2web API\u8A2D\u8A08")]),_:1})]),e("li",null,[l(i,{to:"#\u7AE0\u7BC0\u4E8C-api\u8A2D\u8A08\u8207\u5718\u968A\u5408\u4F5C"},{default:t(()=>[a("\u7AE0\u7BC0\u4E8C API\u8A2D\u8A08\u8207\u5718\u968A\u5408\u4F5C")]),_:1})]),e("li",null,[l(i,{to:"#\u7AE0\u7BC0\u4E09-\u9451\u5225\u6578\u4F4D\u80FD\u529B"},{default:t(()=>[a("\u7AE0\u7BC0\u4E09 \u9451\u5225\u6578\u4F4D\u80FD\u529B")]),_:1})]),e("li",null,[l(i,{to:"#\u7AE0\u7BC0\u56DB-\u7522\u751F\u6D3B\u52D5\u8207\u6B65\u9A5F"},{default:t(()=>[a("\u7AE0\u7BC0\u56DB \u7522\u751F\u6D3B\u52D5\u8207\u6B65\u9A5F")]),_:1})]),e("li",null,[l(i,{to:"#\u7AE0\u7BC0\u4E94-\u754C\u5B9Aapi\u908A\u754C"},{default:t(()=>[a("\u7AE0\u7BC0\u4E94 \u754C\u5B9AAPI\u908A\u754C")]),_:1})])])]),p])}const I=o(s,[["render",b],["__file","webAPI_1.html.vue"]]);export{I as default};