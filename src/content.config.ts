import { z, defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'

const organizers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/organizers' }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
})

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/sponsors' }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
    type: z.string(),
    category: z.string().optional(),
  }),
})

const speakers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/speakers' }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    country: z.string(),
    url: z.string().url().optional(),
    colorBadge: z.string().optional(),
    hidden: z.boolean().optional(),
  }),
})

const talks = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    speaker: z.string().optional(),
    sponsors: z.array(z.string()).optional(),
    type: z.enum(['talk', 'break', 'sponsor']),
    track: z.array(z.string()),
  }),
})

export const collections = { organizers, sponsors, speakers, talks }
