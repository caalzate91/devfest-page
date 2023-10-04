import { z, defineCollection } from "astro:content";

const organizers = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const sponsors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
    type: z.string()
  }),
});

const speakers = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
    colorBadge: z.string().optional(),
  }),
});

export const collections = { organizers, sponsors, speakers };
