import { activeTransferDiscountPercent, isCyberMondayActive, siteConfig } from "@/lib/config";

// No hay un evento real al que suscribirse (el reloj no "emite" cambios), así que
// esto solo resincroniza una vez al montar: alcanza para que cada visita muestre
// el descuento correcto sin depender de cuándo se generó la página estática.
export function subscribe() {
  return () => {};
}

export function getDiscountPercentSnapshot(): number {
  return activeTransferDiscountPercent();
}

export function getDiscountPercentServerSnapshot(): number {
  return siteConfig.bankTransfer.discountPercent;
}

export function getIsCyberMondaySnapshot(): boolean {
  return isCyberMondayActive();
}

export function getIsCyberMondayServerSnapshot(): boolean {
  return false;
}
