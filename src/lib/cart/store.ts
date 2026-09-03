export interface CartItem {
  key: string;
  productId: string;
  slug: string;
  name: string;
  brand: string;
  unitPrice: number;
  variantLabel?: string;
  quantity: number;
  maxQuantity: number;
}

const STORAGE_KEY = "fratelli-cart";
const EMPTY: CartItem[] = [];
const listeners = new Set<() => void>();

let items: CartItem[] = EMPTY;
let hydrated = false;

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage no disponible; el carrito sigue funcionando en memoria.
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
      if (raw) items = JSON.parse(raw);
    } catch {
      // Si falla la lectura, el carrito arranca vacío.
    }
  }
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return items;
}

export function getServerSnapshot() {
  return EMPTY;
}

export function addItem(item: Omit<CartItem, "quantity">, quantity: number) {
  const existing = items.find((i) => i.key === item.key);
  items = existing
    ? items.map((i) =>
        i.key === item.key
          ? { ...i, quantity: Math.min(i.quantity + quantity, i.maxQuantity) }
          : i
      )
    : [...items, { ...item, quantity: Math.min(quantity, item.maxQuantity) }];
  persist();
  emit();
}

export function updateQuantity(key: string, quantity: number) {
  items = items
    .map((i) =>
      i.key === key ? { ...i, quantity: Math.min(Math.max(quantity, 1), i.maxQuantity) } : i
    )
    .filter((i) => i.quantity > 0);
  persist();
  emit();
}

export function removeItem(key: string) {
  items = items.filter((i) => i.key !== key);
  persist();
  emit();
}

export function clearCart() {
  items = EMPTY;
  persist();
  emit();
}
