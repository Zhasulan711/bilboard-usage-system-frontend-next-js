import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}", // mb i need to delete this line
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "mcb-pro-16": { max: "1728px" }, // MacBook Pro 16
      },
    },
  },
  plugins: [],
};
export default config;
