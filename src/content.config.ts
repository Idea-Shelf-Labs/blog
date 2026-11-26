import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Link to the lab card this post is written from (Idea-Shelf-Labs/idea-shelf).
			ideaId: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/).optional(),
			cardVersion: z.string().optional(),
			tags: z.array(z.string()).default([]),
			patterns: z.array(z.string()).default([]),
			evidence: z.enum(['untested', 'test-specified', 'testing', 'result-in', 'rejected']).optional(),
			// Draft posts are left out of production builds (see src/lib/posts.ts).
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
