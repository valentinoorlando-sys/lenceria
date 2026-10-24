import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Bots de scraping masivo / entrenamiento de IA que no respetan caché y son
// conocidos por generar un volumen de tráfico desproporcionado sin aportar
// clientes reales. Se bloquean explícitamente; Google, Bing y los bots de
// vista previa de WhatsApp/Instagram/Facebook siguen permitidos por la
// regla genérica de abajo.
const blockedBots = [
  "GPTBot",
  "ChatGPT-User",
  "CCBot",
  "Bytespider",
  "PetalBot",
  "Amazonbot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Diffbot",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...blockedBots.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `https://${siteConfig.domain}/sitemap.xml`,
  };
}
