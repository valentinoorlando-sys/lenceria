import type { Metadata } from "next";
import { SearchView } from "@/components/catalog/SearchView";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscá productos por nombre, marca, categoría o fragancia.",
};

export default function BuscarPage() {
  return <SearchView />;
}
