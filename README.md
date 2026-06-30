# VitePress example with Encatch docs feedback

Sample VitePress docs site with Encatch page feedback in the footer (English + Spanish).

<table>
<tr>
<td>
<p><strong>Don't have the feedback form yet?</strong></p>
<p>Click the button to install a ready-made documentation feedback form in your Encatch workspace. It creates the combined form used in this example — helpful votes, suggest edits, and issue reports — with no manual form builder setup.</p>
</td>
<td align="center" width="220">
<a href="https://templates.encatch.com/templates/preview/documentation-frameworks/docs-feedback">
<img src="https://encatch.com/button" alt="Encatch it" height="40">
</a>
</td>
</tr>
</table>

## Setup

```bash
pnpm install
```

**Option A — Install the form:** use the button above if you need the feedback form created in Encatch.

**Option B — Wire this site:** copy `.env.example` → `.env` and set your publishable key and form slugs (if you already have the form).

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
