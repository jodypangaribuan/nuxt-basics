<script setup lang="ts">
/**
 * TestimonialCard — Molecule
 * Customer testimonial with quote, name, and role.
 */

interface Props {
  quote: string
  name: string
  role: string
  avatar: string
}

defineProps<Props>()
</script>

<template>
  <article class="testimonial-card">
    <div class="testimonial-card__stars">
      <AtomsAppIcon
        v-for="i in 5"
        :key="i"
        name="star"
        :size="16"
      />
    </div>
    <blockquote class="testimonial-card__quote">
      "{{ quote }}"
    </blockquote>
    <div class="testimonial-card__author">
      <div class="testimonial-card__avatar">
        {{ avatar }}
      </div>
      <div>
        <p class="testimonial-card__name">{{ name }}</p>
        <p class="testimonial-card__role">{{ role }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.testimonial-card {
  padding: var(--space-8);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base);
}

.testimonial-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}

.testimonial-card__stars {
  display: flex;
  gap: var(--space-1);
  color: #f59e0b;
  margin-bottom: var(--space-4);
}

.testimonial-card__quote {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  font-style: normal;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
}

.testimonial-card__name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.testimonial-card__role {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
