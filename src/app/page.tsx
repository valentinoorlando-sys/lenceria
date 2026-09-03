import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-bronze">
        {siteConfig.tagline}
      </p>
      <h1 className="mt-4 font-serif text-5xl italic text-wine sm:text-6xl">
        {siteConfig.brandName}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink/70">
        Estamos preparando la tienda. Identidad visual y estructura del
        proyecto listas — el catálogo llega en la próxima etapa.
      </p>
    </section>
  );
}
