import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
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
        text: '测试',
        items: [
          { text: '测试', link: '/test' }
        ]
      },
      {
        text: '神秘小项目',
        items: [
          { text: '恶臭数字论证器', link: 'https://vectorlex.github.io/homo/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vectorlex/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3546949391223286' }
    ]
  }
})
