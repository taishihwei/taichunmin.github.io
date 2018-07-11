module.exports = {
  title: '筆記國度',
  description: '目前任職於微程式資訊股份有限公司，從高中因為社團接觸 ACM，然後大學開始自學 PHP。主要是後端工程師，前端略有涉略，美工超級不擅長，請大家多多指教。',
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'home' },
      { text: '經歷', link: '/experiences', icon: 'history' },
      { text: '技能', link: '/skills', icon: 'bar-chart-o' },
      { text: '作品集', link: '/works', icon: 'file-code-o' },
      { text: '部落格', link: '/blog/', icon: 'file-text' },
      { text: 'GitHub', link: 'https://github.com/taichunmin/taichunmin.github.io/', icon: 'github' },
      { text: 'Travis CI', link: 'https://travis-ci.org/taichunmin/taichunmin.github.io', icon: 'tasks' },
    ],
    repo: 'taichunmin/blog',
    editLinks: false,
    ga: 'UA-39556213-3'
  },
  head: [
    ['link', {rel: 'shortcut icon', type: 'image/png', href: '/favicon.png'}]
  ]
}