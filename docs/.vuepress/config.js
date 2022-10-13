import { defineUserConfig, defaultTheme } from 'vuepress';
import sidebarJSON from '../sidebar.json';

const mode = process.env.NODE_ENV;

console.log(mode);

export default defineUserConfig({
  base: mode === 'development' ? '/' : './',
  lang: 'zh-tw',
  title: '網頁開發筆記',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],

  theme: defaultTheme({
    lastUpdated: true,
    tip: 'info',
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
