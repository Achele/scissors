/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0065FE",
        primaryBlue: "#F9FBFD",
        lightBlue: " #3284FF21",
        blueGradient:
          " linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0) 100%)",
      },
    },
  },
  plugins: [],
};
