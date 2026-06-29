// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://charcoles-hub.github.io',
  base: '/demo-veterinaria-manada',
  vite: { plugins: [tailwindcss()] },
});
