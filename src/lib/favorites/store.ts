const STORAGE_KEY = "fratelli-favorites";
const EMPTY: string[] = [];
const listeners = new Set<() => void>();

let ids: string[] = EMPTY;
let hydrated = false;

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // localStorage no disponible; los favoritos siguen funcionando en memoria.
  }
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!hydrated) {
    hydrated = true;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) ids = JSON.parse(raw);
    } catch {
      // Si falla la lectura, los favoritos arrancan vacíos.
    }
  }
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return ids;
}

export function getServerSnapshot() {
  return EMPTY;
}

export function toggleFavorite(productId: string) {
  ids = ids.includes(productId) ? ids.filter((id) => id !== productId) : [...ids, productId];
  persist();
  emit();
}
