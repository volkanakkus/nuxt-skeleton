<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Skeleton
- Package name: nuxt-skeleton
-->

# Nuxt Skeleton

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A skeleton & placeholder module for Nuxt 3.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-skeleton?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Easy to build
- Customizable Component Names
- Themeable

## Documentation

We're preparing the documentation and playground, it will be added soon.

## Quick Setup

1. Add `nuxt-skeleton` dependency to your project

```bash
# Using yarn
yarn add nuxt-skeleton

# Using npm
npm install nuxt-skeleton

# Using pnpm
pnpm add nuxt-skeleton
```

2. Add `nuxt-skeleton` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-skeleton'
  ]
})
```
That's it! You can now use Skeleton Components in your Nuxt app ✨

## Usage

We're preparing the examples, it will be added soon.

## Todo

- [x] Fully Functional Skeleton Components
- [ ] Add Examples to README.md
- [ ] Build Documentation and Playground Website

#### Functionalites

- [x] Wraps, Blocks and Skeletons
- [x] SkeletonDiv Component to Use Functional Props
- [x] Customizable Component Names
- [x] Animations 
  - [x] Different Types of Animations
  - [x] Adjustable Speed of Animations
- [x] Color Support
  - [x] Dark and Light Mode
  - [ ] Adjustable Opacity of Animations
  - [ ] Adjustable Color of Animations
- [ ] Add Random Width Option for When Skeletons Repeats
- [ ] Allow Multiple Widths and Heights Option When Skeletons Repeats
- [ ] Configure Default Options from Module Options

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```
---

This software is licensed under the [MIT License](https://github.com/volkanakkus/nuxt-skeleton/blob/main/LICENSE) | @volkanakkus 


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-skeleton/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-skeleton

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-skeleton.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-skeleton

[license-src]: https://img.shields.io/npm/l/nuxt-skeleton.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-skeleton

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
