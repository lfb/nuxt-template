const dotenv = require('dotenv')
const envConfig = dotenv.config({ path: `.env.${process.env.NODE_ENV}` }).parsed

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/tools-inject',
    '@/plugins/axios',
    '@/plugins/axios-request',
    '@/plugins/router',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  styleResources: {
    scss: [
      // 把全局样式放到这里，同时把css节点中引用的scss删除
      '~/assets/scss/css-global.scss',
    ],
  },
  env: envConfig,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    dir: 'dist',
    publicPath: process.env.STATIC_CDN_URL,
    // 打包输出文件名
    filenames: {
      app: ({ isDev }) => (isDev ? `[name].js` : `js/[name].[contenthash].js`),
      chunk: ({ isDev }) =>
        isDev ? '[name].js' : 'js/[name].[contenthash].js',
      css: ({ isDev }) =>
        isDev ? '[name].css' : 'css/[name].[contenthash].css',
    },
    terser: {
      terserOptions: {
        warnings: false,
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: process.env.NODE_ENV === 'production',
        },
      },
    },
  },
}
