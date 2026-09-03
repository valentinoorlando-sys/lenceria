import type { Metadata } from "next";
import { getFeaturedProducts } from "@/lib/data/products";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Destacados",
  description: "Nuestra selección de productos destacados.",
};

export default function DestacadosPage() {
  const products = getFeaturedProducts(100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <CatalogHeader
        title="Destacados"
        description="Nuestra selección de productos favoritos."
        count={products.length}
      />
      <ProductGrid products={products} />
    </div>
  );
}
