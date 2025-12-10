// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <--- ¿Está esta línea?
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    tailwind(), // <--- ¿Está esta línea con los paréntesis?
    icon()
  ],
});