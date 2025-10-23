import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://caalzate91.github.io",
  base: "/",
  integrations: [react()],

  redirects: {
    "/": "/dataday",
  },

  build: {
    rollupOptions: {
      external: [],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
