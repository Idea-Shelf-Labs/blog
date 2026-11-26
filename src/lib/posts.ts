import { type CollectionEntry, getCollection } from 'astro:content';

/**
 * Posts that may appear on the site. A post with `draft: true` is never built in a
 * production build: it gets no page, no list entry, no RSS item and no sitemap entry.
 * `npm run dev` still shows drafts so they can be previewed locally.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) => !import.meta.env.PROD || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
