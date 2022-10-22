/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4ae06a",

          "secondary": "#ffdec6",

          "accent": "#f2ee79",

          "neutral": "#26202C",

          "base-100": "#FFFFFF",

          "info": "#A5B4E3",

          "success": "#1E7B5C",

          "warning": "#F2951C",

          "error": "#FC3661",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
