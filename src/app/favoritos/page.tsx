import type { Metadata } from "next";
import { FavoritesView } from "@/components/product/FavoritesView";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Los productos que guardaste para más tarde.",
};

export default function FavoritosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 font-serif text-3xl italic text-ink sm:text-4xl">Mis favoritos</h1>
      <FavoritesView />
    </div>
  );
}
