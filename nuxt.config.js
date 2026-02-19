import svgLoader from 'vite-svg-loader'

const recaptchaSiteKey =
  process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  '6Lf2pNoZAAAAAFg-Vi5P5eLO0s-pY2fgzA1WknQV'

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  plugins: ['~/plugins/fontawesome.js'],
  components: true,
  dir: {
    public: 'static',
  },
  app: {
    head: {
      title: 'rokkay-portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
        },
      ],
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`,
          async: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        (process.env.NODE_ENV === 'development'
          ? 'http://localhost:7071/api'
          : 'https://www.rayaleonjosecarlos.com/api'),
      recaptchaSiteKey,
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
