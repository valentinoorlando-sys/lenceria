"use client";

import Link from "next/link";
import { useFavorites } from "@/lib/favorites/context";
import { getActiveProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FavoritesView() {
  const { ids } = useFavorites();
  const products = getActiveProducts().filter((p) => ids.includes(p.id));

  if (products.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-ink/60">
          Todavía no tenés favoritos. Tocá el corazón en cualquier producto para guardarlo acá.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
