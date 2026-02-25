<script setup lang="ts">
/**
 * NavLink — Molecule
 * Navigation link with hover animation.
 * Combines text with optional icon atom.
 */

interface Props {
  href?: string
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  href: '#',
  active: false,
})
</script>

<template>
  <a
    :href="href"
    :class="['nav-link', { 'nav-link--active': active }]"
  >
    <slot />
  </a>
</template>

<style scoped>
.nav-link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  padding: var(--space-2) 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}

.nav-link:hover,
.nav-link--active {
  color: var(--color-text-primary);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}
</style>
