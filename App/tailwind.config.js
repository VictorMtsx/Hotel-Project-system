import { small } from "framer-motion/client";
import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      mobile: "600px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
