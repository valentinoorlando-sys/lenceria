import Link from "next/link";

export function CatalogHeader({
  title,
  description,
  count,
}: {
  title: string;
  description?: string;
  count: number;
}) {
  return (
    <div className="mb-6">
      <nav className="mb-2 text-xs text-ink/50">
        <Link href="/" className="hover:text-wine">
          Inicio
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink/70">{title}</span>
      </nav>
      <h1 className="font-serif text-3xl italic text-ink sm:text-4xl">{title}</h1>
      {description && <p className="mt-2 max-w-2xl text-ink/70">{description}</p>}
      <p className="mt-1 text-sm text-ink/50">
        {count} {count === 1 ? "producto" : "productos"}
      </p>
    </div>
  );
}
