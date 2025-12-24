export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
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
        { name: 'description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste. Découvrez mes différents projets personnels et n'hésitez pas à me contacter pour quoi que ce soit !" },
        { name: 'keywords', content: 'Musique, Conception, Site Internet, Dijon, Evan DYNAK' },
        { name: 'author', content: 'Evan DYNAK' },

        { property: 'og:title', content: 'Evan DYNAK - Portfolio' },
        { property: 'og:description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste. Découvrez mes différents projets personnels et n'hésitez pas à me contacter pour quoi que ce soit !" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://evandynak.me' },
        { property: 'og:image', content: "https://evandynak.me/img/portfolio-illustration.png" },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Evan DYNAK - Portfolio' },
        { name: 'twitter:description', content: "Portfolio d'Evan DYNAK, développeur / concepteur & contrebassiste. Découvrez mes différents projets personnels et n'hésitez pas à me contacter pour quoi que ce soit !" },
        { name: 'twitter:image', content: 'https://evandynak.me/img/portfolio-illustration.png' }
      ],
      link: [
        { rel: 'canonical', href: "https://evandynak.me" },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Evan DYNAK",
                "url": "https://evandynak.me",
                "jobTitle": "Développeur / Concepteur",
                "sameAs": [
                  "https://github.com/ashzuu",
                  "https://www.linkedin.com/in/evandynak/"
                ]
              },
              {
                "@type": "WebSite",
                "url": "https://evandynak.me",
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