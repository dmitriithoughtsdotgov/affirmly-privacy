/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme")

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: { DEFAULT: "#f5f7fb", dark: "#383e48", light: "#AAAAB3" },
      white: "#ffffff",
      violet: {
        DEFAULT: "#61529E",
        dark: "#3A2E3B",
        white: "#EBDCE6",
        black: "#302230",
        light: "#8075B1",
      },
      blue: {
        DEFAULT: "#2F4FA1",
        dark: "#5D6EBF",
        white: "#D6E1F0",
        highlignt: "#7A92E5",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
