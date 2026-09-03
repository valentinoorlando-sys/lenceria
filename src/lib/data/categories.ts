import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "lenceria",
    name: "Lencería",
    description: "Conjuntos, corpiños, bodys y pijamas.",
    image: "lenceria",
    order: 1,
    active: true,
    subcategories: [
      { slug: "conjuntos", name: "Conjuntos" },
      { slug: "corpinos", name: "Corpiños" },
      { slug: "bombachas", name: "Bombachas" },
      { slug: "bodys", name: "Bodys" },
      { slug: "pijamas", name: "Pijamas" },
      { slug: "otros", name: "Otros" },
    ],
    attributes: [
      { key: "talle", label: "Talle", values: ["85", "90", "95", "100", "S", "M", "L", "XL"] },
      { key: "color", label: "Color", values: ["Negro", "Rojo", "Piel", "Vino", "Blanco"] },
      { key: "modelo", label: "Modelo", values: ["Encaje", "Algodón", "Satén"] },
    ],
  },
  {
    slug: "body-splash",
    name: "Body Splash",
    description: "Body splash, body mist y sets de fragancias.",
    image: "body-splash",
    order: 2,
    active: true,
    subcategories: [
      { slug: "body-splash", name: "Body Splash" },
      { slug: "body-mist", name: "Body Mist" },
      { slug: "sets", name: "Sets" },
    ],
    attributes: [
      { key: "aroma", label: "Aroma", values: ["Vainilla", "Flores Blancas", "Algodón", "Frutal"] },
      { key: "capacidad", label: "Tamaño", values: ["75 ml", "200 ml", "250 ml", "450 ml"] },
    ],
  },
  {
    slug: "perfumes",
    name: "Perfumes",
    description: "Perfumes, eau de parfum y eau de toilette.",
    image: "perfumes",
    order: 3,
    active: true,
    subcategories: [
      { slug: "perfumes", name: "Perfumes" },
      { slug: "eau-de-parfum", name: "Eau de Parfum" },
      { slug: "eau-de-toilette", name: "Eau de Toilette" },
    ],
    attributes: [
      { key: "genero", label: "Género", values: ["Femenino", "Masculino", "Unisex"] },
      { key: "capacidad", label: "Tamaño", values: ["30 ml", "50 ml", "100 ml"] },
    ],
  },
  {
    slug: "cuidado-corporal",
    name: "Cuidado Corporal",
    description: "Cremas, aceites, exfoliantes y productos corporales.",
    image: "cuidado-corporal",
    order: 4,
    active: true,
    subcategories: [
      { slug: "cremas", name: "Cremas" },
      { slug: "aceites", name: "Aceites" },
      { slug: "exfoliantes", name: "Exfoliantes" },
      { slug: "productos-corporales", name: "Productos Corporales" },
    ],
    attributes: [
      { key: "aroma", label: "Aroma", values: ["Karité", "Almendras", "Argán", "Coco"] },
      { key: "capacidad", label: "Tamaño", values: ["150 ml", "200 ml", "400 ml"] },
    ],
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    description: "Carteras, neceseres, vinchas y accesorios de cabello.",
    image: "accesorios",
    order: 5,
    active: true,
    subcategories: [
      { slug: "carteras", name: "Carteras" },
      { slug: "neceseres", name: "Neceseres" },
      { slug: "vinchas", name: "Vinchas" },
      { slug: "accesorios-cabello", name: "Accesorios de Cabello" },
      { slug: "otros", name: "Otros" },
    ],
    attributes: [
      { key: "color", label: "Color", values: ["Negro", "Camel", "Beige", "Bordo"] },
      { key: "modelo", label: "Modelo", values: ["Cuero ecológico", "Seda", "Textil"] },
    ],
  },
  {
    slug: "belleza",
    name: "Belleza",
    description: "Maquillaje y cuidado facial y capilar.",
    image: "belleza",
    order: 6,
    active: true,
    subcategories: [
      { slug: "maquillaje", name: "Maquillaje" },
      { slug: "cuidado-facial", name: "Cuidado Facial" },
      { slug: "cuidado-capilar", name: "Cuidado Capilar" },
    ],
    attributes: [{ key: "tono", label: "Tono", values: ["Claro", "Medio", "Oscuro"] }],
  },
  {
    slug: "combos",
    name: "Combos y Kits",
    description: "Combinaciones armadas a precio especial.",
    image: "combos",
    order: 7,
    active: true,
    subcategories: [
      { slug: "combos-lenceria", name: "Combos de Lencería" },
      { slug: "combos-fragancias", name: "Combos de Fragancias" },
      { slug: "kits-regalo", name: "Kits de Regalo" },
    ],
    attributes: [],
  },
  {
    slug: "regalos",
    name: "Regalos",
    description: "Ideas y sets pensados para regalar.",
    image: "regalos",
    order: 8,
    active: true,
    subcategories: [
      { slug: "sets-de-regalo", name: "Sets de Regalo" },
      { slug: "para-ella", name: "Para Ella" },
    ],
    attributes: [],
  },
];

export function getActiveCategories(): Category[] {
  return categories.filter((c) => c.active).sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
