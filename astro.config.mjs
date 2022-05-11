import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [tailwind(), partytown(), sitemap()],
});
