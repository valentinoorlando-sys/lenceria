import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago pendiente",
  robots: { index: false },
};

export default function CheckoutPendientePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="mb-3 font-serif text-3xl italic text-ink sm:text-4xl">Tu pago está pendiente</h1>
      <p className="mb-8 text-ink/70">
        Estamos esperando la confirmación del pago. Te vamos a contactar por WhatsApp apenas se acredite.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
