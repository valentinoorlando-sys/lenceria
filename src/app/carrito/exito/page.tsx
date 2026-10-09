import type { Metadata } from "next";
import Link from "next/link";
import { ConfirmMercadoPagoOrder } from "@/components/cart/ConfirmMercadoPagoOrder";

export const metadata: Metadata = {
  title: "Pago aprobado",
  robots: { index: false },
};

export default function CheckoutExitoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <ConfirmMercadoPagoOrder />
      <h1 className="mb-3 font-serif text-3xl italic text-ink sm:text-4xl">¡Pago aprobado!</h1>
      <p className="mb-8 text-ink/70">
        Gracias por tu compra. Te vamos a contactar por WhatsApp para coordinar el envío.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
