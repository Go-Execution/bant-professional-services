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
        serif: ["var(--font-cormorant)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        linen: {
          50: '#FAF8F5',
          100: '#F6F3EE',
          200: '#EBE5DC',
          300: '#DFD7CA',
        },
        // Rich Gold extracted directly from the script "N" in logo
        caramel: {
          DEFAULT: '#C9933B',
          light: '#DEAA55',
          dark: '#AB7724',
        },
        gold: {
          DEFAULT: '#C9933B',
          light: '#DEAA55',
          dark: '#AB7724',
        },
        // Deep Sovereign Navy extracted directly from "B", "T" and "PROFESSIONAL SERVICES"
        charcoal: {
          900: '#0B1B36',
          800: '#0F264C',
          700: '#173668',
        },
        navy: {
          950: '#070F1E',
          900: '#0B1B36',
          850: '#0D2142',
          800: '#0F264C',
          700: '#173668',
        }
      }
    },
  },
  plugins: [],
};
export default config;
