export const siteConfig = {
  brandName: "Fratelli",
  tagline: "Importados, skincare coreano y beauty",
  announcement: "Importados · Skincare · Beauty · Victoria's Secret",
  domain: "fratellistore.com.ar",
  whatsappNumber: "5493518553004",
  orderNotificationEmail: "evelynselva34@gmail.com",
  orderFromEmail: "pedidos@fratellistore.com.ar",
  instagramHandle: "fratellistore.ok",
  instagramUrl: "https://www.instagram.com/fratellistore.ok",
  location: "Nueva Córdoba, Córdoba, Argentina",
  bankTransfer: {
    holder: "Evelyn Camila Selva",
    cuit: "27405049088",
    cvu: "0000003100067344455545",
    alias: "hola.fratelli.tienda",
    discountPercent: 10,
  },
  shipping: {
    carrier: "Correo Argentino",
    tiers: [
      { maxQty: 2, label: "Liviano", cost: 5500 },
      { maxQty: 5, label: "Medio", cost: 8500 },
      { maxQty: Infinity, label: "Pesado", cost: 12000 },
    ],
  },
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

export function transferPrice(
  price: number,
  discountPercent: number = siteConfig.bankTransfer.discountPercent
): number {
  return Math.round(price * (1 - discountPercent / 100));
}

export const cyberMondayPromo = {
  label: "Cyber Monday",
  discountPercent: 25,
  // Córdoba, Argentina (UTC-3).
  startsAt: "2026-11-02T00:00:00-03:00",
  endsAt: "2026-11-04T23:59:59-03:00",
};

export function isCyberMondayActive(now: Date = new Date()): boolean {
  const t = now.getTime();
  return (
    t >= new Date(cyberMondayPromo.startsAt).getTime() &&
    t <= new Date(cyberMondayPromo.endsAt).getTime()
  );
}

export function activeTransferDiscountPercent(now: Date = new Date()): number {
  return isCyberMondayActive(now)
    ? cyberMondayPromo.discountPercent
    : siteConfig.bankTransfer.discountPercent;
}

export function estimateShipping(totalQuantity: number): number {
  const tier = siteConfig.shipping.tiers.find((t) => totalQuantity <= t.maxQty);
  return tier ? tier.cost : siteConfig.shipping.tiers[siteConfig.shipping.tiers.length - 1].cost;
}

export type ShippingMethod = "envio" | "retiro";

export function shippingCostFor(method: ShippingMethod, totalQuantity: number): number {
  return method === "retiro" ? 0 : estimateShipping(totalQuantity);
}

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
