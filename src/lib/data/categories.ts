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
      { slug: "magnesio", name: "Magnesio" },
    ],
    attributes: [
      {
        key: "aroma",
        label: "Sabor",
        values: ["Neutro", "Frutilla", "Vainilla", "Limón", "Frutos Tropicales", "Multifruta"],
      },
      {
        key: "capacidad",
        label: "Presentación",
        values: ["30 sachets", "150 g", "180 g", "200 g", "300 g"],
      },
    ],
  },
  {
    slug: "victorias-secret",
    name: "Victoria's Secret",
    description: "Body splash, body lotion, less, bralettes y tops importados.",
    image: "victorias-secret",
    order: 2,
    active: true,
    subcategories: [
      { slug: "body-splash", name: "Body Splash" },
      { slug: "body-lotion", name: "Body Lotion" },
      { slug: "less", name: "Less" },
      { slug: "bralettes-tops", name: "Bralettes & Tops" },
    ],
    attributes: [
      { key: "talle", label: "Talle", values: ["XS", "S", "M", "L", "XL", "85"] },
      {
        key: "color",
        label: "Color",
        values: [
          "Negro",
          "Rosa",
          "Blanco",
          "Gris",
          "Topo",
          "Nude",
          "Estampado",
          "Leopardo",
          "Floral Bordo",
          "Corazones",
        ],
      },
      {
        key: "aroma",
        label: "Aroma",
        values: [
          "Coconut Passion",
          "Pure Seduction Brûlée",
          "Pure Seduction Shimmer",
          "Velvet Petals",
          "Velvet Petals Brûlée",
          "Velvet Petals Shimmer",
          "Pistachio Crème",
        ],
      },
      { key: "capacidad", label: "Tamaño", values: ["236 ml", "250 ml"] },
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
      {
        key: "capacidad",
        label: "Tamaño",
        values: ["10 ampollas", "22 g", "34 g", "50 ml", "55 g", "100 ml", "150 ml", "300 ml"],
      },
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
