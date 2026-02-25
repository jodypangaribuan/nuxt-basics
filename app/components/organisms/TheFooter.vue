<script setup lang="ts">
/**
 * TheFooter — Organism
 * Site footer with links, social icons, and copyright.
 */

const currentYear = new Date().getFullYear()

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
}
</script>

<template>
  <footer class="footer" id="footer">
    <div class="container">
      <!-- Top -->
      <div class="footer__top">
        <!-- Brand -->
        <div class="footer__brand">
          <a href="#" class="footer__logo" aria-label="Vertex Home">
            <span class="footer__logo-icon">
              <AtomsAppIcon name="sparkles" :size="20" />
            </span>
            <span class="footer__logo-text">Vertex</span>
          </a>
          <p class="footer__tagline">
            Build faster. Ship smarter.<br />
            The platform for modern teams.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="GitHub">
              <AtomsAppIcon name="github" :size="20" />
            </a>
            <a href="#" class="footer__social-link" aria-label="Twitter">
              <AtomsAppIcon name="twitter" :size="20" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <div
            v-for="(links, category) in footerLinks"
            :key="category"
            class="footer__column"
          >
            <h4 class="footer__column-title">{{ category }}</h4>
            <ul class="footer__column-list">
              <li v-for="link in links" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} Vertex. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-16);
  padding-bottom: var(--space-8);
}

.footer__top {
  display: grid;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

/* — Brand — */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.footer__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--gradient-accent);
  border-radius: var(--radius-md);
  color: #fff;
}

.footer__tagline {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);
}

.footer__social-link:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border-hover);
  background: rgba(255, 255, 255, 0.04);
}

/* — Links — */
.footer__links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.footer__column-title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.footer__column-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-text-primary);
}

/* — Bottom — */
.footer__bottom {
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.footer__copyright {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-align: center;
}

@media (min-width: 768px) {
  .footer__top {
    grid-template-columns: 1.2fr 2fr;
  }

  .footer__links {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
