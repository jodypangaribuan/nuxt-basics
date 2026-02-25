<script setup lang="ts">
/**
 * ThePricing — Organism
 * Pricing section with plan cards.
 */

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small projects.',
    features: [
      'Up to 3 projects',
      '1 GB storage',
      'Basic analytics',
      'Community support',
      'API access',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited projects',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration',
      'SSO authentication',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated account manager',
      'Custom SLA',
      'On-premise deployment',
      'Advanced security',
      'Custom training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]
</script>

<template>
  <section class="section pricing" id="pricing">
    <div class="container">
      <AtomsSectionHeading subtitle="Pricing" tag="h2">
        Simple, <span class="gradient-text">transparent</span> pricing
        <template #description>
          No hidden fees. No surprises. Start free and scale as you grow.
        </template>
      </AtomsSectionHeading>

      <div class="pricing__grid">
        <article
          v-for="plan in plans"
          :key="plan.name"
          :class="['pricing__card', { 'pricing__card--popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="pricing__card-badge">
            Most Popular
          </div>

          <h3 class="pricing__card-name">{{ plan.name }}</h3>
          <p class="pricing__card-description">{{ plan.description }}</p>

          <div class="pricing__card-price">
            <span class="pricing__card-amount">{{ plan.price }}</span>
            <span v-if="plan.period" class="pricing__card-period">{{ plan.period }}</span>
          </div>

          <ul class="pricing__card-features">
            <li v-for="feature in plan.features" :key="feature" class="pricing__card-feature">
              <AtomsAppIcon name="check" :size="16" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <AtomsAppButton
            :variant="plan.popular ? 'primary' : 'secondary'"
            size="md"
            tag="a"
            href="#"
            style="width: 100%"
          >
            {{ plan.cta }}
          </AtomsAppButton>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  align-items: start;
}

.pricing__card {
  position: relative;
  padding: var(--space-8);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition: border-color var(--transition-base), transform var(--transition-base);
}

.pricing__card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
}

.pricing__card--popular {
  border-color: var(--color-accent-start);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(139, 92, 246, 0.03));
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.1);
}

.pricing__card-badge {
  position: absolute;
  top: calc(-1 * var(--space-3));
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-1) var(--space-4);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: #fff;
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.pricing__card-name {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.pricing__card-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.pricing__card-price {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  margin-bottom: var(--space-6);
}

.pricing__card-amount {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: var(--tracking-tight);
}

.pricing__card-period {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.pricing__card-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.pricing__card-feature {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.pricing__card-feature .app-icon,
.pricing__card-feature svg {
  color: var(--color-accent-end);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .pricing__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
