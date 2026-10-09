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

export function transferPrice(price: number): number {
  return Math.round(price * (1 - siteConfig.bankTransfer.discountPercent / 100));
}

export function estimateShipping(totalQuantity: number): number {
  const tier = siteConfig.shipping.tiers.find((t) => totalQuantity <= t.maxQty);
  return tier ? tier.cost : siteConfig.shipping.tiers[siteConfig.shipping.tiers.length - 1].cost;
}

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
