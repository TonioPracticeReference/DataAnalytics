import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://toniopracticereference.github.io',
  base: '/DataAnalytics/',
  vite: {
    plugins: [tailwindcss()],
  },
});
