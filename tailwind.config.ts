import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      backdropBlur: {
        xs: '1px',
      },
      colors: {
        gold: '#FFEC9E',
        dust: '#666666'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "outline-flowers": "url('/outline-flowers.svg')",
      },
      fontFamily: {
        amore: ['Amore', 'sans-serif'],
        hughIsLife: ['HughIsLife', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
