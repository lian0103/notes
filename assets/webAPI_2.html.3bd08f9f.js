import{_ as r,r as s,o as l,c as n,b as e,a as i,w as o,d as a,e as d}from"./app.f79519db.js";const c={},p=e("h1",{id:"web-api\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18-\u4E8C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-api\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18-\u4E8C","aria-hidden":"true"},"#"),a(" web API\u8A2D\u8A08\u95B1\u8B80\u7B46\u8A18(\u4E8C)")],-1),u={class:"table-of-contents"},h=d(`<h2 id="\u7AE0\u7BC0\u516D-\u5EFA\u7ACBapi\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u516D-\u5EFA\u7ACBapi\u6A21\u578B" aria-hidden="true">#</a> \u7AE0\u7BC0\u516D \u5EFA\u7ACBAPI\u6A21\u578B</h2><p>\u53EF\u4EE5\u7528\u8868\u683C\u53BB\u5217\u51FAAPI\u7684\u9805\u76EE\uFF0C\u8A18\u8F09\u7684\u6B04\u4F4D\u61C9\u5305\u542BAPI\u57FA\u790E\u7684\u8CC7\u8A0A\uFF0C\u5982\u540D\u7A31\u3001\u8AAA\u660E\u3001\u5B58\u53D6\u7BC4\u570D\u3001\u8F38\u5165\u53C3\u6578\u3001\u8F38\u51FA\u7D50\u679C\u683C\u5F0F\u548C\u6D89\u53CA\u7684\u8CC7\u6E90\u6A21\u7D44..\u7B49\uFF0C\u9019\u4E9B\u57FA\u672C\u8CC7\u8A0A\u5C31\u662FAPI profile\uFF0C\u4E26\u4E0D\u8A2D\u8A08API\u7684\u98A8\u683C\u548C\u5BE6\u4F5C\u6280\u8853\u3002</p><blockquote><p>\u8A2D\u8A08\u5148\u884C\u65BC\u5BE6\u4F5C\uFF0C\u907F\u514D\u5728\u932F\u8AA4\u7684\u57FA\u790E\u4E0A\u84CB\u623F!\u4E14\u9019\u88E1\u7684\u8A2D\u8A08\u662F\u5F9E\u61C9\u7528\u7684\u89D2\u5EA6\u51FA\u767C\uFF0CAPI\u8A2D\u8A08\u548C\u8CC7\u6599\u5EABschema\u8A2D\u8A08\u7684\u8003\u91CF\u4E26\u4E0D\u76F8\u540C\uFF0CAPI\u8A2D\u8A08\u662F\u91DD\u5C0D\u8CC7\u6E90(data transfer object,DTO)\u505A\u64CD\u4F5C\uFF0C\u4E26\u975E\u76F4\u63A5\u5C0D\u8CC7\u6599\u6A21\u7D44(model)\u53BB\u4F7F\u7528\u3002</p></blockquote><blockquote><p>\u66F8\u4E2D\u8209\u4F8B\uFF0CAPI profile\u5217\u8868\u5F8C\uFF0C\u53EF\u4EE5\u518D\u900F\u904E\u6642\u5E8F\u5716\u4F86\u6AA2\u8996API\u7684\u64CD\u4F5C\u884C\u70BA\uFF0C\u85C9\u4EE5\u8A2D\u60F3\u7576\u4E2D\u8CC7\u6E90\u7684\u8B8A\u52D5\u60C5\u6CC1\u3002\u66F4\u9032\u4E00\u6B65\u7684\u8A55\u4F30\uFF0C\u662F\u5C0D\u5546\u696D\u50F9\u503C\u3001\u958B\u767C\u96E3\u5EA6\u548C\u66FF\u4EE3\u65B9\u6848\u8A2D\u60F3\uFF0C\u4F8B\u5982\u516C\u53F8\u53EF\u80FD\u6C92\u6709\u80FD\u529B\u53BB\u505A\u4E00\u500BPayment API\uFF0C\u66FF\u4EE3\u65B9\u5F0F\u662F\u53BB\u5C0B\u627E\u5E02\u5834\u4E0A\u5DF2\u7D93\u6709\u5546\u696D\u65B9\u6848\u7684\u5EE0\u5546\u6240\u63D0\u4F9B\u7684\u7522\u54C1\u3002</p></blockquote><h2 id="\u7AE0\u7BC0\u4E03-rest-api\u8A2D\u8A08" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E03-rest-api\u8A2D\u8A08" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E03 REST API\u8A2D\u8A08</h2><p>HTTP\u662F\u6700\u666E\u904D\u88AB\u4F7F\u7528\u7684\u901A\u8A0A\u5354\u5B9A\uFF0C\u4E5F\u56E0\u6B64HTTP\u67B6\u69CB\u7684\u7279\u6027\uFF0C\u6703\u5C0D\u5F71\u97FF\u5230API\u7684\u8A2D\u8A08\u3002 1.\u4E3B\u5F9E\u5F0F\u67B6\u69CB\uFF1A\u670D\u52D9\u7AEF\u8207\u5BA2\u6236\u7AEF\u76F8\u4E92\u7368\u7ACB\uFF0C\u5169\u8005\u9593\u662F\u4F7F\u7528\u8ACB\u6C42/\u56DE\u8986\u7684\u6A5F\u5236\u9032\u884C\u8A0A\u606F\u4E92\u52D5\u3002 2.\u7121\u72C0\u614B\uFF1A\u670D\u52D9\u7AEF\u4E0D\u6703\u7D00\u9304\u5BA2\u6236\u7AEF\u7684\u72C0\u614B\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5BA2\u6236\u7AEF\u8ACB\u6C42\u8981\u9644\u4E0A\u9A57\u8B49\u8CC7\u8A0A\u3002 3.\u5206\u5C64\u5F0F\u67B6\u69CB\uFF1A\u670D\u52D9\u7AEF\u5C0D\u5BA2\u6236\u7AEF\u50CF\u662F\u500B\u9ED1\u76D2\u5B50\uFF0C\u670D\u52D9\u7AEF\u662F\u7531\u4E0D\u540C\u7684\u6A21\u7D44\u5806\u758A\u51FA\u4F86\uFF0C\u4E00\u500B\u8ACB\u6C42\u53EF\u80FD\u7D93\u904E\u4E86\u5FEB\u53D6\u3001\u53CD\u5411\u4EE3\u7406\u3001\u8A8D\u8B49\u7B49\u624D\u5230\u5C0D\u61C9\u7684\u6A21\u7D44\u3002</p><blockquote><p>\u9032\u4E00\u6B65\uFF0CREST\u98A8\u683C\u662F\u8981\u53BB\u7D04\u675F\u548C\u7D04\u5B9A\u51FA\u4E00\u81F4\u7684\u8A2D\u8A08\u4ECB\u9762\u7684\u601D\u7DAD\uFF0CJSON\u548CCRUD\u53EA\u662FREST\u98A8\u683C\u7576\u4E2D\u5169\u500B\u5E38\u7528\u7684\u8A2D\u8A08\u5143\u7D20\u3002</p></blockquote><p>\u4F7F\u7528HTTP\u5354\u8B70\u4E0B\u6240\u63A1\u7528\u7684REST\u98A8\u683C\uFF0CAPI\u8A2D\u8A08\u6703\u6709\u4E0B\u5217\u7684\u7279\u6027\uFF1A<br> 1.\u4E3B\u5F9E\u5F0F\u67B6\u69CB(\u524D\u5F8C\u7AEF\u5206\u96E2) 2.\u4EE5\u8CC7\u6E90\u70BA\u4E2D\u5FC3(\u8CC7\u6E90\u53EF\u4EE5\u5C55\u73FE\u6210JSON\u3001CSV\u3001XML\u7B49\u5404\u7A2E\u8868\u73FE\u683C\u5F0F) 3.\u4E92\u52D5\u4EE5\u8A0A\u606F\u70BA\u57FA\u790E(Http\u7684\u8868\u982D\u3001body\u3001URL\u548C\u53C3\u6578\u7B49\u7B49\u90FD\u5E36\u6709\u8A0A\u606F) 4.\u652F\u63F4\u5206\u5C64\u5F0F\u67B6\u69CB(\u53EF\u4EE5\u6709\u8A31\u591A\u4E2D\u4ECB\u5C64\u5B58\u5728\uFF0C\u6BD4\u5982logging\u3001OAuth\u3001cache..\u7B49)</p><blockquote><p>\u6700\u5F8C\uFF0C\u4F7F\u7528HTTP\u64CD\u4F5C\u65B9\u6CD5\u548CURL(\u8CC7\u6E90\u8DEF\u5F91)\uFF0C\u4E26\u5B9A\u7FA9HTTP\u7684\u56DE\u61C9\u4EE3\u78BC(200\u7CFB\u5217\u3001400\u7CFB\u5217\u3001500\u7CFB\u5217)\u52A0\u5165\u5230API profile\u7576\u4E2D\u3002</p></blockquote><p>CRUD\u53EF\u4EE5\u8996\u70BA\u4E00\u7A2EREST\u5BE6\u4F5C\u7684\u8A2D\u8A08\u5F62\u5F0F\uFF0C\u66F8\u4E2D\u5EFA\u8B70\u5C0D\u65BC\u8CC7\u6E90\u7684\u64CD\u4F5C\uFF0C\u61C9\u907F\u514D\u8B93\u5BA2\u6236\u7AEF\u767C\u8D77\u591A\u6B21\u8ACB\u6C42\u4F86\u5B8C\u6210\u67D0\u9805\u4EFB\u52D9\uFF0C\u9019\u6703\u5F71\u97FF\u5230\u66F4\u8907\u96DC\u7684\u56DE\u9000(\u9084\u539F)\u6A5F\u5236\uFF0C\u4E5F\u56E0\u6B64\u518D\u6B21\u5F37\u8ABF\u4E0D\u8981\u7528\u8CC7\u6E90\u4E0D\u7B49\u65BC\u8CC7\u6599\u6A21\u578B\u7684\u5FC5\u8981\u6027\u3002</p><blockquote><p>\u5BE6\u969B\u5C08\u6848\u4E0A\uFF0C\u9047\u898B\u904E\u9019\u7A2E\u7CDF\u7CD5\u7684\u60C5\u6CC1\uFF0C\u5F8C\u7AEF\u628AAPI\u8A2D\u8A08\u76F4\u63A5\u5C0D\u61C9\u8CC7\u6599\u6A21\u578B\u7684\u64CD\u4F5C\uFF0C\u8B93\u5BA2\u6236\u7AEF\u5FC5\u9808\u53BB\u591A\u6B21\u8ACB\u6C42/\u64CD\u4F5C\u8CC7\u6599\u5F8C\u4F86\u5B8C\u6210\u67D0\u9805\u4EFB\u52D9\uFF0C\u975E\u5E38\u4E0D\u5EFA\u8B70\u5982\u6B64\u5BE6\u4F5C\u3002</p></blockquote><p>\u66F8\u4E2D\u8209\u4F8B\uFF0C\u8A02\u4F4D\u670D\u52D9\u5982\u679C\u9700\u6C42\u662F\u53EF\u4EE5\u4E00\u6B21\u9810\u7D04\u591A\u5E2D \u90A3\u7B2C\u4E8C\u7A2EPOST\u7684\u5BE6\u4F5C\u65B9\u5F0F\u662F\u66F4\u63A8\u85A6\u7684</p><div class="language-http= ext-http= line-numbers-mode"><pre class="language-http="><code>PUT /seats/{seatId} to reserve seat

POST /reservation
{
    &quot;seatIds&quot;:[&quot;id1&quot;,&quot;id2&quot;...]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7AE0\u7BC0\u516B-rpc-api\u548Cquery-based-api" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u516B-rpc-api\u548Cquery-based-api" aria-hidden="true">#</a> \u7AE0\u7BC0\u516B RPC API\u548CQuery-Based API</h2><p><img src="https://i.imgur.com/X2wDNJh.png" alt=""><img src="https://i.imgur.com/OLhtTnZ.png" alt=""></p><blockquote><p>\u66F8\u4E2D\u4ECB\u7D39REST\u98A8\u683C\u4EE5\u5916\u5E38\u898B\u7684\u9019\u5169\u7A2EAPI\u5F62\u5F0F\u3002\u8457\u540D\u7684GraphQL\u662FQuery-Based API\u7684\u98A8\u683C\u3002</p></blockquote><h2 id="\u7AE0\u7BC0\u4E5D-\u7570\u6B65api" tabindex="-1"><a class="header-anchor" href="#\u7AE0\u7BC0\u4E5D-\u7570\u6B65api" aria-hidden="true">#</a> \u7AE0\u7BC0\u4E5D \u7570\u6B65API</h2><p>\u5728\u540C\u6B65\u60C5\u5883\u4E0B\u7684API\uFF0C\u662F\u7D93\u6B77\u8ACB\u6C42/\u7B49\u5F85/\u56DE\u61C9\u7684\u62CB\u63A5\u904E\u7A0B\u3002\u7570\u6B65\u60C5\u5883\u5247\u53EF\u4EE5\u8B93\u8ACB\u6C42\u5F8C\u53BB\u505A\u5225\u7684\u5DE5\u4F5C\uFF0C\u8B93\u8A0A\u606F\u7684\u6536\u767C\u8655\u7406\u65B9\u5F0F\u66F4\u6709\u5F48\u6027\u7A7A\u9593\u3002\u5177\u9AD4\u4F8B\u5B50\uFF1A<br> 1.webhook\u5EFA\u7ACB\u7684\u8A02\u95B1\u548C\u901A\u77E5\u6A21\u5F0F<br> \u6BD4\u5982\u4F7F\u7528lineBot\u7684\u4E32\u63A5\u4E2D\uFF0C\u6709\u4EBA\u50B3\u9001\u8A0A\u606F\u5230\u5B98\u65B9\u983B\u9053\uFF0C\u5728line\u5F8C\u53F0\u53EF\u4EE5\u8A2D\u5B9A\u4E00\u500B\u56DE\u547C\u7684POST /callback/linebot\uFF0C\u670D\u52D9\u7AEF\u57FA\u65BC\u9019\u6A23\u7684\u56DE\u547C\u53EF\u4EE5\u4F86\u518D\u767C\u9001\u8A0A\u606F</p><p>2.websocket\u5EFA\u7ACB\u96D9\u5411\u901A\u77E5<br> \u8B93\u5BA2\u6236\u7AEF\u548C\u670D\u52D9\u7AEF\u53EF\u4EE5\u900F\u904Ewebsocket\u767C\u51FA\u8ACB\u6C42/\u56DE\u61C9\u3002</p><p>\u66F8\u4E2D\u9084\u63D0\u5230SSE(\u9069\u5408\u670D\u52D9\u7AEF\u55AE\u5411\u5C0D\u5BA2\u6236\u7AEF\u63A8\u9001\u8A0A\u606F)\u548CgRPC(\u9069\u5408\u670D\u52D9\u7AEF\u4E4B\u9593\u7684\u901A\u8A0A)\u3002</p>`,20);function b(P,I){const t=s("router-link");return l(),n("div",null,[p,e("nav",u,[e("ul",null,[e("li",null,[i(t,{to:"#\u7AE0\u7BC0\u516D-\u5EFA\u7ACBapi\u6A21\u578B"},{default:o(()=>[a("\u7AE0\u7BC0\u516D \u5EFA\u7ACBAPI\u6A21\u578B")]),_:1})]),e("li",null,[i(t,{to:"#\u7AE0\u7BC0\u4E03-rest-api\u8A2D\u8A08"},{default:o(()=>[a("\u7AE0\u7BC0\u4E03 REST API\u8A2D\u8A08")]),_:1})]),e("li",null,[i(t,{to:"#\u7AE0\u7BC0\u516B-rpc-api\u548Cquery-based-api"},{default:o(()=>[a("\u7AE0\u7BC0\u516B RPC API\u548CQuery-Based API")]),_:1})]),e("li",null,[i(t,{to:"#\u7AE0\u7BC0\u4E5D-\u7570\u6B65api"},{default:o(()=>[a("\u7AE0\u7BC0\u4E5D \u7570\u6B65API")]),_:1})])])]),h])}const _=r(c,[["render",b],["__file","webAPI_2.html.vue"]]);export{_ as default};
