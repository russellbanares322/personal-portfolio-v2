/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      colors: {
        blue: "#020817",
        yellow: "#EAB208",
        black: "#000000",
        "light-yellow": "#F3CB59",
        whitesmoke: "#F9EFC9",
        "light-blue": "#263238",
      },
    },
  },
  plugins: [],
};
