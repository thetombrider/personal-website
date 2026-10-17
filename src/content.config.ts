import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    titleAccent: z.string(),
    eyebrow: z.string(),
    period: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    url: z.string().url(),
    visualCaption: z.string(),
    visual: z.enum(['ridge', 'orin']),
  }),
})

export const collections = { projects }
