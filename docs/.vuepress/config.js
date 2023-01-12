import { defineUserConfig, defaultTheme } from 'vuepress';
import sidebarJSON from './sidebar.json';
import { seoPlugin } from "vuepress-plugin-seo2";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

const mode = process.env.NODE_ENV;

console.log(mode);

export default defineUserConfig({
  base: mode === 'development' ? '/' : './',
  lang: 'zh-tw',
  title: "開發筆記",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { property: 'keywords', content: 'JavaScript, vue, 前端, 網頁開發, 開發人員' }],
    ['meta', { property: 'author', content: 'Jason Lien, 連宗聖' }],
  ],
  plugins: [
    [
      seoPlugin(
      {
        hostname:'jason-lian.page',
        fallBackImage:'https://i.imgur.com/l3dHixD.jpg',
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }),
      googleAnalyticsPlugin({
        id: 'G-H4LLC7B9XY',
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      })
    ],
  ],
  theme: defaultTheme({
    lastUpdated: true,
    tip: 'info',
    logo: 'images/cat.jpg',
    repo: 'https://github.com/lian0103',
    docsRepo: 'https://github.com/lian0103/notes',
    docsDir: '/docs',
    editLinkText: '編輯內容',
    lastUpdatedText: '最後更新',
    contributorsText: '編輯者',
    sidebar: [
      {
        text: '首頁',
        link: '/',
      },
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
