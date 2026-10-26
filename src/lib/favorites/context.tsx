"use client";

import { useSyncExternalStore } from "react";
import * as favoritesStore from "./store";

export function useFavorites() {
  const ids = useSyncExternalStore(
    favoritesStore.subscribe,
    favoritesStore.getSnapshot,
    favoritesStore.getServerSnapshot
  );

  return {
    ids,
    count: ids.length,
    isFavorite: (productId: string) => ids.includes(productId),
    toggleFavorite: favoritesStore.toggleFavorite,
  };
}
