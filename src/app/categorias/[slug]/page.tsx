import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getActiveCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

type Params = { slug: string };

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
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<{ subcategoria?: string }>;
}) {
  const { slug } = await params;
  const { subcategoria } = await searchParams;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug, subcategoria);

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
            href={`/categorias/${category.slug}`}
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
              href={`/categorias/${category.slug}?subcategoria=${sub.slug}`}
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

      <ProductGrid products={products} />
    </div>
  );
}
