import { siteConfig } from "@/lib/config";

export function AnnouncementBar() {
  return (
    <div className="bg-wine px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.15em] text-cream sm:text-sm">
      {siteConfig.announcement}
    </div>
  );
}
