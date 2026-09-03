"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/config";
import type { AttributeDefinition, AttributeKey, Product, ProductVariant } from "@/lib/types";
import { useCart } from "@/lib/cart/context";

export function VariantSelector({
  product,
  attributeDefs,
}: {
  product: Product;
  attributeDefs: AttributeDefinition[];
}) {
  const hasVariants = product.variants.length > 0;
  const [selected, setSelected] = useState<Partial<Record<AttributeKey, string>>>({});
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(false);
  const { addItem } = useCart();

  const matchedVariant: ProductVariant | undefined = useMemo(() => {
    if (!hasVariants) return undefined;
    if (attributeDefs.some((def) => !selected[def.key])) return undefined;
    return product.variants.find((v) =>
      attributeDefs.every((def) => v.attributes[def.key] === selected[def.key])
    );
  }, [hasVariants, attributeDefs, selected, product.variants]);

  function isValueAvailable(key: AttributeKey, value: string): boolean {
    return product.variants.some((v) => {
      if (v.attributes[key] !== value) return false;
      if (v.stock <= 0) return false;
      return attributeDefs.every((def) => {
        if (def.key === key) return true;
        const otherSelected = selected[def.key];
        return !otherSelected || v.attributes[def.key] === otherSelected;
      });
    });
  }

  const maxQuantity = hasVariants ? matchedVariant?.stock ?? 0 : product.stock;
  const needsSelection = hasVariants && !matchedVariant;
  const outOfStock = hasVariants ? !!matchedVariant && matchedVariant.stock === 0 : product.stock === 0;
  const unitPrice = matchedVariant?.priceOverride ?? product.price;
  const canAdd = !needsSelection && !outOfStock && maxQuantity > 0;

  function handleAdd() {
    if (!canAdd) return;
    const variantAttributes = attributeDefs.map((def) => ({
      label: def.label,
      value: selected[def.key]!,
    }));

    addItem(
      {
        key: `${product.id}::${matchedVariant?.id ?? "base"}`,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        unitPrice,
        variantAttributes: variantAttributes.length > 0 ? variantAttributes : undefined,
        maxQuantity: hasVariants ? matchedVariant!.stock : product.stock,
      },
      quantity
    );
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 2500);
  }

  return (
    <div className="space-y-6">
      {attributeDefs.map((def) => {
        const values = Array.from(
          new Set(product.variants.map((v) => v.attributes[def.key]).filter(Boolean))
        ) as string[];

        return (
          <div key={def.key}>
            <p className="mb-2 text-sm font-medium text-ink">
              {def.label}
              {selected[def.key] ? `: ${selected[def.key]}` : ""}
            </p>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => {
                const available = isValueAvailable(def.key, value);
                const isSelected = selected[def.key] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    disabled={!available}
                    onClick={() => setSelected((prev) => ({ ...prev, [def.key]: value }))}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      isSelected
                        ? "border-wine bg-wine text-cream"
                        : available
                          ? "border-cream text-ink/80 hover:border-wine hover:text-wine"
                          : "cursor-not-allowed border-cream text-ink/30 line-through"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {needsSelection && (
        <p className="text-sm text-ink/60">Elegí {attributeDefs.map((d) => d.label.toLowerCase()).join(" y ")} para continuar.</p>
      )}
      {!needsSelection && outOfStock && (
        <p className="text-sm font-medium text-wine">Sin stock en esta combinación.</p>
      )}

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-cream">
          <button
            type="button"
            aria-label="Restar cantidad"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center text-lg text-ink disabled:opacity-30"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            aria-label="Sumar cantidad"
            onClick={() => setQuantity((q) => Math.min(maxQuantity || 1, q + 1))}
            className="flex h-11 w-11 items-center justify-center text-lg text-ink disabled:opacity-30"
            disabled={quantity >= maxQuantity}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!canAdd}
          className="flex-1 rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {outOfStock ? "Sin stock" : `Agregar al carrito · ${formatPrice(unitPrice * quantity)}`}
        </button>
      </div>

      {confirmation && (
        <p className="text-sm font-medium text-wine">Se agregó al carrito ✓</p>
      )}
    </div>
  );
}
