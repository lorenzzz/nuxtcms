module.exports = {
  build: {
    vendor: ['@nuxtjs/axios']
  },
  modules: [
    '@nuxtjs/bulma',
    'nuxtent',
    'nuxt-netlify-cms',
  ],
  head: {
    title: 'For the Public',
    titleTemplate: '%s - Designing for Social Impact!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,300i' },
      { rel: 'icon', href: '/favicon_16.png', type:'image/png', sizes:'16x16' },
      { rel: 'icon', href: '/favicon_32.png', type:'image/png', sizes:'32x32' },
    ]
  }
}
