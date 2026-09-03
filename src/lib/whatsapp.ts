import { buildWhatsappUrl, formatPrice } from "@/lib/config";
import type { CartItem } from "@/lib/cart/context";

export function buildOrderMessage(items: CartItem[], total: number): string {
  const lines = ["Hola! Quiero realizar este pedido:", ""];

  for (const item of items) {
    lines.push(item.name);
    for (const attr of item.variantAttributes ?? []) {
      lines.push(`${attr.label}: ${attr.value}`);
    }
    lines.push(`Cantidad: ${item.quantity}`);
    lines.push(`Precio: ${formatPrice(item.unitPrice * item.quantity)}`);
    lines.push("");
  }

  lines.push(`TOTAL: ${formatPrice(total)}`);

  return lines.join("\n");
}

export function buildOrderWhatsappUrl(items: CartItem[], total: number): string {
  return buildWhatsappUrl(buildOrderMessage(items, total));
}
