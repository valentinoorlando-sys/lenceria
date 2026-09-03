import type { Metadata } from "next";
import { getOfferProducts } from "@/lib/data/products";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Ofertas",
  description: "Productos con descuento por tiempo limitado.",
};

export default function OfertasPage() {
  const products = getOfferProducts(100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <CatalogHeader
        title="Ofertas"
        description="Descuentos por tiempo limitado en productos seleccionados."
        count={products.length}
      />
      <ProductGrid products={products} />
    </div>
  );
}
