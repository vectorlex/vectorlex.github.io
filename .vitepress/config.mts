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
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换"
                },
              },
            },
          },
        },
      },
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
    },
    editLink: {
      pattern: "https://github.com/vectorlex/vectorlex.github.io/docs/:path", // 改成自己的仓库
      text: "GitHub"
    },
  }
})
