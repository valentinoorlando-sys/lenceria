export function ProductImagePlaceholder({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div
      className={`flex aspect-square items-center justify-center bg-gradient-to-br from-cream to-wine/15 ${className ?? ""}`}
    >
      <span className="font-serif text-4xl italic text-wine/50">{initial}</span>
    </div>
  );
}
