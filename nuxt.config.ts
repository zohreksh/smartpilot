export default defineNuxtConfig({
  ssr: true,
  components: {
    dirs: [
      { path: '~/components', pathPrefix: false }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      title: 'Digital Product Studio'
    }
  },
  css: ['~/assets/css/main.css']
})
