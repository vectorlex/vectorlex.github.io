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
    search: { provider: "local" },

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

    editLink: {
      pattern: "https://github.com/vectorlex/vectorlex.github.io/tree/main/src/:path?plain=1", // 改成自己的仓库
      text: "在 GitHub 上查看源代码"
    },

    footer: {
      message: `Copyright © 114514 BC - ${new Date().getFullYear()} vectorlex \<vectorlex@outlook.com\>`,
      copyright: "本作品为自由作品。你可以依据由 Sam Hocevar 发布的《Do What The Fuck You Want To Public License》的第二版之条款对该作品进行再发布或修改。更多细节详见 <a href=\"https://www.wtfpl.net/\">WTFPL官方网站</a> 。"
    }
  }
})
