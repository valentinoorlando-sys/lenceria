import { ProductImagePlaceholder } from "@/components/ui/ProductImagePlaceholder";

export function ProductGallery({ name }: { name: string }) {
  return (
    <ProductImagePlaceholder
      name={name}
      className="w-full overflow-hidden rounded-2xl"
    />
  );
}
