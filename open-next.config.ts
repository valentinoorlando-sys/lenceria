import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import type { IncrementalCache } from "@opennextjs/aws/types/overrides.js";

// No usamos un bucket R2 ni un namespace KV a propósito (eso requeriría crear
// el recurso a mano en el dashboard de Cloudflare antes de poder desplegar).
// Este "store" de respaldo no persiste nada, pero al no fallar le permite a
// `withRegionalCache` cachear igual usando la Cache API nativa de Workers,
// que está disponible en cualquier Worker sin configuración previa.
const noStore: IncrementalCache = {
  name: "noop",
  get: async () => null,
  set: async () => {},
  delete: async () => {},
};

export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(noStore, { mode: "long-lived" }),
});
