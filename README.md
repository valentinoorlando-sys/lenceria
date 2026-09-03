# Fratelli — tienda online

Tienda online de Fratelli (@fratellistore.ok): lencería, body splash,
perfumes, cuidado corporal, accesorios, belleza, combos y regalos. Pedidos
sin pasarela de pago, cerrados por WhatsApp.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Hosting previsto: [Vercel](https://vercel.com) (plan gratuito)

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Configuración de marca

Todo lo editable sin tocar lógica (número de WhatsApp, Instagram, dominio,
moneda) vive en `src/lib/config.ts`.

## Estructura

- `src/app` — páginas (rutas de Next.js).
- `src/components/layout` — header, footer, botón de WhatsApp.
- `src/components/ui` — piezas de UI reutilizables (logo, etc.).
- `src/lib/config.ts` — configuración editable del negocio.
- `src/lib/types.ts` — modelo de datos: categorías, atributos, productos y
  variantes. Pensado para que agregar categorías/subcategorías no requiera
  tocar el resto del sitio, y para poder migrar el origen de los datos
  (archivos → CMS/base de datos) sin rehacer la interfaz.

## Estado del proyecto

Etapa 3 completa: proyecto creado, identidad visual (paleta, tipografía,
logo) y arquitectura de datos definidas. El catálogo de productos de
prueba y las páginas de categoría llegan en las próximas etapas.
