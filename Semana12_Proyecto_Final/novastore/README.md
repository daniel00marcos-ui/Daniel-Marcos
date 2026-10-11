# NovaStore — Tienda virtual React + Vite (semana 12)

Tienda de demostración desarrollada con React, Vite, React Router y CSS responsive. **No existe cobro, servidor, autenticación ni entrega real**.

## Requisitos
- Node.js compatible con Vite 7 (20.19+ o 22.12+).
- Visual Studio Code.

## Ejecutar
1. Descomprime el ZIP y abre `novastore` con VS Code.
2. En Terminal > Nueva terminal ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre la URL indicada (normalmente http://localhost:5173).
4. Para generar la compilación ejecuta `npm run build`.

## Funciones
- Página principal con productos destacados y categorías.
- Catálogo con búsqueda, filtros por categoría y ordenamiento.
- Detalle del producto y selección de cantidad.
- Favoritos, carrito, actualización/eliminación y límites de existencias.
- Formulario de pedido de demostración e historial local.
- Persistencia con localStorage sin backend.

## Organización
- `src/App.jsx`: páginas y estados React (`useState`, `useEffect`, `useMemo`).
- `src/components/`: cabecera, pie y tarjeta reutilizable.
- `src/data/products.js`: catálogo de ejemplo (precios referenciales, sin venta real).
- `src/utils/storage.js`: utilidades de localStorage.
- `src/styles.css`: estilos y diseño móvil.

## Demostración al docente
1. En Productos buscar `mouse` y cambiar los filtros.
2. Abrir un producto, añadirlo a Favoritos y al Carrito.
3. Modificar cantidades y finalizar la compra simulada.
4. Revisar Mis pedidos, recargar y observar que persisten los datos.

Las imágenes del catálogo se cargan de Unsplash y necesitan internet; el resto del proyecto puede ejecutarse localmente tras instalar dependencias.
