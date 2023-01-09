/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fde047",
          secondary: "#93c5fd",
          accent: "#facc15",
          neutral: "#191D24",
          "base-100": "#fff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#fb923c",
          error: "#F87272",
        },
      },
    ],

    // extend: {
    //   gridTemplateColumns: {
    //     14: "repeat(14, minmax(0, 1fr))",
    //   },
  },
  plugins: [require("daisyui")],
};
