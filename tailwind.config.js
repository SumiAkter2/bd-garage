/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF533D",

          secondary: "#7F7F7F",

          accent: "#0F1626",

          neutral: "gray",

          // "base-100": "#6b7280",

          info: "#0F1626",

          success: "#AB987A",

          warning: "#FBBD23",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
