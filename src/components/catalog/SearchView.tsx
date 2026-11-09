"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/search";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";

function SearchInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  function handleChange(value: string) {
    setQuery(value);
    const qs = value.trim() ? `?q=${encodeURIComponent(value.trim())}` : "";
    router.replace(`/buscar${qs}`, { scroll: false });
  }

  const trimmed = query.trim();
  const products = trimmed ? searchProducts(trimmed) : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <label htmlFor="q" className="mb-2 block text-sm font-medium text-ink">
          Buscar productos
        </label>
        <input
          id="q"
          type="search"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
          placeholder="Nombre, marca, fragancia..."
          className="w-full rounded-full border border-cream bg-bone px-5 py-3 text-sm text-ink outline-none focus:border-wine"
        />
      </div>

      {trimmed ? (
        <>
          <CatalogHeader title={`Resultados para "${trimmed}"`} count={products.length} />
          <ProductGrid products={products} />
        </>
      ) : (
        <p className="text-ink/60">Escribí un producto, marca o fragancia para empezar.</p>
      )}
    </div>
  );
}

export function SearchView() {
  return (
    <Suspense fallback={null}>
      <SearchInner />
    </Suspense>
  );
}
