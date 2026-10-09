import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { siteConfig } from "@/lib/config";

interface OrderItemPayload {
  name: string;
  unitPrice: number;
  quantity: number;
}

interface OrderPayload {
  items: OrderItemPayload[];
}

function isOrderPayload(body: unknown): body is OrderPayload {
  if (!body || typeof body !== "object") return false;
  const { items } = body as Record<string, unknown>;
  return Array.isArray(items);
}

export async function POST(request: Request) {
  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json({ ok: false, error: "MP_ACCESS_TOKEN no configurado" }, { status: 501 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  if (!isOrderPayload(body) || body.items.length === 0) {
    return NextResponse.json({ ok: false, error: "Pedido inválido" }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? `https://${siteConfig.domain}`;

  try {
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: body.items.map((item, index) => ({
          id: String(index),
          title: item.name.slice(0, 256),
          quantity: item.quantity,
          unit_price: item.unitPrice,
          currency_id: siteConfig.currency.code,
        })),
        back_urls: {
          success: `${origin}/carrito/exito`,
          failure: `${origin}/carrito/error`,
          pending: `${origin}/carrito/pendiente`,
        },
        auto_return: "approved",
        statement_descriptor: siteConfig.brandName,
      },
    });

    if (!result.init_point) {
      return NextResponse.json({ ok: false, error: "Mercado Pago no devolvió un link de pago" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, initPoint: result.init_point });
  } catch (error) {
    console.error("Error creando preferencia de Mercado Pago", error);
    return NextResponse.json({ ok: false, error: "No se pudo iniciar el pago" }, { status: 502 });
  }
}
