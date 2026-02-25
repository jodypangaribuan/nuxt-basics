<script setup lang="ts">
/**
 * SectionHeading — Atom
 * Reusable section heading with optional subtitle.
 */

interface Props {
  tag?: string
  subtitle?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  tag: 'h2',
  align: 'center',
})
</script>

<template>
  <div :class="['section-heading', `section-heading--${align}`]">
    <p v-if="subtitle" class="section-heading__subtitle">
      {{ subtitle }}
    </p>
    <component :is="tag" class="section-heading__title">
      <slot />
    </component>
    <p v-if="$slots.description" class="section-heading__description">
      <slot name="description" />
    </p>
  </div>
</template>

<style scoped>
.section-heading {
  margin-bottom: var(--space-16);
}

.section-heading--center {
  text-align: center;
}

.section-heading--left {
  text-align: left;
}

.section-heading__subtitle {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-accent-end);
  margin-bottom: var(--space-3);
}

.section-heading__title {
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

.section-heading__description {
  margin-top: var(--space-4);
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  max-width: 640px;
}

.section-heading--center .section-heading__description {
  margin-inline: auto;
}

@media (min-width: 768px) {
  .section-heading__title {
    font-size: var(--text-5xl);
  }
}
</style>
