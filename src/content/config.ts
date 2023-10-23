import { z, defineCollection, reference } from "astro:content";

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
    type: z.string(),
    category: z.string().optional()
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

const talks = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    speaker: reference('speakers').optional(),
    sponsors: z.array(reference('sponsors')).optional(),
    type: z.enum(["talk", "break", "sponsor"]),
    track: z.array(z.string()),
  }),
});

export const collections = { organizers, sponsors, speakers, talks };
