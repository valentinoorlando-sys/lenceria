import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p01",
    slug: "conjunto-encaje-bianca",
    name: "Conjunto de encaje Bianca",
    brand: "Fratelli",
    categorySlug: "lenceria",
    subcategorySlug: "conjuntos",
    description:
      "Conjunto de corpiño y bombacha en encaje francés, con detalles de moño. Copa con leve relleno.",
    images: [],
    price: 34999,
    stock: 12,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Negro" }, stock: 4 },
      { id: "v2", attributes: { talle: "M", color: "Negro" }, stock: 5 },
      { id: "v3", attributes: { talle: "L", color: "Negro" }, stock: 0 },
      { id: "v4", attributes: { talle: "M", color: "Rojo" }, stock: 3 },
    ],
  },
  {
    id: "p02",
    slug: "corpino-push-up-valentina",
    name: "Corpiño push-up Valentina",
    brand: "Fratelli",
    categorySlug: "lenceria",
    subcategorySlug: "corpinos",
    description: "Corpiño push-up con realce natural, breteles regulables y espalda cruzada.",
    images: [],
    price: 21999,
    compareAtPrice: 26999,
    stock: 18,
    tags: ["oferta"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "85", color: "Negro" }, stock: 5 },
      { id: "v2", attributes: { talle: "90", color: "Negro" }, stock: 6 },
      { id: "v3", attributes: { talle: "95", color: "Piel" }, stock: 0 },
      { id: "v4", attributes: { talle: "100", color: "Piel" }, stock: 4 },
    ],
  },
  {
    id: "p03",
    slug: "body-encaje-noor",
    name: "Body de encaje Noor",
    brand: "Fratelli",
    categorySlug: "lenceria",
    subcategorySlug: "bodys",
    description: "Body de encaje elástico con broches inferiores y escote profundo en V.",
    images: [],
    price: 28999,
    stock: 9,
    tags: ["novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Negro" }, stock: 3 },
      { id: "v2", attributes: { talle: "M", color: "Negro" }, stock: 4 },
      { id: "v3", attributes: { talle: "L", color: "Negro" }, stock: 2 },
    ],
  },
  {
    id: "p04",
    slug: "pijama-saten-luna",
    name: "Pijama satén Luna",
    brand: "Fratelli",
    categorySlug: "lenceria",
    subcategorySlug: "pijamas",
    description: "Conjunto de pijama en satén: musculosa con breteles finos y short a juego.",
    images: [],
    price: 25999,
    stock: 14,
    tags: [],
    active: true,
    variants: [
      { id: "v1", attributes: { talle: "S", color: "Vino" }, stock: 4 },
      { id: "v2", attributes: { talle: "M", color: "Vino" }, stock: 5 },
      { id: "v3", attributes: { talle: "L", color: "Vino" }, stock: 3 },
      { id: "v4", attributes: { talle: "XL", color: "Vino" }, stock: 2 },
    ],
  },
  {
    id: "p05",
    slug: "body-splash-sweet-vanilla",
    name: "Body Splash Sweet Vanilla",
    brand: "Aura",
    categorySlug: "body-splash",
    subcategorySlug: "body-splash",
    description: "Fragancia dulce y envolvente con notas de vainilla y flor de azahar.",
    images: [],
    price: 12999,
    stock: 25,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { capacidad: "250 ml" }, stock: 15 },
      { id: "v2", attributes: { capacidad: "450 ml" }, stock: 10 },
    ],
  },
  {
    id: "p06",
    slug: "body-mist-fresh-cotton",
    name: "Body Mist Fresh Cotton",
    brand: "Aura",
    categorySlug: "body-splash",
    subcategorySlug: "body-mist",
    description: "Mist liviano de algodón fresco, ideal para uso diario.",
    images: [],
    price: 9999,
    compareAtPrice: 12499,
    stock: 30,
    tags: ["oferta", "novedad"],
    active: true,
    variants: [{ id: "v1", attributes: { capacidad: "200 ml" }, stock: 30 }],
  },
  {
    id: "p07",
    slug: "set-body-splash-flores-blancas",
    name: "Set Body Splash Flores Blancas",
    brand: "Aura",
    categorySlug: "body-splash",
    subcategorySlug: "sets",
    description: "Set de 3 body splash de 75 ml con aroma floral, presentación ideal para regalo.",
    images: [],
    price: 17999,
    stock: 10,
    tags: ["combo", "regalo"],
    active: true,
    variants: [],
  },
  {
    id: "p08",
    slug: "perfume-rose-noir",
    name: "Perfume Rosé Noir",
    brand: "Maison Aveline",
    categorySlug: "perfumes",
    subcategorySlug: "eau-de-parfum",
    description: "Eau de parfum femenino con notas de rosa negra, pimienta rosa y almizcle.",
    images: [],
    price: 54999,
    stock: 8,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { genero: "Femenino", capacidad: "30 ml" }, stock: 4 },
      { id: "v2", attributes: { genero: "Femenino", capacidad: "50 ml" }, stock: 4 },
      { id: "v3", attributes: { genero: "Femenino", capacidad: "100 ml" }, stock: 0 },
    ],
  },
  {
    id: "p09",
    slug: "perfume-golden-oud",
    name: "Perfume Golden Oud",
    brand: "Maison Aveline",
    categorySlug: "perfumes",
    subcategorySlug: "eau-de-toilette",
    description: "Eau de toilette unisex amaderada, con oud, vainilla y ámbar.",
    images: [],
    price: 47999,
    stock: 11,
    tags: ["novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { genero: "Unisex", capacidad: "50 ml" }, stock: 6 },
      { id: "v2", attributes: { genero: "Unisex", capacidad: "100 ml" }, stock: 5 },
    ],
  },
  {
    id: "p10",
    slug: "crema-karite-almendras",
    name: "Crema corporal Karité & Almendras",
    brand: "Doux",
    categorySlug: "cuidado-corporal",
    subcategorySlug: "cremas",
    description: "Crema de hidratación profunda con manteca de karité y aceite de almendras.",
    images: [],
    price: 11499,
    stock: 22,
    tags: [],
    active: true,
    variants: [
      { id: "v1", attributes: { aroma: "Karité", capacidad: "200 ml" }, stock: 12 },
      { id: "v2", attributes: { aroma: "Karité", capacidad: "400 ml" }, stock: 10 },
    ],
  },
  {
    id: "p11",
    slug: "aceite-argan-dorado",
    name: "Aceite corporal Argán Dorado",
    brand: "Doux",
    categorySlug: "cuidado-corporal",
    subcategorySlug: "aceites",
    description: "Aceite seco de argán de rápida absorción, con brillo satinado no graso.",
    images: [],
    price: 13999,
    compareAtPrice: 16999,
    stock: 16,
    tags: ["oferta"],
    active: true,
    variants: [{ id: "v1", attributes: { aroma: "Argán", capacidad: "150 ml" }, stock: 16 }],
  },
  {
    id: "p12",
    slug: "cartera-de-mano-milan",
    name: "Cartera de mano Milán",
    brand: "Fratelli",
    categorySlug: "accesorios",
    subcategorySlug: "carteras",
    description: "Cartera de mano en cuero ecológico con cadena removible.",
    images: [],
    price: 32999,
    stock: 7,
    tags: ["destacado"],
    active: true,
    variants: [
      { id: "v1", attributes: { color: "Negro", modelo: "Cuero ecológico" }, stock: 4 },
      { id: "v2", attributes: { color: "Camel", modelo: "Cuero ecológico" }, stock: 3 },
    ],
  },
  {
    id: "p13",
    slug: "vincha-de-seda-grace",
    name: "Vincha de seda Grace",
    brand: "Fratelli",
    categorySlug: "accesorios",
    subcategorySlug: "vinchas",
    description: "Vincha ancha de seda, suave al tacto y apta para todo tipo de cabello.",
    images: [],
    price: 8999,
    stock: 20,
    tags: ["novedad"],
    active: true,
    variants: [
      { id: "v1", attributes: { color: "Negro", modelo: "Seda" }, stock: 7 },
      { id: "v2", attributes: { color: "Beige", modelo: "Seda" }, stock: 7 },
      { id: "v3", attributes: { color: "Bordo", modelo: "Seda" }, stock: 6 },
    ],
  },
  {
    id: "p14",
    slug: "combo-ritual-de-mimos",
    name: "Combo Ritual de Mimos",
    brand: "Fratelli",
    categorySlug: "combos",
    subcategorySlug: "kits-regalo",
    description:
      "Crema corporal Karité & Almendras + Body Splash Sweet Vanilla + Vincha de seda Grace.",
    images: [],
    price: 29999,
    compareAtPrice: 37997,
    stock: 15,
    tags: ["combo", "oferta"],
    active: true,
    variants: [],
  },
  {
    id: "p15",
    slug: "kit-fratelli-signature",
    name: "Kit Fratelli Signature",
    brand: "Fratelli",
    categorySlug: "combos",
    subcategorySlug: "combos-fragancias",
    description: "Perfume Golden Oud 50 ml + Body Mist Fresh Cotton, en estuche de regalo.",
    images: [],
    price: 52999,
    stock: 6,
    tags: ["combo", "regalo", "destacado"],
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

export function getProductsByCategory(categorySlug: string): Product[] {
  return getActiveProducts().filter((p) => p.categorySlug === categorySlug);
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

export function getComboProducts(limit = 8): Product[] {
  return getActiveProducts()
    .filter((p) => p.tags.includes("combo"))
    .slice(0, limit);
}

export function getRecommendedProducts(excludeSlug?: string, limit = 4): Product[] {
  return getActiveProducts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}
