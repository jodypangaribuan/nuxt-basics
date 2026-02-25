<script setup lang="ts">
/**
 * TheNavbar — Organism
 * Site navigation combining NavLink molecules and AppButton atoms.
 * Features mobile hamburger menu with smooth transitions.
 */

const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled }]" id="navbar">
    <nav class="container navbar__inner" aria-label="Main navigation">
      <!-- Logo -->
      <a href="#" class="navbar__logo" aria-label="Vertex Home">
        <span class="navbar__logo-icon">
          <AtomsAppIcon name="sparkles" :size="20" />
        </span>
        <span class="navbar__logo-text">Vertex</span>
      </a>

      <!-- Desktop Links -->
      <div class="navbar__links">
        <MoleculesNavLink
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
        >
          {{ link.label }}
        </MoleculesNavLink>
      </div>

      <!-- Desktop CTA -->
      <div class="navbar__actions">
        <AtomsAppButton variant="ghost" size="sm" tag="a" href="#pricing">
          Log In
        </AtomsAppButton>
        <AtomsAppButton variant="primary" size="sm" tag="a" href="#pricing">
          Get Started
        </AtomsAppButton>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="navbar__hamburger"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <AtomsAppIcon :name="isMobileMenuOpen ? 'x' : 'menu'" :size="24" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="navbar__mobile" id="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="navbar__mobile-link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <div class="navbar__mobile-actions">
          <AtomsAppButton variant="secondary" size="md" tag="a" href="#pricing" @click="closeMobileMenu">
            Log In
          </AtomsAppButton>
          <AtomsAppButton variant="primary" size="md" tag="a" href="#pricing" @click="closeMobileMenu">
            Get Started
          </AtomsAppButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 18, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition:
    background var(--transition-base),
    border-color var(--transition-base);
}

.navbar--scrolled {
  background: rgba(10, 10, 18, 0.9);
  border-bottom-color: var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* — Logo — */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  text-decoration: none;
}

.navbar__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--gradient-accent);
  border-radius: var(--radius-md);
  color: #fff;
}

/* — Desktop Links — */
.navbar__links {
  display: none;
  align-items: center;
  gap: var(--space-8);
}

/* — Desktop Actions — */
.navbar__actions {
  display: none;
  align-items: center;
  gap: var(--space-3);
}

/* — Hamburger — */
.navbar__hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  padding: var(--space-2);
}

/* — Mobile Menu — */
.navbar__mobile {
  padding: var(--space-6);
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.navbar__mobile-link {
  display: block;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text-primary);
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

/* — Transitions — */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-base);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* — Desktop Breakpoint — */
@media (min-width: 768px) {
  .navbar__links {
    display: flex;
  }

  .navbar__actions {
    display: flex;
  }

  .navbar__hamburger {
    display: none;
  }
}
</style>
