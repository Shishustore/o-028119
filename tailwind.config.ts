
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F58634", // Primary Orange
          foreground: "#FFFFFF", // Bright White
        },
        secondary: {
          DEFAULT: "#FFC94B", // Primary Yellow
          foreground: "#222222", // Cool Black
        },
        accent: {
          DEFAULT: "#222222", // Cool Black for text
          foreground: "#FFFFFF", // Bright White
        },
        muted: {
          DEFAULT: "#FFF9E6", // Light Cream
          foreground: "#222222", // Cool Black
        },
        subtle: "#FFF9E6",
        card: "#FFFFFF", // Bright White for cards
        "light-cream": "#FFF9E6",
        "primary-orange": "#F58634",
        "primary-yellow": "#FFC94B",
        "cool-black": "#222222",
        "bright-white": "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
