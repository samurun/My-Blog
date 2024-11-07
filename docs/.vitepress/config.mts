import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SAMURUN',
  lang: 'th-TH',
  description: 'A VitePress Site',
  head: [
    ['meta', { name: 'author', content: 'samurun' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'react, vitejs',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
  ],
  lastUpdated: true,
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
      { text: 'เรื่องเดฟๆ', link: '/create-react-app-2024' },
      { text: 'Running', link: '/running' },
      { text: 'Hiking', link: '/อุทยานแห่งชาติภูกระดึง' },
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
