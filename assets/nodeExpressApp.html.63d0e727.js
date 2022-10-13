import{_ as v,r as a,o as t,c as o,a as e,d as i,w as d,b as n,e as r}from"./app.b6038fa3.js";const c={},u=e("h1",{id:"nodejs\u67B6\u8A2Dweb\u670D\u52D9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nodejs\u67B6\u8A2Dweb\u670D\u52D9","aria-hidden":"true"},"#"),n(" NodeJS\u67B6\u8A2DWeb\u670D\u52D9")],-1),m={class:"table-of-contents"},b=e("p",null,"NodeJS\u751F\u614B\u501A\u8CF4\u8A31\u591ANPM\u4E2D\u7684\u5957\u4EF6\u5EAB\uFF0C\u53EF\u4EE5\u7528\u4F86\u5354\u52A9\u67B6\u8A2D\u5404\u7A2EWeb\u670D\u52D9\uFF0C\u4EE5\u4E0B\u662F\u67B6\u8A2D\u904E\u7A0B\u7684\u7D00\u9304\u3002",-1),p={href:"https://github.com/lian0103/NodeAPI",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="\u76EE\u9304\u7D50\u69CB" tabindex="-1"><a class="header-anchor" href="#\u76EE\u9304\u7D50\u69CB" aria-hidden="true">#</a> \u76EE\u9304\u7D50\u69CB</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2502  .env
\u2502  .env.example
\u2502  .gitignore
\u2502  package-lock.json
\u2502  package.json
\u2502  server.js
\u2502  sql.sql
\u2502  
\u251C\u2500config
\u2502      db.js
\u2502      
\u251C\u2500controllers
\u2502      fileController.js
\u2502      postControllers.js
\u2502      
\u251C\u2500helpers
\u2502      httpLogger.js
\u2502      logger.js
\u2502      mail.js
\u2502      
\u251C\u2500logs
\u2502      error.log
\u2502      info.log
\u2502      
\u251C\u2500models
\u2502      Post.js
\u2502      
\u251C\u2500node_modules
\u2502      
\u251C\u2500routes
\u2502      fileRoutes.js
\u2502      postRoutes.js
\u2502      
\u251C\u2500uploadFiles
\u2502      ccc.jpg
\u2502      
\u2514\u2500views
        uploadFile.ejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E32\u63A5mysql" tabindex="-1"><a class="header-anchor" href="#\u4E32\u63A5mysql" aria-hidden="true">#</a> \u4E32\u63A5MySQL</h2><p>\u672C\u5730\u5B89\u88DDMySQL\u3002\u5728\u5B89\u88DD\u6210\u529F\u5F8C\uFF0C\u53EF\u4EE5\u5148\u4F7F\u7528workbench\u505A\u9023\u7DDA\u6E2C\u8A66\uFF0C\u9019\u7D44\u8CC7\u8A0A\u8A18\u9304\u4E0B\u4F86\u4E4B\u5F8C\u8981\u8B93Node\u505A\u9023\u7DDA\u4F7F\u7528\u3002</p><ul><li><p>\u9023\u7DDA\u6E2C\u8A66 <img src="https://i.imgur.com/lC9qWYd.jpg" alt=""><img src="https://i.imgur.com/XB5c2Bt.jpg" alt=""></p></li><li><p>\u5EFA\u7ACBPost\u8868\u7684\u6B04\u4F4D\u8207\u8CC7\u6599</p></li></ul><p><img src="https://i.imgur.com/OrOogrN.jpg" alt=""></p><ul><li>config/db.js</li></ul>`,7),g={href:"https://www.npmjs.com/package/mysql2",target:"_blank",rel:"noopener noreferrer"},f=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>()=&gt;{

require(&quot;dotenv&quot;).config(); //\u85C9\u6B64\u8B80\u53D6.env\u7684\u53C3\u6578
const mysql = require(&#39;mysql2&#39;); //\u9023\u7DDA\u8CC7\u6599\u5EAB\u6240\u4F7F\u7528\u7684\u5957\u4EF6

const pool = mysql.createPool({
  host: p<wbr>rocess.env.DB_HOST,
  user: p<wbr>rocess.env.DB_USER,
  database: p<wbr>rocess.env.DB_NAME,
  password: p<wbr>rocess.env.DB_PASSWORD,
  port: p<wbr>rocess.env.DB_PORT
});
}

module.exports = pool.promise();//\u652F\u6301\u975E\u540C\u6B65\u8655\u7406\u7684\u9023\u7DDA\u6C60\u7269\u4EF6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>.env\u6A94</li></ul><div class="language-shell= ext-shell= line-numbers-mode"><pre class="language-shell="><code># DATABASE CONNECTION ENVIRONMENT VARIABLES
DB_HOST=localhost
DB_USER=root
DB_NAME=blog-app
DB_PASSWORD=root
DB_PORT=3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>models/Post.js \u5EFA\u7ACB\u4E00\u500B\u8CC7\u6599\u985E\u7684Model\uFF0C\u4E26\u5BE6\u4F5C\u8CC7\u6599\u64CD\u4F5C\u7684\u65B9\u6CD5\uFF0C\u5982CRUD\u3002\u9019\u540C\u6642\u662F\u900F\u904Emysql2\u7684API\uFF0C\u4F86\u57F7\u884Csql\u6307\u4EE4\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const db = require(&#39;../config/db&#39;);
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let date = new Date();
    let created_at = \`\${date.getFullYear()}-\${
      date.getMonth() + 1
    }-\${date.getDate()}\`;
    
    //\u65B0\u589E1\u7B463\u500B\u6B04\u4F4D\u7684\u8CC7\u6599
    let sql = \`
            INSERT INTO posts(
                title,
                body,
                created_at
            )
            VALUES(
                &#39;\${this.title}&#39;,
                &#39;\${this.body}&#39;,
                &#39;\${created_at}&#39;
            )
        
        \`;
    return db.execute(sql);//\u6703\u56DE\u50B31\u500BPromise\u7269\u4EF6
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u958Bapi" tabindex="-1"><a class="header-anchor" href="#\u958Bapi" aria-hidden="true">#</a> \u958BAPI</h2><p>\u900F\u904ENodeJs Express\u6240\u555F\u52D5\u7684Web\u670D\u52D9\uFF0C\u9023\u7DDA\u7684\u7DB2\u57DF\u65BC http://localhost:3000 \u4E26\u53EF\u76E3\u807D\u4F86\u8A2A\u8ACB\u6C42\u7684\u8DEF\u5F91\u8207HTTP\u9023\u7DDA\u65B9\u6CD5(GET\u3001POST\u3001UPDATE\u3001DELTE..)\u5C0D\u61C9\u3002</p><ul><li>server.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//...(\u7565)
app.use(&#39;/posts&#39;, require(&#39;./routes/postRoutes&#39;));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>routes/postRoutes.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const express = require(&#39;express&#39;);
const postControllers = require(&#39;../controllers/postControllers&#39;)
const router = express.Router();

router.route(&quot;/&quot;).get(postControllers.getAllPosts);

router.route(&quot;/&quot;).post(postControllers.createNewPost);

router.route(&quot;/:id&quot;).get(postControllers.getPostById);

module.exports = router;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Postman\u6E2C\u8A66\u9023\u7DDA GET\u65B9\u6CD5\u8207\u8DEF\u5F91/posts\uFF0C\u5247\u53EF\u5C0D\u61C9\u53BB\u547C\u53EB\u63A7\u5236\u5C64\u7684\u8CC7\u6599\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u4E26\u900F\u904Eexprss\u8DEF\u7531\u7684\u56DE\u50B3\u7269\u4EF6\u5C07\u8CC7\u6599\u56DE\u50B3\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//postControllers.js
const Post = require(&#39;../models/Post&#39;);

exports.getAllPosts = async (req, res, next) =&gt; {
  try {
    const [posts] = await Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET /posts</p><p><img src="https://i.imgur.com/cjUhayn.jpg" alt=""></p><h2 id="\u4E0A\u50B3\u6A94\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u50B3\u6A94\u6848" aria-hidden="true">#</a> \u4E0A\u50B3\u6A94\u6848</h2>`,16),_={href:"https://www.npmjs.com/package/formidable",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.npmjs.com/package/mv",target:"_blank",rel:"noopener noreferrer"},w=r(`<p>\u4F7F\u7528\u8868\u55AE\u7269\u4EF6\u548CPOST\u65B9\u6CD5\u50B3\u9001\u6A94\u6848\uFF0Cformidable\u53EF\u505A\u70BA\u4E2D\u9593\u5C64\u628A\u6A94\u6848\u7684\u8CC7\u8A0A\u505A\u89E3\u6790\u3002\u89E3\u6790\u5F8C\u7684\u7D50\u679C\uFF0C\u518D\u5229\u7528mv\u505A\u642C\u904B\u3002</p><ul><li>fileController.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const formidable = require(&#39;formidable&#39;);
const mv = require(&#39;mv&#39;);
const path = require(&#39;path&#39;);
const fs = require(&#39;fs&#39;);

exports.uploadFile = async (req, res, next) =&gt; {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const uploadPath = path.join(process.cwd(), &#39;uploadFiles&#39;);//\u81EA\u8A02\u7684\u6A94\u6848\u5B58\u653E\u8DEF\u5F91

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(&#39;uploadFiles&#39;);
    }

    const filename = fields.fileName
      ? \`\${fields.fileName}.\${
          files.filetoupload.originalFilename.split(&#39;.&#39;)[1]
        }\`
      : files.filetoupload.originalFilename;//\u6709\u8F38\u5165\u81EA\u8A02\u6A94\u540D\u6B04\u4F4D\u6642\u4F7F\u7528\u81EA\u8A02\u6A94\u540D
    const oldpath = files.filetoupload.filepath;
    const newpath = path.join(uploadPath, filename);
    
    //\u9019\u500B\u90E8\u5206\u4E4B\u5F8C\u518D\u6BD4\u8F03\u628A\u5716\u7247\u6A94File\u8F49base64\u505A\u6CD5\u7684\u5DEE\u7570
    mv(oldpath, newpath, function (err) {
      if (err) {
        throw err;
        next();
      }
      res.write(\`File uploaded and moved to \${newpath}\`);
      res.end();
    });
  });
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u5F97\u6A94\u6848" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5F97\u6A94\u6848" aria-hidden="true">#</a> \u53D6\u5F97\u6A94\u6848</h2>`,4),j={href:"http://expressjs.com/zh-tw/api.html#res.sendFile",target:"_blank",rel:"noopener noreferrer"},q=r(`<ul><li>fileController.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
exports.getFile = async (req, res, next) =&gt; {
  const fileName = req.params.fileName;
  const options = {
    root: path.join(process.cwd(), &#39;uploadFiles&#39;),
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(new Error(&#39;\u7121\u6B64\u6A94\u6848&#39;));
    }
  });
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53D6\u5F97\u7D50\u679C</li></ul><p>GET /file/:fileName</p><p><img src="https://i.imgur.com/0eSrCho.jpg" alt=""></p><h2 id="\u5BC4\u9001\u90F5\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BC4\u9001\u90F5\u4EF6" aria-hidden="true">#</a> \u5BC4\u9001\u90F5\u4EF6</h2><ul><li>helpers/mail.js</li></ul>`,7),P={href:"https://www.npmjs.com/package/nodemailer",target:"_blank",rel:"noopener noreferrer"},A=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const logger = require(&#39;./logger&#39;);
const nodemailer = require(&#39;nodemailer&#39;);

//\u900F\u904EGMAIL\u5E33\u865F\u548C&#39;\u61C9\u7528\u7A0B\u5F0F\u5BC6\u78BC&#39;\u767B\u5165
const transporter = nodemailer.createTransport({
  service: &#39;gmail&#39;,
  auth: {
    user: p<wbr>rocess.env.GMAIL_USER,
    pass: p<wbr>rocess.env.GMAIL_PASS,
  },
});

const mailOptions = {
  from: p<wbr>rocess.env.GMAIL_USER,
  to: &#39;kel0oo0@yahoo.com.tw&#39;,
  subject: &#39;Sending Email using Node.js&#39;,
  text: &#39;That was easy???&#39;,
  html: \`&lt;h1&gt;HI~~!!&lt;/h1&gt;&lt;img src=&quot;https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png&quot;&gt;\`,
};

const sendEmail = (options = {}) =&gt; {
  let mergeOption = {
    ...mailOptions,
    ...options,
  };
  
  //\u767C\u9001
  transporter.sendMail(mergeOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      logger.info(mergeOption);
    }
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u61C9\u7528\u7A0B\u5F0F\u5BC6\u78BC <img src="https://i.imgur.com/SzAGCvv.jpg" alt=""></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5F9Enodemailer\u6587\u4EF6\u4E0A\u53EF\u77E5\uFF0CGmail\u7684\u9001\u4FE1\u65B9\u5F0F\u6BD4\u8F03\u9069\u5408\u958B\u767C\u6642\u6E2C\u8A66\uFF0C\u771F\u6B63\u7522\u54C1\u61C9\u7528\u6642\u9084\u8981\u8003\u91CF\u5176\u4ED6\u56E0\u7D20\uFF0C\u4E0D\u5EFA\u8B70\u4F7F\u7528Gmail\u3002</p></div><h2 id="api\u8ACB\u6C42\u7D00\u9304" tabindex="-1"><a class="header-anchor" href="#api\u8ACB\u6C42\u7D00\u9304" aria-hidden="true">#</a> API\u8ACB\u6C42\u7D00\u9304</h2>`,4),N={href:"https://www.npmjs.com/package/winston",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.npmjs.com/package/morgan",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,[e("p",null,"helplers/logger.js")]),e("li",null,[e("p",null,"helplers/httpLogger.js")]),e("li",null,[e("p",null,[n("\u7D00\u9304 "),e("img",{src:"https://i.imgur.com/dzh1mVF.jpg",alt:""})])])],-1);function y(T,k){const l=a("router-link"),s=a("ExternalLinkIcon");return t(),o("div",null,[u,e("nav",m,[e("ul",null,[e("li",null,[i(l,{to:"#\u76EE\u9304\u7D50\u69CB"},{default:d(()=>[n("\u76EE\u9304\u7D50\u69CB")]),_:1})]),e("li",null,[i(l,{to:"#\u4E32\u63A5mysql"},{default:d(()=>[n("\u4E32\u63A5MySQL")]),_:1})]),e("li",null,[i(l,{to:"#\u958Bapi"},{default:d(()=>[n("\u958BAPI")]),_:1})]),e("li",null,[i(l,{to:"#\u4E0A\u50B3\u6A94\u6848"},{default:d(()=>[n("\u4E0A\u50B3\u6A94\u6848")]),_:1})]),e("li",null,[i(l,{to:"#\u53D6\u5F97\u6A94\u6848"},{default:d(()=>[n("\u53D6\u5F97\u6A94\u6848")]),_:1})]),e("li",null,[i(l,{to:"#\u5BC4\u9001\u90F5\u4EF6"},{default:d(()=>[n("\u5BC4\u9001\u90F5\u4EF6")]),_:1})]),e("li",null,[i(l,{to:"#api\u8ACB\u6C42\u7D00\u9304"},{default:d(()=>[n("API\u8ACB\u6C42\u7D00\u9304")]),_:1})])])]),b,e("p",null,[e("a",p,[n("\u5C08\u6848\u5730\u5740"),i(s)])]),h,e("p",null,[e("a",g,[n("NPM mysql2"),i(s)])]),f,e("ul",null,[e("li",null,[n("\u4F7F\u7528\u5957\u4EF6 "),e("a",_,[n("formidable"),i(s)]),e("a",x,[n("mv"),i(s)])])]),w,e("p",null,[e("a",j,[n("Express SendFile API"),i(s)])]),q,e("p",null,[n("\u652F\u6301SMTP\u3001Gmail\u767C\u9001\u7684\u5957\u4EF6 "),e("a",P,[n("nodemailer"),i(s)])]),A,e("p",null,[n("\u4F7F\u7528\u5957\u4EF6 "),e("a",N,[n("winston"),i(s)]),n(":\u7528\u4F86\u7522\u751Flog\u6A94\u6848 "),e("a",E,[n("morgan"),i(s)]),n(":\u7522\u751F\u80FD\u64F7\u53D6HTTP\u8CC7\u8A0A\u7684\u4E2D\u9593\u5C64")]),S])}const O=v(c,[["render",y],["__file","nodeExpressApp.html.vue"]]);export{O as default};
