/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF533D",

          secondary: "#374151",

          accent: "#0F1626",

          neutral: "gray",

          // "base-100": "#6b7280",

          info: "#0F1626",

          success: "#78716c",

          warning: "#FBBD23",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
