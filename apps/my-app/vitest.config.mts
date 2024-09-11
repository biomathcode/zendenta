import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["@convex/auth/server"],
    },
  },
  test: {
    environment: "edge-runtime",
    server: { deps: { inline: ["convex-test"] } },
  },
});
