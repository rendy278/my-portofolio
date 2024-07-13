/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "crete-round": ['"Crete Round"', "serif"],
        "reddit-sans": ['"Reddit Sans"', "sans-serif"],
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "992px",
        xl: "1250px",
      },
    },
  },
  plugins: [require("daisyui")],
};
