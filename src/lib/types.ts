export type AttributeKey =
  | "talle"
  | "color"
  | "modelo"
  | "aroma"
  | "capacidad"
  | "genero"
  | "tono";

export interface AttributeDefinition {
  key: AttributeKey;
  label: string;
  values: string[];
}

export interface Subcategory {
  slug: string;
  name: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  order: number;
  active: boolean;
  subcategories: Subcategory[];
  attributes: AttributeDefinition[];
}

export interface ProductVariant {
  id: string;
  attributes: Partial<Record<AttributeKey, string>>;
  stock: number;
  sku?: string;
  priceOverride?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  subcategorySlug: string;
  description: string;
  images: string[];
  price: number;
  compareAtPrice?: number;
  stock: number;
  variants: ProductVariant[];
  tags: Array<"novedad" | "oferta" | "destacado" | "combo" | "regalo">;
  active: boolean;
}

export function discountPercent(product: Product): number | null {
  if (!product.compareAtPrice || product.compareAtPrice <= product.price) {
    return null;
  }
  return Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );
}

export function isInStock(product: Product): boolean {
  if (product.variants.length === 0) {
    return product.stock > 0;
  }
  return product.variants.some((variant) => variant.stock > 0);
}
