// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

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
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  // Build-time optimizations
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },

  // Nitro server optimizations
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    routeRules: {
      '/**': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      },
    },
  },

  // Experimental performance features
  experimental: {
    payloadExtraction: true,
  },

  // Route rules for caching
  routeRules: {
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
