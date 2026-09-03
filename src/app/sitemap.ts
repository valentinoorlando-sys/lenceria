import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getActiveCategories } from "@/lib/data/categories";
import { getActiveProducts } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/ofertas`, priority: 0.7 },
    { url: `${base}/novedades`, priority: 0.7 },
    { url: `${base}/destacados`, priority: 0.7 },
    { url: `${base}/buscar`, priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getActiveCategories().map((c) => ({
    url: `${base}/categorias/${c.slug}`,
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = getActiveProducts().map((p) => ({
    url: `${base}/productos/${p.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
