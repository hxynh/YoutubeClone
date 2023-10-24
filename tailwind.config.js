import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[100],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[500]
        }
      }
    },
  },
  plugins: [],
}