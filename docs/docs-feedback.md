---
title: Feedback on VitePress docs
description: Collect page-level feedback without leaving your documentation site.
---

Good documentation depends on knowing which pages help and which ones confuse readers. Encatch fits naturally at the bottom of a VitePress page: readers stay on your docs site, and you get structured feedback tied to the page they were reading.

## What this example adds

Each docs page in this repo includes a footer with:

- **Was this page helpful?** — Yes / No opens the combined Encatch feedback form with routing (`page-helpful`), the page URL, and your choice (`yes` / `no`) prefilled.
- **Suggest edits** — Opens the same form with routing (`suggest-edit`) and the current page URL prefilled.
- **Raise issue** — Opens the same form with routing (`raise-issue`) and the current page URL prefilled.

Configure the form slug and question slugs via `VITE_ENCATCH_*` in `.env.example`.

## Integration overview

1. **`.env`** — publishable key + form slugs (from `.env.example`).
2. **`docs/.vitepress/theme/encatch.ts`** — SDK init, env, and form helpers.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — footer UI.
4. **`docs/.vitepress/theme/Layout.vue`** — init Encatch and inject the footer via the `doc-footer-before` slot.
5. **`docs/.vitepress/theme/index.ts`** — extend the default VitePress theme with the custom layout.
