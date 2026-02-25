// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Vertex — Modern SaaS Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Vertex is a modern SaaS platform that helps teams collaborate, build, and ship products faster with intelligent tools and seamless workflows.',
        },
        { name: 'theme-color', content: '#0a0a12' },
        { property: 'og:title', content: 'Vertex — Modern SaaS Platform' },
        {
          property: 'og:description',
          content:
            'Collaborate, build, and ship products faster with intelligent tools.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: ['~/assets/css/main.css'],
})
