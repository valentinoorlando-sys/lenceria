import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p05",
    slug: "body-splash-coconut-passion",
    name: "Body Splash Coconut Passion",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-splash",
    description: "Fragancia importada con notas de coco, de larga duración. 250 ml.",
    images: ["/images/products/vs-coconut-passion-splash.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p06",
    slug: "body-lotion-pure-seduction-brulee",
    name: "Body Lotion Pure Seduction Brûlée",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal hidratante importada, aroma Pure Seduction Brûlée. 236 ml.",
    images: ["/images/products/vs-pure-seduction-brulee-lotion.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad", "destacado"],
    active: true,
    variants: [],
  },
  {
    id: "p16",
    slug: "body-splash-velvet-petals-brulee",
    name: "Body Splash Velvet Petals Brûlée",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-splash",
    description: "Fragancia importada floral con notas dulces Brûlée, de larga duración. 250 ml.",
    images: ["/images/products/vs-velvet-petals-brulee-splash.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p17",
    slug: "body-lotion-velvet-petals-brulee",
    name: "Body Lotion Velvet Petals Brûlée",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal hidratante importada, aroma floral Velvet Petals Brûlée. 236 ml.",
    images: ["/images/products/vs-velvet-petals-brulee-lotion.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p18",
    slug: "body-splash-velvet-petals",
    name: "Body Splash Velvet Petals",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-splash",
    description: "Fragancia importada floral Velvet Petals, de larga duración. 250 ml.",
    images: ["/images/products/vs-velvet-petals-splash.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p19",
    slug: "body-lotion-velvet-petals-shimmer",
    name: "Body Lotion Velvet Petals Shimmer",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal con shimmer, aroma floral Velvet Petals. 236 ml.",
    images: ["/images/products/vs-velvet-petals-shimmer-lotion.jpeg"],
    price: 45500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p20",
    slug: "body-lotion-pistachio-creme",
    name: "Body Lotion Pistachio Crème",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal hidratante importada, con notas de vainilla y almizcle. 236 ml.",
    images: ["/images/products/vs-pistachio-creme-lotion.jpeg"],
    price: 44500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p21",
    slug: "body-lotion-pure-seduction-shimmer",
    name: "Body Lotion Pure Seduction Shimmer",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal con shimmer, aroma Pure Seduction. 236 ml.",
    images: ["/images/products/vs-pure-seduction-shimmer-lotion.jpeg"],
    price: 45500,
    stock: 10,
    tags: ["novedad"],
    active: true,
    variants: [],
  },
  {
    id: "p22",
    slug: "crema-345-relief-dr-althea",
    name: "345 Relief Cream",
    brand: "Dr. Althea",
    categorySlug: "skincare-coreano",
    subcategorySlug: "cremas",
    description:
      "Crema gel coreana de textura ligera que hidrata, calma y ayuda a fortalecer la barrera cutánea. Ideal para piel sensible, mixta, grasa o con tendencia a imperfecciones. Con niacinamida, pantenol, ácido hialurónico, centella asiática, madecassoside y ceramida NP. Sin fragancia añadida, fórmula no comedogénica.",
    images: ["/images/products/dr-althea-345-relief-cream.jpeg"],
    price: 90000,
    stock: 8,
    tags: ["novedad", "destacado"],
    active: true,
    variants: [{ id: "v1", attributes: { capacidad: "50 ml" }, stock: 8 }],
  },
];

export function getActiveProducts(): Product[] {
  return products.filter((p) => p.active);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string, subcategorySlug?: string): Product[] {
  return getActiveProducts().filter(
    (p) =>
      p.categorySlug === categorySlug &&
      (!subcategorySlug || p.subcategorySlug === subcategorySlug)
  );
}

export function getFeaturedProducts(limit = 8): Product[] {
  return getActiveProducts()
    .filter((p) => p.tags.includes("destacado"))
    .slice(0, limit);
}

export function getNewProducts(limit = 8): Product[] {
  return getActiveProducts()
    .filter((p) => p.tags.includes("novedad"))
    .slice(0, limit);
}

export function getOfferProducts(limit = 8): Product[] {
  return getActiveProducts()
    .filter((p) => p.tags.includes("oferta"))
    .slice(0, limit);
}

export function getRecommendedProducts(excludeSlug?: string, limit = 4): Product[] {
  return getActiveProducts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}
