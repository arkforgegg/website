/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "300px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        titillium: ["Titillium_Web", "sans-serif"],
        titilium: ["titilium", "sans-serif"],
        airif: ["titilium", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
