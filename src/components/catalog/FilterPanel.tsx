import type { Category } from "@/lib/types";
import { formatPrice } from "@/lib/config";
import { PRICE_BUCKETS, buildSingleHref, buildToggleHref, parseMultiParam } from "@/lib/filters";

type SearchParams = Record<string, string | string[] | undefined>;

function FilterGroups({
  category,
  currentParams,
}: {
  category: Category;
  currentParams: SearchParams;
}) {
  const pathname = `/categorias/${category.slug}`;
  const activePrice = Array.isArray(currentParams.precio)
    ? currentParams.precio[0]
    : currentParams.precio;
  const availableOnly = currentParams.disponible === "1";

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Disponibilidad</p>
        <a
          href={buildSingleHref(pathname, currentParams, "disponible", "1")}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
            availableOnly
              ? "border-wine bg-wine text-cream"
              : "border-cream text-ink/70 hover:border-wine hover:text-wine"
          }`}
        >
          Solo disponibles
        </a>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Precio</p>
        <div className="flex flex-wrap gap-2">
          {PRICE_BUCKETS.map((bucket) => (
            <a
              key={bucket}
              href={buildSingleHref(pathname, currentParams, "precio", String(bucket))}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                activePrice === String(bucket)
                  ? "border-wine bg-wine text-cream"
                  : "border-cream text-ink/70 hover:border-wine hover:text-wine"
              }`}
            >
              Hasta {formatPrice(bucket)}
            </a>
          ))}
        </div>
      </div>

      {category.attributes.map((def) => {
        const selected = parseMultiParam(currentParams[def.key]);
        return (
          <div key={def.key}>
            <p className="mb-2 text-sm font-medium text-ink">{def.label}</p>
            <div className="flex flex-wrap gap-2">
              {def.values.map((value) => {
                const isSelected = selected.includes(value);
                return (
                  <a
                    key={value}
                    href={buildToggleHref(pathname, currentParams, def.key, value)}
                    className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                      isSelected
                        ? "border-wine bg-wine text-cream"
                        : "border-cream text-ink/70 hover:border-wine hover:text-wine"
                    }`}
                  >
                    {value}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FilterPanel({
  category,
  currentParams,
}: {
  category: Category;
  currentParams: SearchParams;
}) {
  return (
    <>
      <details className="mb-6 rounded-2xl border border-cream lg:hidden">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-ink">
          Filtros
        </summary>
        <div className="border-t border-cream px-4 py-4">
          <FilterGroups category={category} currentParams={currentParams} />
        </div>
      </details>

      <aside className="hidden shrink-0 basis-56 lg:block">
        <FilterGroups category={category} currentParams={currentParams} />
      </aside>
    </>
  );
}
