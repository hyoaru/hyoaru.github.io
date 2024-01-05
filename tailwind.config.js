const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      xs: '380px',
      sm: '540px',
      md: '720px',
      lg: '920px',
      xl: '1040px',
      "2xl": "1536px",
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

