import { getActiveProducts } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";
import type { Product } from "@/lib/types";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function searchProducts(query: string): Product[] {
  const q = normalize(query.trim());
  if (!q) return [];

  return getActiveProducts().filter((product) => {
    const category = getCategoryBySlug(product.categorySlug);
    const subcategory = category?.subcategories.find(
      (s) => s.slug === product.subcategorySlug
    );

    const haystack = [
      product.name,
      product.brand,
      product.description,
      category?.name ?? "",
      subcategory?.name ?? "",
      ...product.variants.flatMap((v) => Object.values(v.attributes)),
    ]
      .join(" ")
      .toLowerCase();

    return normalize(haystack).includes(q);
  });
}
