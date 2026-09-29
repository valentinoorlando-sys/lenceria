import Image from "next/image";

const photos = [
  { src: "/images/showcase/vs-body-splash-group.jpg", alt: "Body splash Victoria's Secret" },
  { src: "/images/showcase/vs-pure-seduction-set.jpg", alt: "Set Pure Seduction Victoria's Secret" },
  { src: "/images/showcase/medicube-pdrn-skincare.jpg", alt: "Skincare coreano Medicube" },
  { src: "/images/showcase/acf-malbec-mask.jpg", alt: "Mascarilla ACF Malbec" },
];

export function StockShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 text-center font-serif text-2xl italic text-ink sm:text-3xl">
        Así es nuestro stock
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-square overflow-hidden rounded-2xl bg-cream"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
