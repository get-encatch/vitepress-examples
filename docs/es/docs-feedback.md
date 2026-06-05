---
title: Comentarios en la documentación de VitePress
description: Recopila comentarios por página sin salir de tu sitio de documentación.
---

Una buena documentación depende de saber qué páginas ayudan y cuáles confunden a los lectores. Encatch encaja de forma natural al final de una página de VitePress: los lectores permanecen en tu sitio de docs y obtienes comentarios estructurados vinculados a la página que estaban leyendo.

## Qué añade este ejemplo

Cada página de documentación en este repositorio incluye un pie de página con:

- **¿Te resultó útil esta página?** — Sí / No abre un formulario de Encatch con la URL de la página y tu elección (`yes` / `no`) prellenadas (configura `VITE_ENCATCH_HELPFUL_*` en `.env.example`).
- **Sugerir ediciones** — Abre un formulario de Encatch con la URL de la página actual prellenada (configura las variables `VITE_ENCATCH_*` en `.env.example`).
- **Reportar un problema** — Abre un formulario de Encatch con la URL de la página actual prellenada (configura las variables `VITE_ENCATCH_*` en `.env.example`).

## Resumen de la integración

1. **`.env`** — clave publicable y slugs de formularios (desde `.env.example`).
2. **`docs/.vitepress/theme/encatch.ts`** — inicialización del SDK, variables de entorno y helpers de formularios.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — interfaz del pie de página.
4. **`docs/.vitepress/theme/Layout.vue`** — inicializa Encatch e inyecta el pie de página mediante el slot `doc-footer-before`.
5. **`docs/.vitepress/theme/index.ts`** — extiende el tema predeterminado de VitePress con el layout personalizado.
