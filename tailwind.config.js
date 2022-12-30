/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF533D",

          secondary: "#374151",

          accent: "#000",

          neutral: "gray",

          "base-100": "#FFFFFF",

          info: "#3b82f6",

          success: "#78716c",

          warning: "#FBBD23",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
