import type { Metadata } from "next";
import { getNewProducts } from "@/lib/data/products";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Los últimos productos en llegar a Fratelli.",
};

export default function NovedadesPage() {
  const products = getNewProducts(100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <CatalogHeader
        title="Novedades"
        description="Lo último en llegar a la tienda."
        count={products.length}
      />
      <ProductGrid products={products} />
    </div>
  );
}
