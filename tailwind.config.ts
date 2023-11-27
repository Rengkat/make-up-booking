// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellowish-orange": "#dd6f1d",
        "dark-green": "#074456",
        "lighter-gold": "#fffbf1",
        "darker-gold": "#f2c6a5",
        white: "#fff",
        // Add more custom colors here
      },
      fontFamily: {
        roboto: ["var(--roboto)"],
        montserrat: ["var(--montserrat)"],
        bubblegum: ["var(--bubblegum)"],
        // Add more custom fonts here
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
