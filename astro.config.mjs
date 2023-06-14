import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sagarbaba.github.io",
  base: "/sagar-portfolio",
  server: {
    port: 4000,
  },
});
