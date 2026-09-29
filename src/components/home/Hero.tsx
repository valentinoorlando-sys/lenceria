import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { LogoMark } from "@/components/ui/LogoMark";

export function Hero() {
  return (
    <section className="border-b border-cream bg-gradient-to-b from-cream/60 to-bone">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 text-center sm:px-6 sm:py-20">
        <LogoMark size={112} />
        <span className="text-xs uppercase tracking-[0.2em] text-bronze sm:text-sm">
          {siteConfig.tagline}
        </span>
        <h1 className="max-w-xl font-serif text-4xl italic leading-tight text-wine sm:text-6xl">
          Todo lo que amamos, en un solo lugar
        </h1>
        <p className="max-w-md text-ink/70">
          Productos importados, skincare coreano y beauty, seleccionados
          para acompañarte todos los días.
        </p>
        <Link
          href="/categorias/victorias-secret"
          className="mt-2 inline-flex items-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
