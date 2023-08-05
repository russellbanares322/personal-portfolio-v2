/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        type: {
          "0%": {
            transform: "translateX(-10px)",
          },
          "80%": {
            transform: "translateX(10px)",
          },
          "100%": {
            transform: "translateX(-12px)",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "50%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "typing-hand": "type 2s linear infinite",
        blink: "blink 1s linear infinite",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      colors: {
        blue: "#020817",
        yellow: "#EAB208",
        black: "#000000e1",
        red: "#F70712",
        "light-yellow": "#F3CB59",
        whitesmoke: "#F9EFC9",
        "light-blue": "#263238",
      },
    },
  },
  plugins: [],
};
