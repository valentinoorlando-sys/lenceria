import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#80144c",
            alignItems: "center",
            justifyContent: "center",
            color: "#f3e9dc",
            fontSize: 64,
            fontStyle: "italic",
            marginBottom: 32,
          }}
        >
          f
        </div>
        <div style={{ display: "flex", fontSize: 80, color: "#80144c", fontStyle: "italic" }}>
          {siteConfig.brandName}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#231b1b", marginTop: 16, letterSpacing: 4 }}>
          {siteConfig.tagline.toUpperCase()}
        </div>
      </div>
    ),
    { ...size }
  );
}
