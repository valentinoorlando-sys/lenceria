"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/config";
import { useCart } from "@/lib/cart/context";
import { buildOrderWhatsappUrl } from "@/lib/whatsapp";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { BankTransferInfo } from "@/components/cart/BankTransferInfo";

export function CartView() {
  const { items, subtotal, clearCart } = useCart();

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
        <div className="mt-2 flex items-center justify-between border-t border-cream pt-3 text-base font-medium text-ink">
          <span>Total</span>
          <span className="text-wine">{formatPrice(subtotal)}</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => clearCart()}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-wine px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
        >
          Realizar pedido por WhatsApp
        </a>

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
