import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getRecommendedProducts, getActiveProducts } from "@/lib/data/products";
import { formatPrice, siteConfig, transferPrice } from "@/lib/config";
import { discountPercent, isInStock } from "@/lib/types";
import { ProductGallery } from "@/components/product/ProductGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { ProductSection } from "@/components/home/ProductSection";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getActiveProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/productos/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || !product.active) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const subcategory = category?.subcategories.find((s) => s.slug === product.subcategorySlug);
  const discount = discountPercent(product);

  const variantAttributeKeys = Array.from(
    new Set(product.variants.flatMap((v) => Object.keys(v.attributes)))
  );
  const attributeDefs = (category?.attributes ?? []).filter((def) =>
    variantAttributeKeys.includes(def.key)
  );

  const recommended = getRecommendedProducts(product.slug, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    category: category?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: siteConfig.currency.code,
      price: product.price,
      availability: isInStock(product)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://${siteConfig.domain}/productos/${product.slug}`,
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
        <Link href="/" className="hover:text-wine">
          Inicio
        </Link>
        <span>/</span>
        {category && (
          <Link href={`/categorias/${category.slug}`} className="hover:text-wine">
            {category.name}
          </Link>
        )}
        {subcategory && (
          <>
            <span>/</span>
            <span className="text-ink/70">{subcategory.name}</span>
          </>
        )}
      </nav>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <ProductGallery name={product.name} images={product.images} />

        <div>
          <p className="text-xs uppercase tracking-wide text-ink/50">{product.brand}</p>
          <h1 className="mt-1 font-serif text-3xl italic text-ink sm:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-2xl font-medium text-wine">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-lg text-ink/40 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
                <span className="rounded-full bg-wine px-2.5 py-1 text-xs font-medium text-cream">
                  -{discount}%
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-sm text-bronze">
            {formatPrice(transferPrice(product.price))} pagando por transferencia
          </p>

          <p className="mt-4 text-ink/70">{product.description}</p>

          <div className="mt-6 border-t border-cream pt-6">
            <VariantSelector product={product} attributeDefs={attributeDefs} />
          </div>
        </div>
      </div>

      <ProductSection title="También te puede interesar" products={recommended} />
    </div>
  );
}
