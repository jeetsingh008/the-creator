import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF60E6",
        secondary: "#FFADF2",
        primaryDark:"#1F392C"
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "3rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
  plugins: [],
} satisfies Config;
