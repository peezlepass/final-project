/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "empty-cell-color": "rgb(186, 186, 186)",
        "empty-cell-border": "rgb(156, 156, 156)",
        "number-cell-one": "rgb(0, 0, 255)",
        "number-cell-two": "rgb(16, 112, 0)",
        "number-cell-three": "rgb(252, 0, 6)",
        "number-cell-four": "rgb(0, 0, 108)",
        "number-cell-five": "rgb(108, 0, 4)",
        "number-cell-six": "rgb(14, 108, 109)",
        "number-cell-seven": "rgb(108, 0, 109)",
        "number-cell-eight": "rgb(95, 95, 95)",
        "red-bomb": "rgb(253, 0, 6)",
      },
    },
  },
  plugins: [],
};
