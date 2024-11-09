import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

const description = 'A VitePress Site';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SAMURUN',
  lang: 'th-TH',
  description: description,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/elysia.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://samurun.com/assets/cover.jpg',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1920',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '1080',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://samurun.com/assets/cover.jpg',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'samurun',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description,
      },
    ],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    codeTransformers: [transformerTwoslash()],
  },
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © samurun 2024',
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'เรื่องเดฟๆ', link: '/create-react-app-2024' },
      // { text: 'Running', link: '/running' },
      // { text: 'Hiking', link: '/อุทยานแห่งชาติภูกระดึง' },
    ],
    sidebar: [
      {
        text: 'เรื่องเดฟๆ',
        items: [
          {
            text: 'Create React App ด้วย Vite',
            link: '/create-react-app-2024',
          },
        ],
      },
      {
        text: 'Running',
        items: [{ text: 'เริ่มจาการเดิน', link: '/running' }],
      },
      {
        text: 'Hiking',
        items: [
          { text: 'อุทยานแห่งชาติภูกระดึง', link: '/อุทยานแห่งชาติภูกระดึง' },
          { text: 'เขาหลวงสุโขทัย', link: '/เขาหลวงสุโขทัย' },
          {
            text: 'เปรโต๊ะลอซู & ดอยสามหมื่น',
            link: '/เปรโต๊ะลอซู & ดอยสามหมื่น',
          },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/samurun' }],
  },
});
