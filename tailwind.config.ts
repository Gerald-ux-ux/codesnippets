import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#F8F8F2",
        secondary: "#6E6E70",
        tertiary: "#BD8623",
        brand: "#D1311F",
      },
      backgroundColor: {
        primary: "#0D0F11",
        secondary: "#060706",
        brand: "#D1311F",
        hover: "#16181a",
      },
      borderColor: {
        primary: "#363739",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
