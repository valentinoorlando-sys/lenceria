import { Logo } from "@/components/ui/Logo";

const NAV_ITEMS = [
  { label: "Lencería", href: "/categorias/lenceria" },
  { label: "Body Splash", href: "/categorias/body-splash" },
  { label: "Perfumes", href: "/categorias/perfumes" },
  { label: "Cuidado Corporal", href: "/categorias/cuidado-corporal" },
  { label: "Accesorios", href: "/categorias/accesorios" },
  { label: "Belleza", href: "/categorias/belleza" },
  { label: "Combos", href: "/categorias/combos" },
  { label: "Ofertas", href: "/categorias/ofertas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cream bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden flex-1 justify-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-wine"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Buscar"
            className="rounded-full p-2 text-ink transition-colors hover:bg-cream"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Ver carrito"
            className="relative rounded-full p-2 text-ink transition-colors hover:bg-cream"
          >
            <CartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path
        d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21" r="1.4" />
      <circle cx="18" cy="21" r="1.4" />
    </svg>
  );
}
