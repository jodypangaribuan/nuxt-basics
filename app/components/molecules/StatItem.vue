<script setup lang="ts">
/**
 * StatItem — Molecule
 * Displays a statistic with value and label.
 */

interface Props {
  value: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="stat-item">
    <span class="stat-item__value gradient-text">{{ value }}</span>
    <span class="stat-item__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
}

.stat-item__value {
  font-size: var(--text-4xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.stat-item__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

@media (min-width: 768px) {
  .stat-item__value {
    font-size: var(--text-5xl);
  }
}
</style>
