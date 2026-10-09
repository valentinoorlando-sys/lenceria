"use client";

import { useState } from "react";
import Link from "next/link";
import { estimateShipping, formatPrice, siteConfig } from "@/lib/config";
import { useCart } from "@/lib/cart/context";
import { buildOrderWhatsappUrl } from "@/lib/whatsapp";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { BankTransferInfo } from "@/components/cart/BankTransferInfo";

export function CartView() {
  const { items, subtotal, clearCart } = useCart();
  const [mpLoading, setMpLoading] = useState(false);
  const [mpError, setMpError] = useState<string | null>(null);
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = estimateShipping(quantity);
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="mb-4 text-ink/60">Todavía no agregaste productos.</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  const whatsappUrl = buildOrderWhatsappUrl(items, subtotal);

  const notifyOrder = () => {
    const payload = {
      items: items.map((item) => ({
        name: item.name,
        brand: item.brand,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        variantAttributes: item.variantAttributes,
      })),
      total,
      shipping,
    };
    fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
    clearCart();
  };

  const payWithMercadoPago = async () => {
    setMpError(null);
    setMpLoading(true);
    try {
      const response = await fetch("/api/checkout/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.initPoint) throw new Error(data.error ?? "No se pudo iniciar el pago");
      window.location.href = data.initPoint;
    } catch (error) {
      setMpError(error instanceof Error ? error.message : "No se pudo iniciar el pago");
      setMpLoading(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
      <div>
        {items.map((item) => (
          <CartLineItem key={item.key} item={item} />
        ))}
        <button
          type="button"
          onClick={clearCart}
          className="mt-4 text-sm text-ink/50 transition-colors hover:text-wine"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="rounded-2xl border border-cream p-5">
        <div className="flex items-center justify-between text-sm text-ink/70">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-sm text-ink/70">
          <span>Envío estimado ({siteConfig.shipping.carrier})</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-cream pt-3 text-base font-medium text-ink">
          <span>Total</span>
          <span className="text-wine">{formatPrice(total)}</span>
        </div>
        <p className="mt-1 text-xs text-ink/50">
          El envío es un costo estimado según la cantidad de productos.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={notifyOrder}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-wine px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
        >
          Realizar pedido por WhatsApp
        </a>

        <button
          type="button"
          onClick={payWithMercadoPago}
          disabled={mpLoading}
          className="mt-3 flex w-full items-center justify-center rounded-full border border-wine px-6 py-3.5 text-sm font-medium text-wine transition-colors hover:bg-wine/5 disabled:opacity-60"
        >
          {mpLoading ? "Redirigiendo a Mercado Pago…" : "Pagar con tarjeta (Mercado Pago)"}
        </button>
        {mpError && (
          <p className="mt-2 text-center text-xs text-wine">
            No pudimos iniciar el pago ({mpError}). Probá de nuevo o usá WhatsApp.
          </p>
        )}

        <Link
          href="/"
          className="mt-3 block text-center text-sm text-ink/60 transition-colors hover:text-wine"
        >
          Seguir comprando
        </Link>

        <BankTransferInfo />
      </div>
    </div>
  );
}
