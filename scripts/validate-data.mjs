// Verifica la integridad del catálogo de prueba: categorías, subcategorías,
// atributos y variantes bien relacionados entre sí. Se corre a mano
// (node --experimental-strip-types scripts/validate-data.mjs) antes de cargar
// datos nuevos o reales, para detectar errores de carga antes de publicar.
import { categories } from "../src/lib/data/categories.ts";
import { products } from "../src/lib/data/products.ts";

const errors = [];

const categorySlugs = new Set(categories.map((c) => c.slug));
if (categorySlugs.size !== categories.length) errors.push("Hay categorías con slug duplicado.");

for (const category of categories) {
  const subSlugs = new Set(category.subcategories.map((s) => s.slug));
  if (subSlugs.size !== category.subcategories.length) {
    errors.push(`Categoría "${category.slug}": subcategorías con slug duplicado.`);
  }
  const attrKeys = new Set(category.attributes.map((a) => a.key));
  if (attrKeys.size !== category.attributes.length) {
    errors.push(`Categoría "${category.slug}": atributos con key duplicada.`);
  }
}

const productSlugs = new Set();
for (const product of products) {
  const ctx = `Producto "${product.id}" (${product.slug})`;

  if (productSlugs.has(product.slug)) errors.push(`${ctx}: slug duplicado.`);
  productSlugs.add(product.slug);

  const category = categories.find((c) => c.slug === product.categorySlug);
  if (!category) {
    errors.push(`${ctx}: categoría "${product.categorySlug}" no existe.`);
    continue;
  }

  if (!category.subcategories.some((s) => s.slug === product.subcategorySlug)) {
    errors.push(
      `${ctx}: subcategoría "${product.subcategorySlug}" no existe en "${category.slug}".`
    );
  }

  if (product.price <= 0) errors.push(`${ctx}: precio inválido (${product.price}).`);
  if (product.compareAtPrice && product.compareAtPrice <= product.price) {
    errors.push(`${ctx}: compareAtPrice (${product.compareAtPrice}) no es mayor al precio.`);
  }
  if (product.stock < 0) errors.push(`${ctx}: stock negativo.`);

  const categoryAttrKeys = new Set(category.attributes.map((a) => a.key));
  const variantIds = new Set();
  for (const variant of product.variants) {
    if (variantIds.has(variant.id)) errors.push(`${ctx}: variante con id duplicado "${variant.id}".`);
    variantIds.add(variant.id);

    if (variant.stock < 0) errors.push(`${ctx}: variante "${variant.id}" con stock negativo.`);

    for (const [key, value] of Object.entries(variant.attributes)) {
      if (!categoryAttrKeys.has(key)) {
        errors.push(`${ctx}: variante "${variant.id}" usa atributo "${key}" no definido en "${category.slug}".`);
        continue;
      }
      const def = category.attributes.find((a) => a.key === key);
      if (!def.values.includes(value)) {
        errors.push(
          `${ctx}: variante "${variant.id}" usa valor "${value}" no listado para "${key}" en "${category.slug}".`
        );
      }
    }
  }

  // Todas las variantes de un mismo producto deben declarar las mismas claves de atributo.
  if (product.variants.length > 1) {
    const firstKeys = Object.keys(product.variants[0].attributes).sort().join(",");
    for (const variant of product.variants.slice(1)) {
      const keys = Object.keys(variant.attributes).sort().join(",");
      if (keys !== firstKeys) {
        errors.push(`${ctx}: las variantes no comparten el mismo conjunto de atributos.`);
        break;
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} problema(s) encontrado(s):\n`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
} else {
  console.log(`✓ Catálogo válido: ${categories.length} categorías, ${products.length} productos.`);
}
