import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

const sharedSidebar = [
  { text: 'About Encatch', link: '/index' },
  { text: 'Docs feedback', link: '/docs-feedback' },
];

export default defineConfig({
  title: 'Encatch VitePress',
  description: 'VitePress docs example with Encatch page feedback in the footer.',
  cleanUrls: true,

  vite: {
    // Load .env from vitepress-examples/ (not docs/) — see .env.example
    envDir: projectRoot,
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Encatch VitePress',
      description:
        'VitePress docs example with Encatch page feedback in the footer.',
      themeConfig: {
        socialLinks: [
          {
            icon: 'github',
            link: 'https://github.com/get-encatch/vitepress-examples',
          },
        ],
        editLink: {
          pattern:
            'https://github.com/get-encatch/vitepress-examples/edit/main/docs/:path',
        },
        nav: [
          { text: 'About Encatch', link: '/index' },
          { text: 'Docs feedback', link: '/docs-feedback' },
        ],
        sidebar: {
          '/': sharedSidebar,
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
      },
    },
  },
});
