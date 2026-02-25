<script setup lang="ts">
/**
 * TheFeatures — Organism
 * Features section displaying a grid of FeatureCard molecules.
 */

const features = [
  {
    icon: 'lightning',
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-millisecond response times. Your workflows never slow down.',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption, SSO, and advanced access controls.',
  },
  {
    icon: 'chart',
    title: 'Real-time Analytics',
    description: 'Track metrics that matter with live dashboards and customizable reports.',
  },
  {
    icon: 'code',
    title: 'Developer First',
    description: 'Powerful APIs, SDKs, and CLI tools. Integrate with your existing tech stack in minutes.',
  },
  {
    icon: 'globe',
    title: 'Global CDN',
    description: '200+ edge locations worldwide ensure low latency for users everywhere.',
  },
  {
    icon: 'layers',
    title: 'Smart Automation',
    description: 'AI-powered workflows that learn and adapt to your team\'s patterns over time.',
  },
]
</script>

<template>
  <section class="section features" id="features">
    <div class="container">
      <AtomsSectionHeading subtitle="Features" tag="h2">
        Everything you need to
        <span class="gradient-text">move faster</span>
        <template #description>
          A complete toolkit designed for modern teams. From development to deployment,
          Vertex covers every step of your workflow.
        </template>
      </AtomsSectionHeading>

      <div class="features__grid">
        <MoleculesFeatureCard
          v-for="(feature, index) in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :class="[`delay-${index + 1}`]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  position: relative;
}

.features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
