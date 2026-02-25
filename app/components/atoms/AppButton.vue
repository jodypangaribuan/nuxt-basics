<script setup lang="ts">
/**
 * AppButton — Atom
 * Reusable button with variant support (primary, secondary, ghost).
 */

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  tag?: 'button' | 'a' | 'nuxt-link'
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
})

const classes = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
])
</script>

<template>
  <component
    :is="tag === 'nuxt-link' ? resolveComponent('NuxtLink') : tag"
    :class="classes"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'nuxt-link' ? to : undefined"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  border-radius: var(--radius-lg);
  transition:
    background var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
}

.app-button:active {
  transform: scale(0.97);
}

/* — Sizes — */
.app-button--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.app-button--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.app-button--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* — Variants — */
.app-button--primary {
  background: var(--gradient-accent);
  color: #fff;
  border: none;
  box-shadow: var(--shadow-sm), 0 0 20px var(--color-accent-glow);
}

.app-button--primary:hover {
  box-shadow: var(--shadow-md), var(--shadow-glow);
  transform: translateY(-2px);
}

.app-button--secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
}

.app-button--secondary:hover {
  border-color: var(--color-accent-start);
  background: rgba(99, 102, 241, 0.06);
  transform: translateY(-2px);
}

.app-button--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding-inline: var(--space-3);
}

.app-button--ghost:hover {
  color: var(--color-text-primary);
}
</style>
