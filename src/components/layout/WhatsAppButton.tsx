import { buildWhatsappUrl } from "@/lib/config";

export function WhatsAppButton({
  message = "Hola! Quiero hacerte una consulta.",
  floating = false,
}: {
  message?: string;
  floating?: boolean;
}) {
  const href = buildWhatsappUrl(message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wine text-cream shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-wine px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
    >
      <WhatsAppIcon className="h-4 w-4" />
      Pedir por WhatsApp
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.4-1.36a9.9 9.9 0 0 0 4.63 1.15h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.83 14.09c-.25.7-1.42 1.34-1.96 1.42-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.12-4.9-4.31-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.56-.36.75-.36.19 0 .38 0 .54.01.17.01.41-.07.64.49.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.72-.18 1.41Z" />
    </svg>
  );
}
