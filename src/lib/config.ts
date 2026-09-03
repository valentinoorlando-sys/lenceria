export const siteConfig = {
  brandName: "Fratelli",
  tagline: "Moda íntima, fragancias y cuidado personal",
  domain: "fratellistore.com.ar",
  whatsappNumber: "5493518553004",
  instagramHandle: "fratellistore.ok",
  instagramUrl: "https://www.instagram.com/fratellistore.ok",
  location: "Nueva Córdoba, Córdoba, Argentina",
  currency: {
    locale: "es-AR",
    code: "ARS",
    symbol: "$",
  },
};

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(siteConfig.currency.locale, {
    style: "currency",
    currency: siteConfig.currency.code,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
