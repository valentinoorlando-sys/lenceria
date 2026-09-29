"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImagePlaceholder } from "@/components/ui/ProductImagePlaceholder";

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return <ProductImagePlaceholder name={name} className="w-full overflow-hidden rounded-2xl" />;
  }

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-cream">
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bone/80 text-ink shadow-sm transition-colors hover:bg-bone"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Foto siguiente"
              onClick={() => setActive((i) => (i + 1) % images.length)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bone/80 text-ink shadow-sm transition-colors hover:bg-bone"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={`${i}-${src}`}
              type="button"
              aria-label={`Ver foto ${i + 1}`}
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                i === active ? "border-wine" : "border-transparent"
              }`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
