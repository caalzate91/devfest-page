import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://caalzate91.github.io",
  base: "/devfest-page/",
  integrations: [tailwind(), react()],
  build:{
    rollupOptions:{
      external:[]
    }
  }
});
