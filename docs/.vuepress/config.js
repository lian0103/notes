import { defineUserConfig, defaultTheme } from "vuepress";
import sidebarJSON from "./sidebar.json";
import { seoPlugin } from "vuepress-plugin-seo2";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

const mode = process.env.NODE_ENV;

console.log(mode);

export default defineUserConfig({
  base: mode === "development" ? "/" : "/notes/",
  lang: "zh-tw",
  title: "",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "meta",
      {
        property: "keywords",
        content: "JavaScript, vue, 前端, 網頁開發, 開發人員",
      },
    ],
    ["meta", { property: "author", content: "Jason Lien, 連宗聖" }],
    [
      "meta",
      {
        property: "description",
        content:
          "前端開發 程式開發筆記 web develop vuejs javascript nodejs Jason Lien",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1129287891959179",
        crossorigin: "anonymous",
      },
    ],
  ],
  plugins: [
    [
      seoPlugin({
        // use GitHub Pages project URL so generated og:url points to the correct site
        hostname: "https://lian0103.github.io/notes",
        fallBackImage: "https://i.imgur.com/l3dHixD.jpg",
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description,
        tags: ($page) => $page.frontmatter.tags,
        twitterCard: (_) => "summary_large_image",
        type: ($page) =>
          ["articles", "posts", "blog"].some((folder) =>
            $page.regularPath.startsWith("/" + folder)
          )
            ? "article"
            : "website",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      }),
      googleAnalyticsPlugin({
        id: "G-H4LLC7B9XY",
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "./components"),
      }),
    ],
  ],
  theme: defaultTheme({
    lastUpdated: true,
    tip: "info",
    logo: "https://img.shields.io/badge/Jason-工程師開發筆記-28C8C8?labelColor=%23ff",
    repo: "https://github.com/lian0103",
    docsRepo: "https://github.com/lian0103/notes",
    docsDir: "/docs",
    editLinkText: "編輯內容",
    lastUpdatedText: "最後更新",
    contributorsText: "編輯者",
    sidebar: [
      ...sidebarJSON.map((item) => {
        return {
          text: item.folder,
          collapsible: true,
          children: item.notes.map((cItem) => {
            return {
              text: cItem.text,
              link: `/${item.folder}/${cItem.file}`,
            };
          }),
        };
      }),
    ],
  }),
});
