# VitePress example with Encatch docs feedback

Sample VitePress docs site with Encatch page feedback in the footer (English + Spanish).

[![Encatch it](https://encatch.com/button)](https://templates.encatch.com/templates/preview/documentation-frameworks/docs-feedback)

Install the preconfigured documentation feedback form — helpful votes, suggest edits, and issue reports with logic jumps — in one click.

## Setup

```bash
pnpm install
```

Copy `.env.example` → `.env` and set your Encatch publishable key and combined form slug / question slugs.

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

1. **`.env`** — publishable key + combined form slug and question slugs (from `.env.example`).
2. **`docs/.vitepress/theme/encatch.ts`** — SDK init, env, and form helpers.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — footer UI.
4. **`docs/.vitepress/theme/Layout.vue`** — init Encatch and inject the footer via the `doc-footer-before` slot.
5. **`docs/.vitepress/theme/index.ts`** — extend the default VitePress theme.

### Environment variables

All Encatch variables use the `VITE_` prefix (Vite convention):

- `VITE_ENCATCH_SDK_PUBLISHABLE_KEY`
- `VITE_ENCATCH_DOCUMENTATION_FEEDBACK_FORM_SLUG` — combined feedback form
- `VITE_ENCATCH_FEEDBACK_TYPE_QUESTION_SLUG` — logic-jump routing question
- `VITE_ENCATCH_PAGE_URL_QUESTION_SLUG` — page URL prefill
- `VITE_ENCATCH_HELPFUL_CHOICE_QUESTION_SLUG` — yes/no prefill for helpful flow

See `.env.example` for the full list.
