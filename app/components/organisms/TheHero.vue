<script setup lang="ts">
/**
 * TheHero — Organism
 * Hero section with headline, description, CTAs, and animated background.
 * Composes AppBadge, AppButton atoms and StatItem molecules.
 */

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50+', label: 'Integrations' },
  { value: '4.9★', label: 'Rating' },
]

// Delay animation classes to fix LCP detection
// (opacity: 0 in animation keyframes hides the h1 from LCP detection)
const isHydrated = ref(false)
onMounted(() => {
  // Use requestAnimationFrame to ensure first paint has occurred
  requestAnimationFrame(() => {
    isHydrated.value = true
  })
})
</script>

<template>
  <section class="hero" id="hero">
    <!-- Animated Background -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__orb hero__orb--1" />
      <div class="hero__orb hero__orb--2" />
      <div class="hero__orb hero__orb--3" />
      <div class="hero__grid" />
    </div>

    <div class="container hero__container">
      <div :class="['hero__content', { 'animate-fade-in-up': isHydrated }]">
        <AtomsAppBadge variant="accent">
          <AtomsAppIcon name="sparkles" :size="14" />
          Now in Public Beta
        </AtomsAppBadge>

        <h1 class="hero__title">
          Build Faster.<br />
          <span class="gradient-text">Ship Smarter.</span>
        </h1>

        <p class="hero__description">
          Vertex empowers your team with intelligent tools and seamless workflows.
          From ideation to deployment — everything you need in one unified platform.
        </p>

        <div class="hero__actions">
          <AtomsAppButton variant="primary" size="lg" tag="a" href="#pricing">
            Start Free Trial
            <AtomsAppIcon name="arrow-right" :size="18" />
          </AtomsAppButton>
          <AtomsAppButton variant="secondary" size="lg" tag="a" href="#features">
            See How It Works
          </AtomsAppButton>
        </div>
      </div>

      <!-- Stats Bar -->
      <div :class="['hero__stats', { 'animate-fade-in-up delay-3': isHydrated }]">
        <MoleculesStatItem
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px; /* navbar height */
  overflow: hidden;
}

/* — Background Effects — */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 8s ease-in-out infinite;
  will-change: transform;
  contain: layout style;
}

.hero__orb--1 {
  width: 500px;
  height: 500px;
  background: rgba(99, 102, 241, 0.15);
  top: -10%;
  left: 20%;
}

.hero__orb--2 {
  width: 400px;
  height: 400px;
  background: rgba(139, 92, 246, 0.12);
  top: 30%;
  right: -5%;
  animation-delay: 2s;
}

.hero__orb--3 {
  width: 300px;
  height: 300px;
  background: rgba(167, 139, 250, 0.1);
  bottom: 10%;
  left: 5%;
  animation-delay: 4s;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
}

/* — Content — */
.hero__container {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  max-width: 800px;
}

.hero__title {
  font-size: var(--text-6xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.hero__description {
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  max-width: 600px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

/* — Stats — */
.hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  margin-top: var(--space-16);
  padding: var(--space-8) var(--space-12);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  backdrop-filter: blur(12px);
  width: 100%;
  max-width: 720px;
}

@media (min-width: 640px) {
  .hero__stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--text-7xl);
  }
}
</style>
