/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
      mediaHover: { raw: "(hover: hover)" },
    },
    // THEME
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {},
      fontSize: {},
      // BORDER RADIUS
      borderRadius: {
        small: "24px",
        medium: "40px",
        large: "60px",
      },
      // ALL COLORS
      colors: {
        body: "#303036",
        black: {
          DEFAULT: "#000000",
          light: "#6B7280",
        },
        white: {
          DEFAULT: "#FFFFFF",
          light: "#F8F8F8",
          dark: "#F3F3F3",
        },
        blue: {
          DEFAULT: "#1E3A8A",
          light: "#DBEAFE",
          dark: "#1E3A8A",
          accent: "#BFDBFE",
          focus: "#3B82F6",
        },
        violet: {
          DEFAULT: "#3D2B84",
          light: "#AD94F9",
          dark: "#3D2B84",
        },
        // orange: {
        //   DEFAULT: "#FFA401",
        //   light: "#EBFF00",
        //   dark: "#FFA401",
        // },
        orange: {
          DEFAULT: "#7c2d12",
          light: "#ffedd5",
          dark: "#7c2d12",
          accent: "#fed7aa",
        },
        notify: {
          success: "#53B82F",
          error: "#FF5660",
          disabled: "#CCCCCC",
        },
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "32px",
          xl: "64px",
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {},
      },
      // ANIMATION
      animation: {
        side: "side 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
