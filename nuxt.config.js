module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kinice的个人博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Kinice' },
      { name: 'baidu-site-verification', content: 'yo7pE95Dym' },
      { hid: 'description', name: 'description', content: 'Kinice的个人博客，分享kinice的点滴生活' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    // load assets css file
    '~assets/css/reset.css',
    '~assets/css/iconfont.css',
    { src: '~assets/css/commonNew.less', lang: 'less' }
  ],
  build: {
    //plugins
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
