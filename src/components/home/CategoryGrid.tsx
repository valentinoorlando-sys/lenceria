import Link from "next/link";
import { getActiveCategories } from "@/lib/data/categories";

export function CategoryGrid() {
  const categories = getActiveCategories();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-6 font-serif text-2xl italic text-ink sm:text-3xl">Categorías</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categorias/${category.slug}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-cream bg-bone p-4 text-center transition-shadow hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cream to-wine/15 transition-transform group-hover:scale-105">
              <span className="font-serif text-xl italic text-wine/60">
                {category.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-ink">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
