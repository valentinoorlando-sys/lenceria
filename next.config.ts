import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // El sitio nunca necesita renderizar fotos de producto más grandes que esto
    // (galería a pantalla completa en una notebook grande). Los valores por
    // defecto de Next.js incluyen 2560 y 3840, pensados para fondos de pantalla
    // a resolución 4K/8K, que acá solo generaban variantes enormes sin uso real.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
