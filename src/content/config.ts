// biome-ignore assist/source/organizeImports: <explanation>
import { z, defineCollection } from "astro:content";

const organizersCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const sponsorsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
    type: z.string(),
    category: z.string().optional(),
  }),
});

const speakersCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    country: z.string(),
    url: z.string().url().optional(),
    colorBadge: z.string().optional(),
    hidden: z.boolean().optional(),
  }),
});

const talksCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      startDate: z.string(),
      endDate: z.string(),
      speaker: z.string().optional(), // Reference to speaker slug
      sponsors: z.array(z.string()).optional(), // Array of sponsor slugs
      type: z.enum(["talk", "break", "sponsor"]),
      track: z.array(z.string()),
    }),
});

// Export collections
export const collections = {
  organizers: organizersCollection,
  sponsors: sponsorsCollection,
  speakers: speakersCollection,
  talks: talksCollection,
};
