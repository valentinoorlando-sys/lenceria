import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago no procesado",
  robots: { index: false },
};

export default function CheckoutErrorPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="mb-3 font-serif text-3xl italic text-ink sm:text-4xl">No pudimos procesar el pago</h1>
      <p className="mb-8 text-ink/70">
        No te preocupes, tu carrito sigue guardado. Podés intentar de nuevo o elegir otro medio de pago.
      </p>
      <Link
        href="/carrito"
        className="inline-flex items-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
      >
        Volver al carrito
      </Link>
    </div>
  );
}
