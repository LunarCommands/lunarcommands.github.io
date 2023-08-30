import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://lunarcommands.github.io',
	integrations: [svelte(), tailwind(), sitemap()],
	headers: {
		'Cache-Control': 'max-age=31536000'
	}
})
