"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/config";
import { useCart, type CartItem } from "@/lib/cart/context";
import { ProductImagePlaceholder } from "@/components/ui/ProductImagePlaceholder";

export function CartLineItem({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-cream py-4">
      <Link href={`/productos/${item.slug}`} className="shrink-0">
        <ProductImagePlaceholder name={item.name} className="h-20 w-20 rounded-xl" />
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/productos/${item.slug}`}
              className="font-serif text-lg italic text-ink hover:text-wine"
            >
              {item.name}
            </Link>
            {item.variantAttributes && item.variantAttributes.length > 0 && (
              <p className="text-sm text-ink/60">
                {item.variantAttributes.map((a) => `${a.label}: ${a.value}`).join(" · ")}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.key)}
            aria-label="Quitar del carrito"
            className="shrink-0 text-sm text-ink/40 transition-colors hover:text-wine"
          >
            Quitar
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-cream">
            <button
              type="button"
              aria-label="Restar cantidad"
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              className="flex h-9 w-9 items-center justify-center text-ink"
            >
              −
            </button>
            <span className="w-7 text-center text-sm font-medium">{item.quantity}</span>
            <button
              type="button"
              aria-label="Sumar cantidad"
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              disabled={item.quantity >= item.maxQuantity}
              className="flex h-9 w-9 items-center justify-center text-ink disabled:opacity-30"
            >
              +
            </button>
          </div>
          <span className="font-medium text-wine">
            {formatPrice(item.unitPrice * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
