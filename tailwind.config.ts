import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "mcb-pro-16": { min: "1728px", max: "1728px" }, // MacBook Pro 16
      },
    },
  },
  plugins: [],
};
export default config;
