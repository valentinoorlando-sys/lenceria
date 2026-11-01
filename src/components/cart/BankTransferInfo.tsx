"use client";

import { useState } from "react";
import { cyberMondayPromo, siteConfig } from "@/lib/config";
import { useIsCyberMondayActive, useTransferDiscountPercent } from "@/lib/promotions/context";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Si el navegador no permite copiar, el usuario puede seleccionar el texto a mano.
    }
  }

  return (
    <div className="flex items-center justify-between gap-2 py-1.5">
      <div className="min-w-0">
        <p className="text-xs text-ink/50">{label}</p>
        <p className="truncate text-sm font-medium text-ink">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-full border border-cream px-3 py-1 text-xs font-medium text-ink/70 transition-colors hover:border-wine hover:text-wine"
      >
        {copied ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
}

export function BankTransferInfo() {
  const { holder, cvu, alias } = siteConfig.bankTransfer;
  const discountPercent = useTransferDiscountPercent();
  const isCyberMonday = useIsCyberMondayActive();

  return (
    <details className="mt-3 rounded-2xl border border-cream px-4 py-3">
      <summary className="cursor-pointer select-none text-sm font-medium text-ink">
        También podés pagar por transferencia
      </summary>
      {isCyberMonday ? (
        <p className="mt-2 text-sm font-medium text-wine">
          {cyberMondayPromo.label}: {discountPercent}% off en todos los productos pagando por
          transferencia.
        </p>
      ) : (
        <p className="mt-2 text-sm text-ink/60">
          Pagando por transferencia tenés {discountPercent}% off.
        </p>
      )}
      <div className="mt-2 divide-y divide-cream border-t border-cream pt-1">
        <CopyField label="Alias" value={alias} />
        <CopyField label="CVU" value={cvu} />
        <CopyField label="Titular" value={holder} />
      </div>
      <p className="mt-2 text-xs text-ink/50">
        Transferí y mandanos el comprobante junto con tu pedido por WhatsApp.
      </p>
    </details>
  );
}
