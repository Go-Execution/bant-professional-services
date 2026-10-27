import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        linen: {
          50: '#FAF8F5',
          100: '#F6F3EE',
          200: '#EBE5DC',
          300: '#DFD7CA',
        },
        caramel: {
          DEFAULT: '#E5A869',
          light: '#F0BA84',
          dark: '#CB8C4C',
        },
        charcoal: {
          900: '#18181A',
          800: '#27272A',
          700: '#3F3F46',
        }
      }
    },
  },
  plugins: [],
};
export default config;
