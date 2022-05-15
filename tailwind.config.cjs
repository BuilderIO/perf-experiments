module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "builder-text",
    }),
  ],
};
