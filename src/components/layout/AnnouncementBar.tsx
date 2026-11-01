"use client";

import { cyberMondayPromo, siteConfig } from "@/lib/config";
import { useIsCyberMondayActive } from "@/lib/promotions/context";

export function AnnouncementBar() {
  const isCyberMonday = useIsCyberMondayActive();

  return (
    <div className="bg-wine px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.15em] text-cream sm:text-sm">
      {isCyberMonday
        ? `${cyberMondayPromo.label}: ${cyberMondayPromo.discountPercent}% OFF en todo pagando por transferencia`
        : siteConfig.announcement}
    </div>
  );
}
