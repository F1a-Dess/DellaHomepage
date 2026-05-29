# Prompt: Create a minimalist and modern footer component for a Nuxt 3 app using Tailwind CSS

## Goal
Build a `<Footer />` Vue 3 component using `<script setup>` syntax and Tailwind CSS styling for use in a Nuxt 3 project. The footer should be **clean, centered, responsive**, and follow a **minimalist** design approach.

## Technologies
- Nuxt 3
- Vue 3 Composition API with `<script setup>`
- Tailwind CSS (no external styles or scoped CSS)
- No JavaScript logic required unless absolutely necessary.

## Design Requirements
- Use the semantic `<footer>` HTML tag.
- The background should be **very dark**, e.g., `bg-neutral-950` or `bg-gray-900`.
- Text should be in **gray** tones, like `text-gray-400` or `text-gray-500` for a soft, elegant appearance.
- Content should be **center-aligned** (`text-center`) and sit **at the bottom of the page**.
- Padding should be **vertical** (`py-6`, `sm:py-8`, `lg:py-10`) and allow breathing space across screen sizes.
- Include a **horizontal line** (`border-t border-white/10`) above the footer text as a visual divider.
- The entire component should be **mobile-first** and adjust gracefully on tablets and desktop.
- Avoid logos, social links, or extra content — keep it extremely **simple and focused**.

## Footer Content
- Place this text in the center of the footer: "Copyright 2023 Your Company Name. All rights reserved."

## Output Format
- Output the full `Footer.vue` single-file component.
- Use `<template>` and `<script setup>` blocks.
- Do not include any external styles.
- Use proper indentation and clean, readable Tailwind utility classes.

## Example Structure

```vue
<template>
<footer class="bg-neutral-950 text-gray-400 text-center py-6 sm:py-8 lg:py-10 border-t border-white/10">
  <p class="text-sm">
    © 2025 PT DELLA FADHIL ANUGERAH. All rights reserved.
  </p>
</footer>
</template>

<script setup>
// no logic needed
</script>

## Final Notes

-Keep the design ultra clean.

-Must match the tone of a professional corporate or portfolio website.

-No unnecessary divs or complexity.

-save the file in components folder named Footer.vue

-save it as layout then put it in the /layouts/default.vue
