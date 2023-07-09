/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "279px",
        // => @media (min-width: 279px) {...}
      },
      colors: {
        primary: "#0065FE",
        primaryBlue: "#F9FBFD",
        lightBlue: " #3284FF21",
        placeholder: "#A0B1C0",
        anotherBlue: " #4991FF",
        darkBlue: "#0D1C2B",
        navText: "#A3C8FF",
      },
    },
  },
  plugins: [],
};
