<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vitepress';
import { useData } from 'vitepress';
import {
  openHelpfulFeedbackForm,
  openRaiseIssueForm,
  openSuggestEditForm,
} from './encatch';

const route = useRoute();
const { lang } = useData();

const vote = ref<'yes' | 'no' | null>(null);

const pageUrl = computed(() => route.path);
const locale = computed(() => lang.value);

const translations = {
  helpfulQuestion: 'Was this page helpful?',
  yes: 'Yes',
  no: 'No',
  suggestEdits: 'Suggest edits',
  raiseIssue: 'Raise issue',
} as const;

const t = computed(() => translations);

function handleVote(next: 'yes' | 'no') {
  const newVote = vote.value === next ? null : next;
  vote.value = newVote;
  if (newVote) {
    openHelpfulFeedbackForm(pageUrl.value, newVote, locale.value);
  }
}
</script>

<template>
  <div class="docs-page-feedback">
    <div class="docs-page-feedback__row">
      <div class="docs-page-feedback__group">
        <p class="docs-page-feedback__question">{{ t.helpfulQuestion }}</p>
        <div class="docs-page-feedback__actions">
          <button
            type="button"
            class="docs-page-feedback__pill"
            :class="{ 'docs-page-feedback__pill--active': vote === 'yes' }"
            :aria-pressed="vote === 'yes'"
            @click="handleVote('yes')"
          >
            <span class="docs-page-feedback__icon" aria-hidden="true">👍</span>
            <span>{{ t.yes }}</span>
          </button>
          <button
            type="button"
            class="docs-page-feedback__pill"
            :class="{ 'docs-page-feedback__pill--active': vote === 'no' }"
            :aria-pressed="vote === 'no'"
            @click="handleVote('no')"
          >
            <span class="docs-page-feedback__icon" aria-hidden="true">👎</span>
            <span>{{ t.no }}</span>
          </button>
        </div>
      </div>
      <div class="docs-page-feedback__actions">
        <button
          type="button"
          class="docs-page-feedback__pill"
          @click="openSuggestEditForm(pageUrl, locale)"
        >
          <span class="docs-page-feedback__icon" aria-hidden="true">✎</span>
          <span>{{ t.suggestEdits }}</span>
        </button>
        <button
          type="button"
          class="docs-page-feedback__pill"
          @click="openRaiseIssueForm(pageUrl, locale)"
        >
          <span class="docs-page-feedback__icon" aria-hidden="true">!</span>
          <span>{{ t.raiseIssue }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
