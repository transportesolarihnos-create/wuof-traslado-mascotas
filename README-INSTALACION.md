# WUOF! — Rediseño v1

Paquete de reemplazo de los archivos principales para el sitio estático existente en Cloudflare Pages.

## Archivos incluidos
- `index.html`
- `styles.css`
- `script.js`
- `sitemap.xml`
- carpeta `imagenes-traslados/` (8 fotos optimizadas en WebP)

## Importante: no reemplazar el repositorio entero
Este ZIP **no contiene los recursos de imágenes existentes**. Extraé estos archivos y copiá/sobrescribí los cuatro archivos indicados en la raíz del repositorio y copiá también la carpeta `imagenes-traslados/` completa. Conservá `hero.png`, `hero2.png`, `hero3.png`, `hero4.png`, las demás imágenes, `robots.txt` y cualquier otra configuración existente.

La nueva portada usa `hero2.png`, que ya existe en el repositorio. Antes de publicar, confirmá que esa imagen sea la que querés mostrar como foto principal y que el texto alternativo describa fielmente su contenido. Si la imagen no es una foto real del vehículo/mascota, reemplazala por una foto propia y optimizada.

## Pasos recomendados
1. En GitHub, abrí el repositorio y creá una rama `redisenio-v1` o una copia/backup del estado actual.
2. Sobrescribí solo los cuatro archivos incluidos.
3. Revisá la vista previa o el deployment de prueba de Cloudflare Pages.
4. Verificá en móvil y escritorio que la imagen `hero2.png` carga, que todos los botones abren el WhatsApp correcto y que los textos coinciden con el servicio real.
5. Probá el etiquetado con Google Tag Assistant antes de publicar definitivamente.
6. Cuando esté validado, fusioná los cambios a `main`.

## WhatsApp y Google Ads
- Número encontrado en el código actual: `+54 341 228-8085` (`https://wa.me/543412288085`).
- Se conserva el ID de Google Ads `AW-17179407943` y la etiqueta de conversión `Vd4JCInghocdEMfs4_8_`.
- Se conserva GA4 `G-V765G25Z3Q` y se añade el evento de analítica `whatsapp_click`.
- El clic es una señal de contacto, no prueba de que el usuario envió un mensaje ni contrató un viaje.
- El código incluye un fallback para abrir WhatsApp si el callback de medición no responde.

No cambiar ni crear una nueva acción de conversión en Google Ads hasta comprobar con Tag Assistant que la etiqueta actual se dispara una sola vez. En Google Ads, la conversión de clic en WhatsApp debe seguir como la acción principal que ya habías definido; el evento analítico y el clic saliente no deben sumarse como conversiones primarias duplicadas.

## SEO
El sitemap contiene solo la URL de inicio porque esta versión es una landing page de una sola página con secciones. No agregues URLs al sitemap hasta crear páginas reales en esas rutas. `robots.txt` existente se conserva.


## Galería y reseñas
- La galería usa ocho fotos seleccionadas y optimizadas a WebP.
- Se incorporan ocho tarjetas con reseñas y enlaces individuales a Google Maps, según las capturas compartidas. Revisá la transcripción antes de publicar para corregir cualquier detalle de puntuación o texto que quieras conservar literalmente.
- El enlace general de opiniones abre la ficha de Google Maps compartida.
- No se muestra una puntuación promedio ni cantidad total de reseñas porque no se verificaron esos datos.
