import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatPrice, siteConfig, transferPrice } from "@/lib/config";

interface OrderItemPayload {
  name: string;
  brand: string;
  unitPrice: number;
  quantity: number;
  variantAttributes?: { label: string; value: string }[];
}

interface OrderPayload {
  items: OrderItemPayload[];
  total: number;
  shipping?: number;
  paymentMethod?: string;
}

function isOrderPayload(body: unknown): body is OrderPayload {
  if (!body || typeof body !== "object") return false;
  const { items, total } = body as Record<string, unknown>;
  return Array.isArray(items) && typeof total === "number";
}

function buildOrderEmailHtml(payload: OrderPayload): string {
  const rows = payload.items
    .map((item) => {
      const attrs = (item.variantAttributes ?? [])
        .map((a) => `${a.label}: ${a.value}`)
        .join(" · ");
      return `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #eee;">
            <strong>${item.name}</strong><br/>
            <span style="color:#666;font-size:13px;">${item.brand}${attrs ? ` — ${attrs}` : ""}</span>
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">${formatPrice(item.unitPrice * item.quantity)}</td>
        </tr>
      `;
    })
    .join("");

  const shipping = payload.shipping ?? 0;
  const productsSubtotal = payload.total - shipping;

  return `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#6b0f3a;">Nuevo pedido — ${siteConfig.brandName}</h2>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="text-align:left;color:#888;font-size:13px;">
            <th style="padding-bottom:6px;">Producto</th>
            <th style="padding-bottom:6px;text-align:center;">Cant.</th>
            <th style="padding-bottom:6px;text-align:right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="text-align:right;font-size:14px;margin-top:12px;color:#666;">
        Envío estimado (${siteConfig.shipping.carrier}): ${formatPrice(shipping)}
      </p>
      <p style="text-align:right;font-size:18px;margin-top:4px;">
        <strong>Total: ${formatPrice(payload.total)}</strong><br/>
        <span style="font-size:13px;color:#a0526d;">
          ${formatPrice(transferPrice(productsSubtotal) + shipping)} si paga por transferencia
        </span>
      </p>
      <p style="color:#666;font-size:13px;">
        ${
          payload.paymentMethod
            ? `Pago confirmado por ${payload.paymentMethod}.`
            : "El cliente fue redirigido a WhatsApp para coordinar datos de envío y forma de pago."
        }
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "RESEND_API_KEY no configurada" }, { status: 501 });
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

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.brandName} <${siteConfig.orderFromEmail}>`,
      to: siteConfig.orderNotificationEmail,
      subject: `Nuevo pedido — ${formatPrice(body.total)}`,
      html: buildOrderEmailHtml(body),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando mail de pedido", error);
    return NextResponse.json({ ok: false, error: "No se pudo enviar el mail" }, { status: 502 });
  }
}
