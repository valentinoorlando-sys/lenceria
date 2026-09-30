import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "beauty",
    name: "Beauty",
    description: "Colágeno, proteína, hair skin nails y matcha.",
    image: "beauty",
    order: 1,
    active: true,
    subcategories: [
      { slug: "colageno", name: "Colágeno" },
      { slug: "proteina", name: "Proteína" },
      { slug: "hair-skin-nails", name: "Hair Skin Nails" },
      { slug: "matcha", name: "Matcha" },
    ],
    attributes: [
      { key: "aroma", label: "Sabor", values: ["Neutro", "Frutilla", "Vainilla", "Limón"] },
      { key: "capacidad", label: "Presentación", values: ["30 sachets", "150 g", "300 g"] },
    ],
  },
  {
    slug: "victorias-secret",
    name: "Victoria's Secret",
    description: "Body splash, body lotion, bombachas, corpiños y tops importados.",
    image: "victorias-secret",
    order: 2,
    active: true,
    subcategories: [
      { slug: "body-splash", name: "Body Splash" },
      { slug: "body-lotion", name: "Body Lotion" },
      { slug: "bombachas", name: "Bombachas" },
      { slug: "corpinos", name: "Corpiños" },
      { slug: "top", name: "Top" },
    ],
    attributes: [
      { key: "talle", label: "Talle", values: ["S", "M", "L", "XL"] },
      { key: "color", label: "Color", values: ["Negro", "Rosa", "Blanco", "Estampado"] },
      { key: "aroma", label: "Aroma", values: ["Coconut Passion", "Pure Seduction", "Love Spell", "Bare Vanilla"] },
      { key: "capacidad", label: "Tamaño", values: ["250 ml", "414 ml"] },
    ],
  },
  {
    slug: "set-de-regalo",
    name: "Set de Regalo",
    description: "Cajitas armadas, listas para regalar.",
    image: "set-de-regalo",
    order: 3,
    active: true,
    subcategories: [{ slug: "cajitas", name: "Cajitas" }],
    attributes: [],
  },
  {
    slug: "skincare-coreano",
    name: "Skincare Coreano",
    description: "Cremas, tónicos, limpiadores y mascarillas de skincare coreano.",
    image: "skincare-coreano",
    order: 4,
    active: true,
    subcategories: [
      { slug: "cremas", name: "Cremas" },
      { slug: "tonicos", name: "Tónicos" },
      { slug: "limpiadores", name: "Limpiadores" },
      { slug: "mascarillas", name: "Mascarillas" },
    ],
    attributes: [
      { key: "capacidad", label: "Tamaño", values: ["50 ml", "55 g", "100 ml", "150 ml", "300 ml"] },
    ],
  },
  {
    slug: "skincare-nacional",
    name: "Skincare Nacional",
    description: "Cremas y mascarillas de marcas nacionales.",
    image: "skincare-nacional",
    order: 5,
    active: true,
    subcategories: [
      { slug: "cremas", name: "Cremas" },
      { slug: "mascarillas", name: "Mascarillas" },
    ],
    attributes: [{ key: "capacidad", label: "Tamaño", values: ["14 ml", "50 ml", "100 ml"] }],
  },
];

export function getActiveCategories(): Category[] {
  return categories.filter((c) => c.active).sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
