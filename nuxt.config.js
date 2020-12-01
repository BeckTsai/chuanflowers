module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '繾 綣｜CHUAN Flowers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'google-site-verification', content: 'S2mbpFnmwU8ouwT4WRXhUK0625ReU7kxqCxTdFAg_P8' },
      { hid: 'description', name: 'description', content: '捧花・花束・花藝課程・婚禮佈置' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '繾 綣｜CHUAN Flowers' },
      { hid: 'og:description', property: 'og:description', content: '捧花・花束・花藝課程・婚禮佈置' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.chuanflowers.com' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'CHUAN Flowers' },
      { hid: 'fb:admins', property: 'fb:admins', content: '繾 綣｜CHUAN Flowers' },
      { hid: 'fb_admins_meta_tag', property: 'fb_admins_meta_tag', content: 'CHUAN Flowers' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  googleFonts: {
    families: {
      'Averia+Serif+Libre': [300],
      'Noto+Serif+TC': [600],
      Raleway: {
        wght: [300, 600],
      },
    },
    display: 'swap',
  },
  server: {
    host: '0.0.0.0',
  },
  telemetry: false,
  bootstrapVue: {
    components: ['BIcon', 'BIconChevronRight', 'BIconX', 'BIconChevronCompactRight', 'BIconChevronCompactLeft'],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', 'swiper/css/swiper.css', 'animate.css/animate.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  styleResources: {
    scss: ['@/assets/css/_variables.scss'],
  },
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    '@/plugins/vue-lazyload',
    // { src: '~plugins/ga.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  components: true,
  googleAnalytics: {
    id: 'UA-91758816-2',
  },
  buildModules: ['@aceforth/nuxt-optimized-images', '@nuxtjs/google-fonts', '@nuxtjs/google-analytics'],
  optimizedImages: {
    optimizeImages: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/component-cache',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}, // eslint-disable-line
    babel: { compact: true },
    'html.minify': {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
    },
  },
  buildDir: 'nuxt-dist',
}
