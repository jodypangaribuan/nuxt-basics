<script setup lang="ts">
/**
 * TheCTA — Organism
 * Call-to-action banner section.
 */
</script>

<template>
  <section class="section cta" id="cta">
    <div class="container">
      <div class="cta__card">
        <!-- Background glow -->
        <div class="cta__glow" aria-hidden="true" />

        <div class="cta__content">
          <h2 class="cta__title">
            Ready to <span class="gradient-text">supercharge</span> your workflow?
          </h2>
          <p class="cta__description">
            Join thousands of teams already building better with Vertex.
            Start for free — no credit card required.
          </p>
          <div class="cta__actions">
            <AtomsAppButton variant="primary" size="lg" tag="a" href="#pricing">
              Get Started for Free
              <AtomsAppIcon name="arrow-right" :size="18" />
            </AtomsAppButton>
            <AtomsAppButton variant="ghost" size="lg" tag="a" href="#features">
              Learn More
            </AtomsAppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta__card {
  position: relative;
  padding: var(--space-16) var(--space-8);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  text-align: center;
  overflow: hidden;
}

.cta__glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
  pointer-events: none;
  animation: pulse-glow 4s ease-in-out infinite;
}

.cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  max-width: 640px;
  margin-inline: auto;
}

.cta__title {
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.cta__description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .cta__title {
    font-size: var(--text-5xl);
  }

  .cta__card {
    padding: var(--space-20) var(--space-12);
  }
}
</style>
