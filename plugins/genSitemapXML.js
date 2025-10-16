const fs = require("fs");
const xmlbuilder = require("xmlbuilder");
const path = require("path");

// use GitHub Pages project URL for sitemap links
const domain = "https://lian0103.github.io/notes";
const jsonfilePath = path.resolve(__dirname, "../docs/.vuepress/sidebar.json");
const outputPath = path.resolve(
  __dirname,
  "../docs/.vuepress/dist/sitemap.xml"
);

// 讀取 JSON 檔案
const jsonData = JSON.parse(fs.readFileSync(jsonfilePath));

// 創建 sitemap.xml 檔案
const root = xmlbuilder.create("urlset", { version: "1.0", encoding: "UTF-8" });
root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

// 將 JSON 檔案中的內容加入 sitemap.xml

jsonData.forEach((data) => {
  data.notes.forEach((item) => {
    const url = root.ele("url");
    url.ele(
      "loc",
      {},
      `${domain}/${data.folder}/${item.file.replace(".md", ".html")}`
    );
    url.ele("lastmod", {}, new Date().toISOString());
    // url.ele("priority", {}, item.priority || "0.8");
  });
});

// 儲存 sitemap.xml 檔案
fs.writeFileSync(outputPath, root.end({ pretty: true }));
