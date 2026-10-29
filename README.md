# Dynamic Advance – sitio web (resumen moderno)

Abre `index.html` en el navegador. No necesita instalación ni servidor.

## Estructura
- `index.html` – contenido de la página
- `css/styles.css` – estilos (tema claro/oscuro, responsivo)
- `js/main.js` – menú hamburguesa, cambio de tema y de idioma (ES/EN)
- `assets/img/` – imágenes de fondo (hero, servicios, CRM)
- `assets/video/` – video de fondo (no se usa ahora; ver abajo)

## Notas
- Idioma: el texto en inglés está en el diccionario `D` de `js/main.js`.
- Tema e idioma se guardan en el navegador (localStorage).
- Para usar el video en la portada, agrega dentro de `<header class="herobg">`:
  `<video autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"><source src="assets/video/fondo_digital_interactivo.mp4" type="video/mp4"></video>`
