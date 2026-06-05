# VitePress example with Encatch docs feedback

Sample VitePress docs site with Encatch page feedback in the footer (English + Spanish).

## Setup

```bash
pnpm install
```

Copy `.env.example` → `.env` and set your Encatch publishable key and form slugs.

**Publishable key:** [admin.encatch.com](https://admin.encatch.com) → **Settings** → **Publishable key**.

## Run

```bash
pnpm dev
```

| Locale | URL |
|--------|-----|
| English | http://localhost:3000/ |
| Spanish | http://localhost:3000/es/ |

## Build

```bash
pnpm build
pnpm preview
```

## Encatch integration

This example uses the same pattern as the Fumadocs examples:

1. **`.env`** — publishable key + form slugs (from `.env.example`).
2. **`docs/.vitepress/theme/encatch.ts`** — SDK init, env, and form helpers.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — footer UI.
4. **`docs/.vitepress/theme/Layout.vue`** — init Encatch and inject the footer via the `doc-footer-before` slot.
5. **`docs/.vitepress/theme/index.ts`** — extend the default VitePress theme.

### Environment variables

All Encatch variables use the `VITE_` prefix (Vite convention):

- `VITE_ENCATCH_SDK_PUBLISHABLE_KEY`
- `VITE_ENCATCH_HELPFUL_*` — helpful vote form
- `VITE_ENCATCH_SUGGEST_AN_EDIT_*` — suggest edits form
- `VITE_ENCATCH_RAISE_ISSUE_*` — raise issue form

See `.env.example` for the full list.
