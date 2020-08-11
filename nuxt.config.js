
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&display=swap' },
    ]
  },
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  bootstrapVue: {
    components: ['BIcon', 'BIconChevronRight'],
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
  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'client' }],
  /*
  ** Nuxt.js dev-modules
  */
  components: true,
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  // Doc: https://bootstrap-vue.js.org
  'bootstrap-vue/nuxt',
  '@nuxtjs/style-resources',
],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
