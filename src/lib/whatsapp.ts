import { buildWhatsappUrl, formatPrice, shippingCostFor, siteConfig, type ShippingMethod } from "@/lib/config";
import type { CartItem } from "@/lib/cart/context";

export function buildOrderMessage(
  items: CartItem[],
  subtotal: number,
  shippingMethod: ShippingMethod
): string {
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

  const quantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const shipping = shippingCostFor(shippingMethod, quantity);

  lines.push(`Subtotal: ${formatPrice(subtotal)}`);
  if (shippingMethod === "retiro") {
    lines.push("Entrega: retiro / a coordinar con la vendedora");
  } else {
    lines.push(`Envío estimado (${siteConfig.shipping.carrier}): ${formatPrice(shipping)}`);
  }
  lines.push(`TOTAL: ${formatPrice(subtotal + shipping)}`);

  return lines.join("\n");
}

export function buildOrderWhatsappUrl(
  items: CartItem[],
  subtotal: number,
  shippingMethod: ShippingMethod
): string {
  return buildWhatsappUrl(buildOrderMessage(items, subtotal, shippingMethod));
}
