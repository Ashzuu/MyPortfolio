export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],
  app: {
    head: {
      title: "Evan DYNAK - Portfolio",
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: "fr",
      },
      meta:[
        { name: 'application-name', content: 'Evan DYNAK - Portfolio' },
        { name:"description", content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste." },
        { name: 'ogDescription', content:"Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste."},
        { name: "creator", content: "Evan DYNAK"},
        { name: "keywords", content: "Musique Conception Site Internet Dijon Evan DYNAK"},
      ]
    }
  }
})