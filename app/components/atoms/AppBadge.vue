<script setup lang="ts">
/**
 * AppBadge — Atom
 * Small label/badge component for tags and status indicators.
 */

interface Props {
  variant?: 'accent' | 'subtle'
}

withDefaults(defineProps<Props>(), {
  variant: 'accent',
})
</script>

<template>
  <span :class="['app-badge', `app-badge--${variant}`]">
    <slot />
  </span>
</template>

<style scoped>
.app-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-4);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius: var(--radius-full);
}

.app-badge--accent {
  background: rgba(99, 102, 241, 0.12);
  color: var(--color-accent-end);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.app-badge--subtle {
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}
</style>
