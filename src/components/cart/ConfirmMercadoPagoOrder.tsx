"use client";

import { useEffect, useRef } from "react";
import { estimateShipping } from "@/lib/config";
import { useCart } from "@/lib/cart/context";

export function ConfirmMercadoPagoOrder() {
  const { items, subtotal, clearCart } = useCart();
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current || items.length === 0) return;
    sent.current = true;

    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = estimateShipping(quantity);

    const payload = {
      items: items.map((item) => ({
        name: item.name,
        brand: item.brand,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        variantAttributes: item.variantAttributes,
      })),
      total: subtotal + shipping,
      shipping,
      paymentMethod: "Mercado Pago",
    };

    fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .catch(() => {})
      .finally(() => clearCart());
  }, [items, subtotal, clearCart]);

  return null;
}
