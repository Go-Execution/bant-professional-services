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
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        heading: ["var(--font-dm-sans)", "var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        // Map legacy classes cleanly so nothing looks decorative or AI-generated
        serif: ["var(--font-dm-sans)", "var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        cinzel: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        linen: {
          50: "#FAF9F6",
          100: "#F4F2ED",
          200: "#E6E2D8",
          300: "#D5CFC2",
        },
        caramel: {
          DEFAULT: "#C9933B",
          light: "#E0AE5C",
          dark: "#9A6B1E",
        },
        gold: {
          DEFAULT: "#C9933B",
          light: "#E0AE5C",
          dark: "#9A6B1E",
        },
        charcoal: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        navy: {
          950: "#09111E",
          900: "#0F172A",
          850: "#162033",
          800: "#1E293B",
          700: "#334155",
        },
      },
    },
  },
  plugins: [],
};

export default config;
