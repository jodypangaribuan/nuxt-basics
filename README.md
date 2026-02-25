<div align="center">
  <h1>✨ Vertex</h1>
</div>

<div align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" />
  <img alt="Platform" src="https://img.shields.io/badge/Platform-Web-lightgrey?style=flat-square" />
  <img alt="Lighthouse" src="https://img.shields.io/badge/Lighthouse-100%2F100-success?style=flat-square" />
</div>

<br />

<div align="center">
  <img alt="Nuxt.js" src="https://img.shields.io/badge/Nuxt%204-00DC82?style=flat-square&logo=nuxt.js&logoColor=white" />
  <img alt="Vue.js" src="https://img.shields.io/badge/Vue%203-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js%2025-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
</div>

<br />

<p align="center">
  <strong>A modern, high-performance SaaS platform built to help teams collaborate, build, and ship products faster.</strong>
</p>

<br />

## Executive Summary

**Vertex** is a premium, beautifully-designed SaaS landing page built exclusively with modern web technologies: Nuxt 4, Vue 3, and raw CSS. It leverages an **Atomic Design System** to keep components perfectly modular and maintainable. This application is optimized to the absolute maximum, achieving a flawless **100/100/100/100 score on Google Lighthouse** across Performance, Accessibility, Best Practices, and SEO.

## Key Features

- **⚡ Lightning Fast (100 Lighthouse Performance)**: Built with Vite and Nitro for sub-millisecond responses and blazing fast page loads. No layout shifts (0 CLS) and zero blocking time. Fully compressed assets.
- **🛡️ Enterprise Ready**: Integrates robust headers (X-Content-Type-Options, X-Frame-Options) and follows strict SEO and Accessibility best practices.
- **🎨 Custom Atomic Design System**: Built completely independent of heavy UI libraries. Organized meticulously into Templates, Organisms, Molecules, and Atoms.
- **✨ Fluid Micro-Animations**: Delivers a rich, dynamic aesthetic featuring subtle floating orbs, hover effects, smooth gradients, and glassmorphism styling natively in CSS.
- **📱 Responsive Mobile-First Structure**: Perfectly adapts across all screen sizes with seamless mobile drawer navigation and fluid typography.

---

## Tech Stack & Core Systems

| Category | Technology |
| --- | --- |
| **Frontend Framework** | Nuxt 4 (Vue 3, Script Setup API), TypeScript |
| **Styling** | Vanilla CSS (CSS Variables, Flexbox/Grid, Animations) |
| **Build Tooling** | Vite (optimized for client and server-side rendering) |
| **Server/Engine** | Nitro Server (optimized deployment with text compression) |
| **Design Pattern** | Atomic Design Methodology |

---

## Project Structure

This project adopts a clean structure that separates concerns by utilizing the Atomic Design System principles for Vue components:

```text
nuxt-basics/
├── app/                            # Main application directory
│   ├── assets/                     # Global assets
│   │   └── css/                    
│   │       └── main.css            # Global CSS variables & token system
│   ├── components/                 # Vue Components (Atomic Design)
│   │   ├── atoms/                  # Fundamental UI elements (Buttons, Icons, Badges)
│   │   ├── molecules/              # UI combinations (Feature Cards, Nav Links)
│   │   ├── organisms/              # Complex sections (Hero, Navbar, Features, Pricing)
│   │   └── templates/              # Page layouts (DefaultLayout)
│   └── app.vue                     # Root application component
├── public/                         # Static application assets (favicon, robots.txt)
├── nuxt.config.ts                  # Engine & Framework configurations
└── package.json                    # Project metadata and dependencies
```

---

## How to Run the Application

### System Prerequisites
Ensure your operating system has the following installed:
- [Node.js](https://nodejs.org/) (version 25 or above recommended)

### Running Manually (Development Mode)

1. Open a terminal in the root folder of this project.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the *development server*:
   ```bash
   npm run dev
   ```
4. Access the application in your browser: `http://localhost:3000`

### Production Build

1. Build the application for production:
   ```bash
   npm run build
   ```
2. Locally preview the production server:
   ```bash
   npm run preview
   # Note: The raw node command can also be used directly:
   # node .output/server/index.mjs
   ```

---

## Development Info

Developed as part of `nuxt-basics`. Focuses entirely on squeezing the absolute maximum performance out of the modern Nuxt ecosystem while delivering a visually premium and highly-componentized UI.
