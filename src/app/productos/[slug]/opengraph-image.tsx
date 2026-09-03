import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/lib/data/products";
import { formatPrice, siteConfig } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const name = product?.name ?? siteConfig.brandName;
  const price = product ? formatPrice(product.price) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f3e9dc 0%, #fffdfb 60%)",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#b79766",
            letterSpacing: 6,
            marginBottom: 24,
          }}
        >
          {siteConfig.brandName.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 64, color: "#231b1b", fontStyle: "italic", maxWidth: 900 }}>
          {name}
        </div>
        {price && (
          <div style={{ display: "flex", fontSize: 40, color: "#7a2048", marginTop: 32 }}>{price}</div>
        )}
      </div>
    ),
    { ...size }
  );
}
