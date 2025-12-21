export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],
  app: {
    head: {
      title: "Evan DYNAK - Portfolio",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'application-name', content: 'Evan DYNAK - Portfolio' },
        { name: 'description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste." },
        { name: 'keywords', content: 'Musique, Conception, Site Internet, Dijon, Evan DYNAK' },
        { name: 'author', content: 'Evan DYNAK' },

        { property: 'og:title', content: 'Evan DYNAK - Portfolio' },
        { property: 'og:description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste." },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://evandynak.me' },
        { property: 'og:image', content: "http://evandynak.me/img/website-illustration.png" },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Evan DYNAK - Portfolio' },
        { name: 'twitter:description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste." },
        { name: 'twitter:image', content: 'http://evandynak.me/img/website-illustration.png' }
      ],
      link: [
        { rel: 'canonical', href: "http://evandynak.me" }
      ],
      script: [
        // JSON-LD structured data: Person + Website
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Evan DYNAK",
                "url": "http://evandynak.me",
                "jobTitle": "Développeur / Concepteur",
                "sameAs": [
                  "https://github.com/ashzuu",
                  "https://www.linkedin.com/in/evandynak/"
                ]
              },
              {
                "@type": "WebSite",
                "url": "http://evandynak.me",
                "name": "Evan DYNAK - Portfolio",
                "publisher": {
                  "@type": "Person",
                  "name": "Evan DYNAK"
                }
              }
            ]
          })
        }
      ]
    }
  }
})