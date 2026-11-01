"use client";

import { formatPrice, transferPrice } from "@/lib/config";
import { useTransferDiscountPercent } from "@/lib/promotions/context";

export function TransferPrice({
  price,
  className,
  suffix = "con transferencia",
}: {
  price: number;
  className?: string;
  suffix?: string;
}) {
  const discountPercent = useTransferDiscountPercent();

  return (
    <p className={className}>
      {formatPrice(transferPrice(price, discountPercent))} {suffix}
    </p>
  );
}
