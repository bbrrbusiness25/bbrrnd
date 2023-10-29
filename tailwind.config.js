/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      // colors: {
      //   white: "#EFFFFB",
      //   green: "#50D890",
      //   black: "#272727",
      // },
    },
  },
  plugins: [],
};
