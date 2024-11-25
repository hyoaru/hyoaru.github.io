const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", 'sans-serif']
      },
      colors: {
        "custom-background": {
          DEFAULT: 'hsl(var(--custom-background))',
          foreground: 'hsl(var(--custom-foreground))',
        },
        "custom-secondary": {
          DEFAULT: 'hsl(var(--custom-secondary))',
          foreground: 'hsl(var(--custom-secondary-foreground))',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

