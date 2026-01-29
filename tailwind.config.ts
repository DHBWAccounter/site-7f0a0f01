import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D9991",
        dark: "#1F1F1F",
        background: "#FFFFFF",
        foreground: "#1F1F1F",
        muted: "#F5F5F5",
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-proxima)", "Proxima Nova", "sans-serif"],
        serif: ["var(--font-garamond)", "Adobe Garamond Pro", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;