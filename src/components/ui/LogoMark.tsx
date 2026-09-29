export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="var(--color-wine)" />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="var(--font-brand-serif)"
        fontSize="26"
        fontStyle="italic"
        fill="var(--color-cream)"
      >
        f
      </text>
    </svg>
  );
}
