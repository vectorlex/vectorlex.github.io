import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: "zh-CN",
  srcDir: "src",
  title: "vectorlex.github.io",
  description: "vectorlex的意义不明的个人网站",
  sitemap: { hostname: "https://vectorlex.github.io/" },
  themeConfig: {
    search: {
      provider: "local"
    },

    nav: [
      { text: "首页", link: "/" },
      {
        text: "文章",
        items: [
          { text: "测试", link: "/articles/test" }
        ]
      },
      {
        text: "神秘小项目",
        items: [
          { text: "恶臭数字论证器", link: "https://vectorlex.github.io/homo/" }
        ]
      }
    ],

    sidebar: [
      {
        text: "文章",
        items: [
          { text: "测试", link: "/articles/test" }
        ]
      },
      {
        text: "神秘小项目",
        items: [
          { text: "恶臭数字论证器", link: "https://vectorlex.github.io/homo/" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vectorlex/" },
      { icon: "bilibili", link: "https://space.bilibili.com/3546949391223286" }
    ],

    footer: {
      message: `Copyright © 114514 BC - ${new Date().getFullYear()} vectorlex <vectorlex@outlook.com>`,
      copyright: "This work is free. You can redistribute it and/or modify it under the terms of the Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar. See the COPYING file for more details."
    }
  }
})
