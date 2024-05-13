import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#475A23',
        'secondary':'#A9BF16',
        'accent':'#2E3B16',
        'base-color':'#f6f6f6'
      }
    },
  },
  plugins: [],
};
export default config;
