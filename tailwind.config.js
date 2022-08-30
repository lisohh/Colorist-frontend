/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
