import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // El optimizador de imágenes de Next.js genera, por cada foto, hasta 13
    // variantes distintas (un tamaño/calidad/formato por cada combinación
    // posible), y cada una cuenta aparte como "Fast Origin Transfer". Con
    // bots pasando por todas las páginas, eso multiplica el consumo muchas
    // veces. Al desactivarlo, cada foto se sirve tal cual el único archivo
    // que ya está optimizado en /public/images, servido como estático desde
    // el CDN — mucho más barato y resistente a tráfico de bots, aunque se
    // pierde el ajuste automático de tamaño por dispositivo.
    unoptimized: true,
  },
};

export default nextConfig;
