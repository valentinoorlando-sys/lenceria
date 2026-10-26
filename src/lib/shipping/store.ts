import type { ShippingMethod } from "@/lib/config";

const STORAGE_KEY = "fratelli-shipping-method";
const DEFAULT: ShippingMethod = "envio";
const listeners = new Set<() => void>();

let method: ShippingMethod = DEFAULT;
let hydrated = false;

function readStorage(): ShippingMethod {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "retiro" || saved === "envio") return saved;
  } catch {
    // localStorage no disponible; se asume envío.
  }
  return DEFAULT;
}

function writeStorage(next: ShippingMethod) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage no disponible; la elección no persiste entre páginas.
  }
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!hydrated) {
    hydrated = true;
    method = readStorage();
  }
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return method;
}

export function getServerSnapshot(): ShippingMethod {
  return DEFAULT;
}

export function setShippingMethod(next: ShippingMethod) {
  method = next;
  writeStorage(next);
  emit();
}

export function readShippingMethod(): ShippingMethod {
  return readStorage();
}
