/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "df-blue": "#4285f4",
        "df-blue-600": "#1765cc",
        "df-blue-300": "#8ab4f8",
        "df-green": "#34a853",
        "df-lime-400": "#E4F675",
        "df-lime-500": "#D8E971",
        "df-green-300": "#81c995",
        "df-yellow": "#f9ab00",
        "df-yellow-700": "#e69e00",
        "df-yellow-300": "#fde293",
        "df-red": "#ea4335",
        "df-red-300": "#f28b82",
        "df-red-300": "#f28b82",
        "df-gray-700": "#5f6368",
        "df-gray-200": "#DADCE0",
        "df-gray-100": "#f1f3f4",
        "df-white-bg": "#F8F9FA",
        "df-esmerald-900": "#004135",
        "df-esmerald-700": "#167261",
      },
      gridTemplateColumns: {
        'organizer': 'repeat(4, minmax(0, 280px))',
      },
      fontFamily: {
        body: ["Nunito Sans", "Roboto"],
        code: ["Roboto Mono"]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
