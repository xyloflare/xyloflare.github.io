// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://xyloflare.github.io",
  devToolbar: {
    enabled: false,
  },
  server: { port: 4321, host: true },
  vite: {
    server: {
      allowedHosts: ["ohio-example.gl.at.ply.gg"],
    },
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
