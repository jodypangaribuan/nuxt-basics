<script setup lang="ts">
/**
 * TheTestimonials — Organism
 * Social proof section with customer testimonials.
 */

const testimonials = [
  {
    quote: 'Vertex transformed how our team collaborates. We shipped our product 3x faster than expected.',
    name: 'Sarah Chen',
    role: 'CTO at Flowbase',
    avatar: '👩‍💻',
  },
  {
    quote: 'The developer experience is unmatched. APIs are clean, docs are excellent, and support is lightning fast.',
    name: 'Marcus Rivera',
    role: 'Lead Engineer at Stackly',
    avatar: '👨‍🔬',
  },
  {
    quote: 'We migrated our entire infrastructure in a weekend. The automation features saved us hundreds of hours.',
    name: 'Aisha Patel',
    role: 'VP Engineering at Nimbus',
    avatar: '👩‍🚀',
  },
]
</script>

<template>
  <section class="section testimonials" id="testimonials">
    <div class="container">
      <AtomsSectionHeading subtitle="Testimonials" tag="h2">
        Loved by <span class="gradient-text">thousands</span> of teams
        <template #description>
          Hear from the teams who build better, ship faster, and scale smarter with Vertex.
        </template>
      </AtomsSectionHeading>

      <div class="testimonials__grid">
        <MoleculesTestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :quote="testimonial.quote"
          :name="testimonial.name"
          :role="testimonial.role"
          :avatar="testimonial.avatar"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--color-bg-secondary);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
