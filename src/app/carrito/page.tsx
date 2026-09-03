import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisá tu pedido antes de confirmarlo por WhatsApp.",
};

export default function CarritoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 font-serif text-3xl italic text-ink sm:text-4xl">Tu carrito</h1>
      <CartView />
    </div>
  );
}
