const { slugify } = require('transliteration')
const fiber = require('fibers')
const sass = require('sass')

module.exports = {
  description: '目前任職於微程式資訊股份有限公司，從高中因為社團接觸 ACM，然後大學開始自學 PHP。主要是後端工程師，前端略有涉略，設計方面超級不擅長，請大家多多指教。',
  evergreen: true,
  title: '筆記國度',
  markdown: {
    slugify
  },
  themeConfig: {
    sidebarDepth: 0,
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/',
        fa: 'home'
      },
      {
        text: '經歷',
        link: '/resume',
        fa: 'user'
      },
      {
        text: '技能',
        link: '/skills',
        fa: 'bar-chart-o'
      },
      {
        text: '作品集',
        link: '/works/',
        fa: 'file-code-o'
      },
      {
        text: 'Timeline',
        link: '/experiences',
        fa: 'history'
      },
      {
        text: '部落格',
        link: '/blog/',
        fa: 'file-text'
      },
      {
        text: 'Travis CI',
        link: 'https://travis-ci.org/taichunmin/taichunmin.github.io',
        fa: 'tasks'
      },
      {
        text: '社交網站',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/taichunmin'
          },
          {
            text: 'Linkedin',
            link: 'https://www.linkedin.com/in/taichunmin/'
          },
          {
            text: 'Facebook',
            link: 'https://facebook.com/taichunmin'
          },
          {
            text: 'Email',
            link: 'mailto:taichunmin@gmail.com'
          },
        ]
      },
    ]
  },
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/png',
      href: '/favicon.png'
    }],
    ['meta', {
      property: 'og:locale',
      content: 'zh_TW'
    }],
    ['meta', {
      property: 'og:site_name',
      content: '筆記國度'
    }],
    ['meta', {
      property: 'fb:app_id',
      content: '2133031763635285'
    }],
  ],
  locales: {
    '/': {
      lang: 'zh-TW'
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-39556213-3'
      }
    ]
  ],
  chainWebpack(config, isServer) {
    for (const lang of ["sass", "scss"]) {
      for (const name of ["modules", "normal"]) {
        const rule = config.module.rule(lang).oneOf(name)
        rule.uses.delete("sass-loader")

        rule
          .use("sass-loader")
          .loader("sass-loader")
          .options({
            implementation: sass,
            sassOptions: {
              fiber,
              indentedSyntax: lang === "sass"
            }
          })
      }
    }
  }
}
