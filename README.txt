# JBMath React Site (sin build)
Sitio en **React + Tailwind (CDN)** listo para subir a **GitHub Pages**.
- Ruteo por **hash**: `#/` y `#/categoria/<slug>`
- Carga datos desde `videos.json`
- Búsqueda global, categorías, **paginación** en página de categoría y **modal** con reproductor.

## Editar videos
1. Abre `videos.json` y sustituye `id` por el **ID de YouTube** (lo que va tras `v=`).
2. Cambia `title` y `category`. Repite o agrega entradas.

## Publicar en GitHub Pages
1. Crea un repositorio y sube `index.html` y `videos.json` a la raíz (rama `main`).
2. En *Settings → Pages*, selecciona `Deploy from a branch`, branch `main`, carpeta `/root`.
3. Visita `https://TU_USUARIO.github.io/TU_REPO/`.

> Al usar **hash routing** no necesitas configuración especial de 404.
