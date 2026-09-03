import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getActiveCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { buildSingleHref, filterCategoryProducts } from "@/lib/filters";
import type { AttributeKey } from "@/lib/types";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { FilterPanel } from "@/components/catalog/FilterPanel";

type Params = { slug: string };
type SearchParams = Record<string, string | string[] | undefined>;

export function generateStaticParams(): Params[] {
  return getActiveCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/categorias/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const subcategoria = Array.isArray(sp.subcategoria) ? sp.subcategoria[0] : sp.subcategoria;
  const precio = Array.isArray(sp.precio) ? sp.precio[0] : sp.precio;

  const attributeFilters: Partial<Record<AttributeKey, string[]>> = {};
  for (const def of category.attributes) {
    const raw = sp[def.key];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (value) attributeFilters[def.key] = value.split(",").filter(Boolean);
  }

  const clearSubcategoriaParams = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) {
    if (k === "subcategoria") continue;
    const value = Array.isArray(v) ? v[0] : v;
    if (value) clearSubcategoriaParams.set(k, value);
  }
  const clearSubcategoriaQs = clearSubcategoriaParams.toString();
  const clearSubcategoriaHref = `/categorias/${category.slug}${clearSubcategoriaQs ? `?${clearSubcategoriaQs}` : ""}`;

  const allProducts = getProductsByCategory(category.slug);
  const products = filterCategoryProducts(allProducts, {
    subcategoria,
    attributes: attributeFilters,
    maxPrice: precio ? Number(precio) : undefined,
    onlyAvailable: sp.disponible === "1",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <CatalogHeader
        title={category.name}
        description={category.description}
        count={products.length}
      />

      {category.subcategories.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <Link
            href={clearSubcategoriaHref}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              !subcategoria
                ? "border-wine bg-wine text-cream"
                : "border-cream text-ink/70 hover:border-wine hover:text-wine"
            }`}
          >
            Todo
          </Link>
          {category.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              href={buildSingleHref(`/categorias/${category.slug}`, sp, "subcategoria", sub.slug)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                subcategoria === sub.slug
                  ? "border-wine bg-wine text-cream"
                  : "border-cream text-ink/70 hover:border-wine hover:text-wine"
              }`}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}

      <div className="lg:flex lg:items-start lg:gap-8">
        <FilterPanel category={category} currentParams={sp} />
        <div className="min-w-0 flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
