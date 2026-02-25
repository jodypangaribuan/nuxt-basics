<script setup lang="ts">
/**
 * app.vue — Root Application Component
 * Uses the DefaultLayout template and renders the landing page.
 *
 * Architecture: Atomic Design System
 *  └── Templates/DefaultLayout (Navbar + Footer)
 *       └── Pages (organisms composed together)
 */

useHead({
  titleTemplate: '%s — Vertex',
})
</script>

<template>
  <TemplatesDefaultLayout>
    <OrganismsTheHero />
    <OrganismsTheFeatures />
    <OrganismsTheTestimonials />
    <OrganismsThePricing />
    <OrganismsTheCTA />
  </TemplatesDefaultLayout>
</template>
