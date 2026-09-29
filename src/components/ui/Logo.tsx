import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={siteConfig.brandName}
    >
      <svg
        viewBox="0 0 48 48"
        width={38}
        height={38}
        role="img"
        aria-hidden="true"
      >
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
      <span className="flex items-baseline gap-1">
        <span className="font-serif text-2xl italic tracking-wide text-ink">
          .{siteConfig.brandName.toLowerCase()}
        </span>
        <span className="font-sans text-sm font-medium text-bronze">store</span>
      </span>
    </Link>
  );
}
