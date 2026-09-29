import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p01",
    slug: "colageno-hidrolizado-neutro",
    name: "Colágeno Hidrolizado",
    brand: "Beauty Import",
    categorySlug: "beauty",
    subcategorySlug: "colageno",
    description: "Colágeno hidrolizado en polvo, apto para mezclar con agua, jugo o batidas.",
    images: [],
    price: 18999,
    stock: 20,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { aroma: "Neutro", capacidad: "150 g" }, stock: 10 },
      { id: "v2", attributes: { aroma: "Neutro", capacidad: "300 g" }, stock: 10 },
    ],
  },
  {
    id: "p02",
    slug: "proteina-vegana-vainilla",
    name: "Proteína Vegana",
    brand: "Beauty Import",
    categorySlug: "beauty",
    subcategorySlug: "proteina",
    description: "Proteína vegana en polvo, ideal para después de entrenar o como snack saciante.",
    images: [],
    price: 24999,
    compareAtPrice: 28999,
    stock: 14,
    tags: ["oferta"],
    active: true,
    variants: [
      { id: "v1", attributes: { aroma: "Vainilla", capacidad: "300 g" }, stock: 8 },
      { id: "v2", attributes: { aroma: "Frutilla", capacidad: "300 g" }, stock: 6 },
    ],
  },
  {
    id: "p03",
    slug: "hair-skin-nails-capsulas",
    name: "Hair Skin Nails",
    brand: "Beauty Import",
    categorySlug: "beauty",
    subcategorySlug: "hair-skin-nails",
    description: "Suplemento en cápsulas para el crecimiento y fortalecimiento de pelo, piel y uñas.",
    images: [],
    price: 21999,
    stock: 16,
    tags: ["novedad", "destacado"],
    active: true,
    variants: [{ id: "v1", attributes: { capacidad: "30 sachets" }, stock: 16 }],
  },
  {
    id: "p04",
    slug: "matcha-ceremonial",
    name: "Matcha Ceremonial",
    brand: "Beauty Import",
    categorySlug: "beauty",
    subcategorySlug: "matcha",
    description: "Matcha en polvo de grado ceremonial, para preparar en casa como en la cafetería.",
    images: [],
    price: 15999,
    stock: 18,
    tags: ["novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { capacidad: "150 g" }, stock: 10 },
      { id: "v2", attributes: { capacidad: "300 g" }, stock: 8 },
    ],
  },
  {
    id: "p05",
    slug: "body-splash-coconut-passion",
    name: "Body Splash Coconut Passion",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-splash",
    description: "Fragancia importada con notas de coco y vainilla, de larga duración.",
    images: ["/images/products/vs-body-splash-group.jpg"],
    price: 27999,
    stock: 15,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { aroma: "Coconut Passion", capacidad: "250 ml" }, stock: 15 },
    ],
  },
  {
    id: "p06",
    slug: "body-lotion-pure-seduction",
    name: "Body Lotion Pure Seduction",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "body-lotion",
    description: "Crema corporal hidratante importada, con el clásico aroma Pure Seduction.",
    images: ["/images/products/vs-pure-seduction-set.jpg"],
    price: 29999,
    compareAtPrice: 34999,
    stock: 12,
    tags: ["oferta"],
    active: true,
    variants: [
      { id: "v1", attributes: { aroma: "Pure Seduction", capacidad: "414 ml" }, stock: 12 },
    ],
  },
  {
    id: "p07",
    slug: "bombacha-basica-vs",
    name: "Bombacha Básica",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "bombachas",
    description: "Bombacha de algodón suave, corte clásico.",
    images: [],
    price: 12999,
    stock: 24,
    tags: ["novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Negro" }, stock: 6 },
      { id: "v2", attributes: { talle: "M", color: "Negro" }, stock: 8 },
      { id: "v3", attributes: { talle: "M", color: "Rosa" }, stock: 5 },
      { id: "v4", attributes: { talle: "L", color: "Rosa" }, stock: 0 },
    ],
  },
  {
    id: "p08",
    slug: "corpino-push-up-vs",
    name: "Corpiño Push-Up",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "corpinos",
    description: "Corpiño push-up importado, con realce natural y breteles regulables.",
    images: [],
    price: 45999,
    stock: 10,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Negro" }, stock: 3 },
      { id: "v2", attributes: { talle: "M", color: "Negro" }, stock: 4 },
      { id: "v3", attributes: { talle: "M", color: "Blanco" }, stock: 3 },
      { id: "v4", attributes: { talle: "L", color: "Blanco" }, stock: 0 },
    ],
  },
  {
    id: "p09",
    slug: "top-deportivo-vs",
    name: "Top Deportivo",
    brand: "Victoria's Secret",
    categorySlug: "victorias-secret",
    subcategorySlug: "top",
    description: "Top deportivo con sujeción media, ideal para entrenar o para el día a día.",
    images: [],
    price: 32999,
    compareAtPrice: 38999,
    stock: 13,
    tags: ["oferta", "novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Estampado" }, stock: 4 },
      { id: "v2", attributes: { talle: "M", color: "Estampado" }, stock: 5 },
      { id: "v3", attributes: { talle: "L", color: "Negro" }, stock: 4 },
    ],
  },
  {
    id: "p10",
    slug: "cajita-sorpresa-beauty",
    name: "Cajita Sorpresa Beauty",
    brand: "Fratelli",
    categorySlug: "set-de-regalo",
    subcategorySlug: "cajitas",
    description:
      "Body splash + crema coreana + mascarilla, armados en una cajita lista para regalar.",
    images: [],
    price: 34999,
    compareAtPrice: 42997,
    stock: 15,
    tags: ["regalo", "oferta", "destacado"],
    active: true,
    variants: [],
  },
  {
    id: "p11",
    slug: "cajita-sorpresa-vs",
    name: "Cajita Sorpresa Victoria's Secret",
    brand: "Fratelli",
    categorySlug: "set-de-regalo",
    subcategorySlug: "cajitas",
    description: "Body lotion + body splash Victoria's Secret, en estuche de regalo.",
    images: [],
    price: 46999,
    stock: 9,
    tags: ["regalo"],
    active: true,
    variants: [],
  },
  {
    id: "p12",
    slug: "crema-snail-96",
    name: "Crema Snail 96",
    brand: "Skin1004",
    categorySlug: "skincare-coreano",
    subcategorySlug: "cremas",
    description: "Crema coreana con 96% de mucina de caracol, hidratación profunda y reparadora.",
    images: [],
    price: 19999,
    stock: 20,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { capacidad: "50 ml" }, stock: 12 },
      { id: "v2", attributes: { capacidad: "100 ml" }, stock: 8 },
    ],
  },
  {
    id: "p13",
    slug: "crema-centella-asiatica",
    name: "Crema Centella Asiática",
    brand: "Purito",
    categorySlug: "skincare-coreano",
    subcategorySlug: "cremas",
    description: "Crema calmante con centella asiática, ideal para piel sensible.",
    images: [],
    price: 17999,
    compareAtPrice: 21999,
    stock: 17,
    tags: ["oferta"],
    active: true,
    variants: [{ id: "v1", attributes: { capacidad: "50 ml" }, stock: 17 }],
  },
  {
    id: "p14",
    slug: "mascarilla-pdrn-medicube",
    name: "Mascarilla PDRN Pink Vita Coating",
    brand: "Medicube",
    categorySlug: "skincare-coreano",
    subcategorySlug: "mascarillas",
    description: "Mascarilla coreana PDRN, con efecto coating para hidratación y luminosidad.",
    images: ["/images/products/medicube-pdrn-skincare.jpg"],
    price: 14999,
    stock: 22,
    tags: ["novedad"],
    active: true,
    variants: [{ id: "v1", attributes: { capacidad: "50 ml" }, stock: 22 }],
  },
  {
    id: "p15",
    slug: "mascarilla-hidrogel",
    name: "Mascarilla Hidrogel",
    brand: "Skin1004",
    categorySlug: "skincare-coreano",
    subcategorySlug: "mascarillas",
    description: "Mascarilla hidrogel en hoja, efecto calmante e iluminador inmediato.",
    images: [],
    price: 6999,
    stock: 30,
    tags: ["novedad"],
    active: true,
    variants: [],
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
