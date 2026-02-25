<script setup lang="ts">
/**
 * AppIcon — Atom
 * SVG icon wrapper with size and color props.
 * Uses inline SVG paths for zero-dependency icons.
 */

interface Props {
  name: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
})

const icons: Record<string, string> = {
  'lightning': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'shield': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'chart': 'M18 20V10M12 20V4M6 20v-6',
  'code': 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  'globe': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  'layers': 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  'check': 'M20 6L9 17l-5-5',
  'star': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'menu': 'M3 12h18M3 6h18M3 18h18',
  'x': 'M18 6L6 18M6 6l12 12',
  'github': 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  'twitter': 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  'sparkles': 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1zM19 13l.5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13z',
}

const isStroke = computed(() => {
  const strokeIcons = ['lightning', 'shield', 'chart', 'code', 'globe', 'layers', 'arrow-right', 'check', 'menu', 'x', 'github', 'twitter']
  return strokeIcons.includes(props.name)
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="app-icon"
    aria-hidden="true"
  >
    <path
      :d="icons[name] || icons['star']"
      :stroke="isStroke ? 'currentColor' : 'none'"
      :fill="isStroke ? 'none' : 'currentColor'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.app-icon {
  flex-shrink: 0;
}
</style>
