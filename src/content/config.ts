// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    description: z.string(),
    author: z.enum(["Filip Wolski"]),
    image: z.object({
        src: z.string(),
        alt: z.string()}),
    tags: z.array(z.enum(["astro", "tailwindcss", "django", "nuxt3", "react", "next", "vue", "svelte"]))
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blog,
};