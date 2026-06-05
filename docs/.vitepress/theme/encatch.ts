import { _encatch } from '@encatch/web-sdk';
import type { Theme } from '@encatch/web-sdk';

/**
 * Encatch Web SDK integration for VitePress docs feedback.
 *
 * Configure via VITE_ENCATCH_* env vars (see .env.example).
 * - initEncatch: call once in the root layout to init the SDK and sync locale.
 * - open*Form: open footer feedback forms with the current page URL prefilled.
 */

/** Ensure `_encatch.init` has run before `showForm` / other SDK calls. */
export function ensureEncatchInitialized(options?: { theme?: Theme }): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  const apiKey = import.meta.env.VITE_ENCATCH_SDK_PUBLISHABLE_KEY?.trim();
  if (!apiKey) {
    console.warn('VITE_ENCATCH_SDK_PUBLISHABLE_KEY is not set or is empty');
    return false;
  }
  if (!_encatch._initialized) {
    try {
      const theme: Theme = options?.theme ?? 'system';
      _encatch.init(apiKey, { theme });
    } catch (error) {
      console.error('Encatch init failed:', error);
      return false;
    }
  }
  return true;
}

/** Sync Encatch form language with the active VitePress locale. */
export function syncEncatchLocale(locale: string): void {
  if (!ensureEncatchInitialized()) {
    return;
  }
  const normalized = locale.trim();
  if (!normalized) {
    return;
  }
  _encatch.setLocale(normalized);
}

function toAbsolutePageUrl(pageUrl: string): string {
  return typeof window !== 'undefined'
    ? new URL(pageUrl, window.location.origin).href
    : pageUrl;
}

export function openHelpfulFeedbackForm(
  pageUrl: string,
  vote: 'yes' | 'no',
  locale?: string,
) {
  const formSlug = import.meta.env.VITE_ENCATCH_HELPFUL_FORM_SLUG?.trim();
  const pageUrlQuestionSlug =
    import.meta.env.VITE_ENCATCH_HELPFUL_PAGE_URL_QUESTION_SLUG?.trim();
  const choiceQuestionSlug =
    import.meta.env.VITE_ENCATCH_HELPFUL_CHOICE_QUESTION_SLUG?.trim();

  if (!formSlug) {
    console.warn('VITE_ENCATCH_HELPFUL_FORM_SLUG is not set or is empty');
    return;
  }
  if (!pageUrlQuestionSlug) {
    console.warn(
      'VITE_ENCATCH_HELPFUL_PAGE_URL_QUESTION_SLUG is not set or is empty',
    );
    return;
  }
  if (!choiceQuestionSlug) {
    console.warn(
      'VITE_ENCATCH_HELPFUL_CHOICE_QUESTION_SLUG is not set or is empty',
    );
    return;
  }
  if (!ensureEncatchInitialized()) {
    return;
  }
  if (locale) {
    syncEncatchLocale(locale);
  }

  _encatch.addToResponse(pageUrlQuestionSlug, toAbsolutePageUrl(pageUrl));
  _encatch.addToResponse(choiceQuestionSlug, vote);
  _encatch.showForm(formSlug);
}

export function openSuggestEditForm(pageUrl: string, locale?: string) {
  const formSlug = import.meta.env.VITE_ENCATCH_SUGGEST_AN_EDIT_FORM_SLUG?.trim();
  const questionSlug =
    import.meta.env.VITE_ENCATCH_SUGGEST_AN_EDIT_QUESTION_SLUG?.trim();

  if (!formSlug) {
    console.warn(
      'VITE_ENCATCH_SUGGEST_AN_EDIT_FORM_SLUG is not set or is empty',
    );
    return;
  }
  if (!questionSlug) {
    console.warn(
      'VITE_ENCATCH_SUGGEST_AN_EDIT_QUESTION_SLUG is not set or is empty',
    );
    return;
  }
  if (!ensureEncatchInitialized()) {
    return;
  }
  if (locale) {
    syncEncatchLocale(locale);
  }

  _encatch.addToResponse(questionSlug, toAbsolutePageUrl(pageUrl));
  _encatch.showForm(formSlug);
}

export function openRaiseIssueForm(pageUrl: string, locale?: string) {
  const formSlug = import.meta.env.VITE_ENCATCH_RAISE_ISSUE_FORM_SLUG?.trim();
  const questionSlug =
    import.meta.env.VITE_ENCATCH_RAISE_ISSUE_QUESTION_SLUG?.trim();

  if (!formSlug) {
    console.warn(
      'VITE_ENCATCH_RAISE_ISSUE_FORM_SLUG is not set or is empty',
    );
    return;
  }
  if (!questionSlug) {
    console.warn(
      'VITE_ENCATCH_RAISE_ISSUE_QUESTION_SLUG is not set or is empty',
    );
    return;
  }
  if (!ensureEncatchInitialized()) {
    return;
  }
  if (locale) {
    syncEncatchLocale(locale);
  }

  _encatch.addToResponse(questionSlug, toAbsolutePageUrl(pageUrl));
  _encatch.showForm(formSlug);
}

export function initEncatch(locale: string): void {
  ensureEncatchInitialized();
  syncEncatchLocale(locale);
}
