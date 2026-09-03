import { siteConfig } from "@/lib/config";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream bg-cream/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-ink/70">{siteConfig.tagline}</p>
          <p className="text-sm text-ink/70">{siteConfig.location}</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-serif text-base text-ink">Ayuda</p>
          <p className="text-ink/70">Envíos a todo el país</p>
          <p className="text-ink/70">Cambios y devoluciones</p>
          <p className="text-ink/70">Preguntas frecuentes</p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-serif text-base text-ink">Seguinos</p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-ink/70 transition-colors hover:text-wine"
          >
            Instagram @{siteConfig.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-cream px-4 py-4 text-center text-xs text-ink/50 sm:px-6">
        © {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
