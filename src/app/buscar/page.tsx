import type { Metadata } from "next";
import { searchProducts } from "@/lib/search";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscá productos por nombre, marca, categoría o fragancia.",
};

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const products = query ? searchProducts(query) : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <form action="/buscar" method="get" className="mb-8">
        <label htmlFor="q" className="mb-2 block text-sm font-medium text-ink">
          Buscar productos
        </label>
        <div className="flex gap-2">
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={query}
            autoFocus
            placeholder="Nombre, marca, fragancia..."
            className="w-full rounded-full border border-cream bg-bone px-5 py-3 text-sm text-ink outline-none focus:border-wine"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
          >
            Buscar
          </button>
        </div>
      </form>

      {query ? (
        <>
          <CatalogHeader title={`Resultados para "${query}"`} count={products.length} />
          <ProductGrid products={products} />
        </>
      ) : (
        <p className="text-ink/60">Escribí un producto, marca o fragancia para empezar.</p>
      )}
    </div>
  );
}
