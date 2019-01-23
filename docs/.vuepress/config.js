module.exports = {
  title: 'coderWgy',
  description: 'Love life',
  // 运行端口
  port: 8081,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png'}]
  ],
  themeConfig: {
    nav: [
      {
        text: '前端基础知识',
        items: [
          { text: 'HTTP', link: '/baseKnowledge/HTTP'}
        ]
      },
      { text: 'Target', link: '/target' },
      { text: 'GitHub', link: 'https://github.com/coderwgy' },
    ],
    // sidebar: {
    // },
    lastUpdated: 'Last Updated'
  },
  base: '/'
}