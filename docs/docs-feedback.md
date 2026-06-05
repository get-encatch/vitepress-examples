---
title: Feedback on VitePress docs
description: Collect page-level feedback without leaving your documentation site.
---

Good documentation depends on knowing which pages help and which ones confuse readers. Encatch fits naturally at the bottom of a VitePress page: readers stay on your docs site, and you get structured feedback tied to the page they were reading.

## What this example adds

Each docs page in this repo includes a footer with:

- **Was this page helpful?** — Yes / No opens an Encatch form with the page URL and your choice (`yes` / `no`) prefilled (configure via `VITE_ENCATCH_HELPFUL_*` in `.env.example`).
- **Suggest edits** — Opens an Encatch form with the current page URL prefilled (configure via `VITE_ENCATCH_*` env vars in `.env.example`).
- **Raise issue** — Opens an Encatch form with the current page URL prefilled (configure via `VITE_ENCATCH_*` env vars in `.env.example`).

## Integration overview

1. **`.env`** — publishable key + form slugs (from `.env.example`).
2. **`docs/.vitepress/theme/encatch.ts`** — SDK init, env, and form helpers.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — footer UI.
4. **`docs/.vitepress/theme/Layout.vue`** — init Encatch and inject the footer via the `doc-footer-before` slot.
5. **`docs/.vitepress/theme/index.ts`** — extend the default VitePress theme with the custom layout.
