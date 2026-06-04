# TechZone — Tienda de Tecnología

Aplicación web moderna con React Router, Vite y Tailwind CSS.

## 🚀 Instalación y uso

```bash
npm install
npm run dev
```

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home: Hero, Destacados, Catálogo con búsqueda/filtros, Beneficios, Testimonios |
| `/producto/:slug` | Detalle de producto: galería de imágenes, descripción, ficha técnica, highlights, relacionados |

### Slugs disponibles
- `macbook-pro-14-m3-pro`
- `asus-rog-zephyrus-g14`
- `dell-xps-15-oled`
- `lenovo-thinkpad-x1-carbon`
- `iphone-15-pro-max`
- `samsung-galaxy-s24-ultra`
- `google-pixel-8-pro`
- `xiaomi-14-ultra`
- `nvidia-rtx-4090-fe`
- `amd-ryzen-9-7950x`
- `samsung-990-pro-2tb`
- `sony-wh-1000xm5`
- `logitech-mx-keys-s`
- `lg-ultragear-27gp950`
- `airpods-pro-2da-gen`

## 📦 Stack
- React 18 + React Router DOM 6
- Vite 5
- Tailwind CSS 3
- Google Fonts (Syne + DM Sans + JetBrains Mono)

## 💬 WhatsApp
Cada producto genera: `https://wa.me/5491123456789?text=Hola,%20me%20interesa%20el%20producto%20[NOMBRE]...`

Para cambiar el número editá `WHATSAPP_NUMBER` en `src/data/products.js`.
