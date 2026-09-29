import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { LogoMark } from "@/components/ui/LogoMark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={siteConfig.brandName}
    >
      <LogoMark size={38} />
      <span className="flex items-baseline gap-1">
        <span className="font-serif text-2xl italic tracking-wide text-ink">
          .{siteConfig.brandName.toLowerCase()}
        </span>
        <span className="font-sans text-sm font-medium text-bronze">store</span>
      </span>
    </Link>
  );
}
