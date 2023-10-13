import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://lunarcommands.github.io',
  integrations: [svelte(), tailwind(), sitemap(), vue()],
  headers: {
    'Cache-Control': 'max-age=31536000'
  }
});