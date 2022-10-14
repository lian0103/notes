import { defineUserConfig, defaultTheme } from 'vuepress';
import sidebarJSON from './sidebar.json';

const mode = process.env.NODE_ENV;

console.log(mode);

export default defineUserConfig({
  base: mode === 'development' ? '/' : './',
  lang: 'zh-tw',
  title: 'Jason\'s Notes',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],

  theme: defaultTheme({
    lastUpdated: true,
    tip: 'info',
    logo:'images/cat.jpg',
    repo:'https://github.com/lian0103',
    docsRepo:'https://github.com/lian0103/notes',
    docsDir:'/docs',
    editLinkText:'編輯內容',
    lastUpdatedText:'最後更新',
    contributorsText:'編輯者',
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
