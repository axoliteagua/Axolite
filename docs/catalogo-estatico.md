# Catálogo estático de Axolite

El catálogo funciona sin backend. Para publicar un producto:

1. Coloca su imagen en `src/assets/images/products/`.
2. Abre `src/app/services/product.service.ts`.
3. Agrega un objeto al arreglo `products` con `id`, `name`, `description`, `imageUrl` y `features`.
4. Usa una ruta como `assets/images/products/nombre-del-archivo.jpg`.
5. Haz commit y push a `main`. GitHub Actions compilará y publicará el sitio en GitHub Pages.

Cada tarjeta genera un enlace `wa.me` con el nombre del producto. No hay carrito, pagos ni inventario remoto: la disponibilidad, el precio y los detalles se confirman en WhatsApp.
