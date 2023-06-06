const fs = require("fs");
const path = require("path");

const outputPath = path.resolve(__dirname, "../docs/.vuepress/dist");
const fileName = "Ads.txt";
const fileContent =
  "google.com, pub-1129287891959179, DIRECT, f08c47fec0942fa0";

fs.writeFileSync(`${outputPath}/${fileName}`, fileContent, (err) => {
  console.log("gen Ads.txt err");
});
