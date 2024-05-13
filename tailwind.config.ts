import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
    "./contents/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "26434C",
        secondary: "#020404",
        imageOpt: "#26434C",
        neutralBlack60: "rgba(75, 75, 75, 0.6)",
        neutralBlack100: "rgba(0, 0, 0, 1.0)",
      },
      letterSpacing: {
        wide20: "0.2em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bodonimoda: ["var(--font-bodoni-moda)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
