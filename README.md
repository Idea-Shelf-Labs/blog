# Idea Shelf

Big engineering ideas, traced end to end. Built with [Astro](https://astro.build), hosted on GitHub Pages.

Live address (after setup): https://idea-shelf-labs.github.io/blog/

## One-time setup

1. On GitHub, create an **empty** repository `Idea-Shelf-Labs/blog` (no README, no .gitignore, no license).
2. Unzip this folder and, inside it, run:

   ```sh
   git init
   git add .
   git commit -m "Initial Idea Shelf blog"
   git branch -M main
   git remote add origin https://github.com/Idea-Shelf-Labs/blog.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (re-run it if the first run started before step 3). The site appears at https://idea-shelf-labs.github.io/blog/

## Add a new post

1. Make a folder `src/content/blog/<post-slug>/` with an `index.md` and an `images/` folder (or just drop `<post-slug>.md` into `src/content/blog/`).
2. Start the file with:

   ```md
   ---
   title: "Post title"
   description: "One-sentence summary"
   pubDate: 2026-12-01
   heroImage: "./images/hero.png"   # optional, used in the post list and social previews
   ---
   ```

3. Reference images relatively: `![Alt text](./images/chart.png)`.
4. Commit and push to `main`. The site rebuilds in a minute or two. The post lives at `/blog/posts/<post-slug>/`.

## Preview locally (optional)

Needs Node.js 22 or newer.

```sh
npm install
npm run dev      # http://localhost:4321/blog/
```

## Switching to a custom domain later

1. In `astro.config.mjs`, set `site` to your domain (e.g. `'https://ideashelf.example'`) and delete the `base: '/blog'` line.
2. Add a file `public/CNAME` containing only the domain name.
3. In **Settings → Pages → Custom domain**, enter the domain and add the DNS record GitHub shows at your registrar; tick **Enforce HTTPS** once offered.

All internal links and images use Astro's base path, so nothing else needs editing.
