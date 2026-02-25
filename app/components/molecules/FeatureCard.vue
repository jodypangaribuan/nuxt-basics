<script setup lang="ts">
/**
 * FeatureCard — Molecule
 * Card displaying a feature with icon, title, and description.
 * Composes AppIcon atom.
 */

interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <article class="feature-card">
    <div class="feature-card__icon-wrap">
      <AtomsAppIcon :name="icon" :size="24" />
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </article>
</template>

<style scoped>
.feature-card {
  position: relative;
  padding: var(--space-8);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base),
    box-shadow var(--transition-base);
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-subtle);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.feature-card:hover {
  background: var(--color-bg-card-hover);
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card__icon-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--gradient-accent);
  border-radius: var(--radius-lg);
  color: #fff;
  margin-bottom: var(--space-5);
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.feature-card__title {
  position: relative;
  z-index: 1;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
  letter-spacing: var(--tracking-tight);
}

.feature-card__description {
  position: relative;
  z-index: 1;
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
}
</style>
