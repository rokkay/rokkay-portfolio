export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'rayaleonjosecarlos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
      // https://marquez.co/docs/nuxt-optimized-images/
      '@aceforth/nuxt-optimized-images',
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      // https://github.com/nuxt-community/svg-module
      '@nuxtjs/svg',
      // https://github.com/nuxt-community/fontawesome-module
      '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: '', // Used as fallback if no runtime config is provided
    https: true,
  },

  fontawesome: {
    solid: ['faAt', 'faMobileAlt', 'faEnvelope', 'faArrowDown'],
    brands: ['faTelegram'],
  },

  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImagesInDev: false,
    sqip: {
      mode: 4,
    },
  },

  webfontloader: {
    google: {
      families: ['Poppins:300,400,500,700&display=swap'],
    },
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Lf2pNoZAAAAAFg-Vi5P5eLO0s-pY2fgzA1WknQV', // Site key for requests
    version: 3, // Version
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
