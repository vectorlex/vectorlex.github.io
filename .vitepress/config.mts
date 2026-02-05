import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  base: '/docs/',
  srcDir: "docs",
  title: "vectorlex.github.io",
  description: "vectorlex的个人网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vectorlex/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3546949391223286' }
    ]
  }
})
