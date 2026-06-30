---
title: Comentarios en la documentación de VitePress
description: Recopila comentarios por página sin salir de tu sitio de documentación.
---

Una buena documentación depende de saber qué páginas ayudan y cuáles confunden a los lectores. Encatch encaja de forma natural al final de una página de VitePress: los lectores permanecen en tu sitio de docs y obtienes comentarios estructurados vinculados a la página que estaban leyendo.

## Obtener el formulario de comentarios

<table>
<tr>
<td>
<p><strong>¿Aún no tienes el formulario de comentarios?</strong></p>
<p>Haz clic en el botón para instalar un formulario de comentarios de documentación listo para usar en tu espacio de Encatch. Crea el formulario combinado de este ejemplo — votos de utilidad, sugerencias de edición e informes de problemas — sin configurarlo manualmente en el editor de formularios.</p>
</td>
<td align="center" width="220">
<a href="https://templates.encatch.com/templates/preview/documentation-frameworks/docs-feedback">
<img src="https://encatch.com/button" alt="Encatch it" height="40">
</a>
</td>
</tr>
</table>

## Qué añade este ejemplo

Cada página de documentación en este repositorio incluye un pie de página con:

- **¿Te resultó útil esta página?** — Sí / No abre el formulario combinado de Encatch con enrutamiento (`page-helpful`), la URL de la página y tu elección (`yes` / `no`) prellenadas.
- **Sugerir ediciones** — Abre el mismo formulario con enrutamiento (`suggest-edit`) y la URL de la página actual prellenada.
- **Reportar un problema** — Abre el mismo formulario con enrutamiento (`raise-issue`) y la URL de la página actual prellenada.

Configura el slug del formulario y los slugs de las preguntas mediante `VITE_ENCATCH_*` en `.env.example`.

## Resumen de la integración

1. **`.env`** — clave publicable y slugs del formulario combinado (desde `.env.example`), o usa el botón de instalación de arriba si necesitas crear el formulario primero.
2. **`docs/.vitepress/theme/encatch.ts`** — inicialización del SDK, variables de entorno y helpers de formularios.
3. **`docs/.vitepress/theme/DocsPageFeedback.vue`** — interfaz del pie de página.
4. **`docs/.vitepress/theme/Layout.vue`** — inicializa Encatch e inyecta el pie de página mediante el slot `doc-footer-before`.
5. **`docs/.vitepress/theme/index.ts`** — extiende el tema predeterminado de VitePress con el layout personalizado.
