/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "df-blue": "#4285f4",
        "df-blue-300": "#8ab4f8",
        "df-green": "#34a853",
        "df-green-300": "#81c995",
        "df-yellow": "#f9ab00",
        "df-yellow-300": "#fde293",
        "df-red": "#ea4335",
        "df-red-300": "#f28b82",
        "df-red-300": "#f28b82",
        "df-gray-700": "#5f6368",
        "df-gray-100": "#f1f3f4",
      },
      fontFamily: {
        body: ["Nunito Sans", "Roboto"],
        code: ["Roboto Mono"]
      },
    },
  },
  plugins: [],
};
