// biome-ignore assist/source/organizeImports: <explanation>
import { glob } from "astro/loaders";
import fs from "fs";
import { z, defineCollection } from "astro:content";

console.log("reading file");
const path = "D:\Programacion\devfest-page\src\content\talks\dataday.json";
const content = fs.readFileSync(path, "utf-8");
console.log(content);

const talkSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	startDate: z.string(),
	endDate: z.string(),
	speaker: z.string().optional(),
	sponsors: z.array(z.string()).optional(),
	type: z.enum(["talk", "break", "sponsor"]),
	track: z.array(z.string()),
});

const talks = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./talks" }),
	schema: z.object({
		talks: z.array(talkSchema),
	}),
});

export type Talk = z.infer<typeof talkSchema>;

export const collections = {
	talks,
};

// const organizers = defineCollection({
// 	schema: z.object({
// 		name: z.string(),
// 		position: z.string(),
// 		image: z.string(),
// 		url: z.string().url().optional(),
// 		hidden: z.boolean().optional(),
// 	}),
// });

// const sponsors = defineCollection({
// 	schema: z.object({
// 		name: z.string(),
// 		image: z.string(),
// 		url: z.string().url().optional(),
// 		type: z.string(),
// 		category: z.string().optional(),
// 		hidden: z.boolean().optional(),
// 	}),
// });

// const speakers = defineCollection({
// 	schema: z.object({
// 		name: z.string(),
// 		position: z.string(),
// 		image: z.string(),
// 		country: z.string(),
// 		url: z.string().url().optional(),
// 		colorBadge: z.string().optional(),
// 		hidden: z.boolean().optional(),
// 	}),
// });
