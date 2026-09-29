import Link from "next/link";
import Image from "next/image";
import { formatPrice, transferPrice } from "@/lib/config";
import { discountPercent, isInStock, type Product } from "@/lib/types";
import { ProductImagePlaceholder } from "@/components/ui/ProductImagePlaceholder";

export function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product);
  const inStock = isInStock(product);

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-cream bg-bone transition-shadow hover:shadow-md"
    >
      <div className="relative">
        {product.images.length > 0 ? (
          <div className="relative aspect-square w-full overflow-hidden bg-cream">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <ProductImagePlaceholder
            name={product.name}
            className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}

        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {discount && (
            <span className="rounded-full bg-wine px-2.5 py-1 text-xs font-medium text-cream">
              -{discount}%
            </span>
          )}
          {product.tags.includes("novedad") && (
            <span className="rounded-full bg-ink/90 px-2.5 py-1 text-xs font-medium text-bone">
              Nuevo
            </span>
          )}
        </div>

        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-bone/70">
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-bone">
              Sin stock
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1 p-3">
        <p className="text-xs uppercase tracking-wide text-ink/50">{product.brand}</p>
        <h3 className="font-serif text-lg leading-snug text-ink">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-medium text-wine">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-bronze">
          {formatPrice(transferPrice(product.price))} con transferencia
        </p>
      </div>
    </Link>
  );
}
