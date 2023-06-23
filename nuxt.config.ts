// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    'nuxt-back-to-top',
  ],

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: true,
  },

  unocss: {
    preflight: true,
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  backToTop: {
    prefix: 'Nuxt',
    autoInsert: false,
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/wpeters/image/upload/v1686581210',
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto',
      },
    },
    domains: ['avatars0.githubusercontent.com'],
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Wout Peters',
      titleTemplate: '%s - Wout Peters',
      meta: [{ name: 'description', content: 'Portfolio van Wout Peters' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
})
