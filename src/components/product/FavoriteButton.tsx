"use client";

import { useFavorites } from "@/lib/favorites/context";

export function FavoriteButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(productId);

  return (
    <button
      type="button"
      aria-label={active ? "Quitar de favoritos" : "Agregar a favoritos"}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(productId);
      }}
      className={className}
    >
      <HeartIcon filled={active} className="h-4.5 w-4.5" />
    </button>
  );
}

function HeartIcon({ className, filled }: { className?: string; filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 20.5s-7.3-4.4-9.8-8.8C.7 8.3 2.3 5 5.6 4.4c2-.4 4 .4 5.3 1.9.4.5.8 1 1.1 1.5.3-.5.7-1 1.1-1.5 1.3-1.5 3.3-2.3 5.3-1.9 3.3.6 4.9 3.9 3.4 7.3-2.5 4.4-9.8 8.8-9.8 8.8Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
