const webpack = require('webpack')

module.exports = {
  title: '筆記國度',
  description: '目前任職於微程式資訊股份有限公司，從高中因為社團接觸 ACM，然後大學開始自學 PHP。主要是後端工程師，前端略有涉略，美工超級不擅長，請大家多多指教。',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '經歷', link: '/experiences' },
      { text: '技能', link: '/skills' },
      { text: '作品集', link: '/works' },
      { text: '關於本站', link: '/about-site' },
    ],
    repo: 'taichunmin/blog',
    editLinks: false,
    ga: 'UA-39556213-2'
  }
}