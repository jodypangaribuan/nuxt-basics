<script setup lang="ts">
/**
 * DefaultLayout — Template (Atomic Design)
 * Wraps pages with persistent Navbar and Footer organisms.
 */
</script>

<template>
  <div class="layout">
    <OrganismsTheNavbar />
    <main class="layout__main">
      <slot />
    </main>
    <OrganismsTheFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__main {
  flex: 1;
}
</style>
