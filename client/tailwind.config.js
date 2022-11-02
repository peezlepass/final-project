/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "empty-cell-color": "rgb(186, 186, 186)",
        "empty-cell-border": "rgb(156, 156, 156)",
      },
    },
  },
  plugins: [],
};
