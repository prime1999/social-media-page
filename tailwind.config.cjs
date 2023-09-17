/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        darkBlue: "rgb(4, 4, 65)",
        lightBlue: "rgba(178,231,235,255)",
        gray: "rgba(241,243,238,255)",
        darkGray: "rgb(195,195,195)",
        blue: "rgb(3, 52, 143)",
      },
    },
  },
  plugins: [],
};
