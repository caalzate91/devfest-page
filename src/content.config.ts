import { type CollectionEntry, defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const talkSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().optional(),
	startDate: z.string(),
	endDate: z.string(),
	// speaker: z.string().optional(),
	// position: z.string().optional(),
	descripion: z.string().optional(),
	// speakerImage: z.string().optional(),
	speakers: z.array(
			z.object({
				name: z.string(),
				image: z.string().optional(),
				position: z.string().optional(),
				description: z.string().optional(),
			})
		).optional(),
	sponsors: z.array(z.string()).optional(),
	type: z.enum(["talk", "break", "sponsor"]),
	track: z.array(z.string()),
});

const talks = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "src/content/talks" }),
	schema: z.object({
		talks: z.array(talkSchema),
	}),
});

export type Talk = z.infer<typeof talkSchema>;
export type TalkEntry = CollectionEntry<"talks">;

const organizers = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/organizers" }),
	schema: z.object({
		name: z.string(),
		position: z.string(),
		image: z.string(),
		url: z.string().url().optional(),
		hidden: z.boolean().optional(),
	}),
});

const sponsors = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/sponsors" }),
	schema: z.object({
		name: z.string(),
		image: z.string(),
		url: z.string().url().optional(),
		type: z.string(),
		category: z.string().optional(),
		hidden: z.boolean().optional(),
	}),
});

export const collections = {
	talks,
	organizers,
	sponsors
};

