<script setup lang="ts">
import { watch } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import DocsPageFeedback from './DocsPageFeedback.vue';
import { initEncatch } from './encatch';

const { lang } = useData();

watch(
  lang,
  (locale) => {
    initEncatch(locale);
  },
  { immediate: true },
);
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <DocsPageFeedback />
    </template>
  </DefaultTheme.Layout>
</template>
