import type { AttributeKey, Product } from "@/lib/types";
import { isInStock } from "@/lib/types";

export interface CategoryFilters {
  subcategoria?: string;
  attributes: Partial<Record<AttributeKey, string[]>>;
  maxPrice?: number;
  onlyAvailable?: boolean;
}

export const PRICE_BUCKETS = [15000, 30000, 50000];

export function filterCategoryProducts(products: Product[], filters: CategoryFilters): Product[] {
  return products.filter((product) => {
    if (filters.subcategoria && product.subcategorySlug !== filters.subcategoria) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.onlyAvailable && !isInStock(product)) return false;

    for (const [key, values] of Object.entries(filters.attributes)) {
      if (!values || values.length === 0) continue;
      const matches = product.variants.some((variant) =>
        values.includes(variant.attributes[key as AttributeKey] ?? "")
      );
      if (!matches) return false;
    }

    return true;
  });
}

function toSingleValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function parseMultiParam(value: string | string[] | undefined): string[] {
  const single = toSingleValue(value);
  return single ? single.split(",").filter(Boolean) : [];
}

/** Construye el href alternando un valor dentro de una lista separada por comas en la URL. */
export function buildToggleHref(
  pathname: string,
  currentParams: Record<string, string | string[] | undefined>,
  key: string,
  value: string
): string {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(currentParams)) {
    const single = toSingleValue(v);
    if (single) params.set(k, single);
  }

  const current = parseMultiParam(currentParams[key]);
  const next = current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];

  if (next.length > 0) {
    params.set(key, next.join(","));
  } else {
    params.delete(key);
  }

  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

/** Construye el href fijando (o quitando, si ya está activo) un valor único de un parámetro. */
export function buildSingleHref(
  pathname: string,
  currentParams: Record<string, string | string[] | undefined>,
  key: string,
  value: string
): string {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(currentParams)) {
    const single = toSingleValue(v);
    if (single) params.set(k, single);
  }

  if (toSingleValue(currentParams[key]) === value) {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}
