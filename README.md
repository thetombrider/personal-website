# Tommaso Minuto — personal website

A static Astro portfolio site for [tommasominuto.com](https://tommasominuto.com). Astro keeps the site fast and outputs plain static HTML, while giving the portfolio a component and content structure that can grow into a blog.

## Run locally

```bash
npm install
npm run dev
```

Then visit the local URL shown by Astro.

To create a production build:

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 22 or newer

Then add `tommasominuto.com` under **Custom domains** in the Pages project.

The site is configured as a static Astro build in `astro.config.mjs`. Future blog posts can be added with Astro Content Collections under `src/content/` without introducing a server runtime.
