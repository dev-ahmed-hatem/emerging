/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FAAF40",
          50: "#fff8eb",
          100: "#fdeac8",
          200: "#fcd28b",
          300: "#faaf40",
          400: "#f99a26",
          500: "#f3760d",
          600: "#d75408",
          700: "#b2370b",
          800: "#912a0f",
          900: "#772410",
          950: "#440f04",
        },
        minsk: {
          DEFAULT: "#468b9b",
          50: "#f2f9f9",
          100: "#ddedf0",
          200: "#bfdde2",
          300: "#93c4cd",
          400: "#5fa3b1",
          500: "#468b9b",
          600: "#3b6f7f",
          700: "#355c69",
          800: "#324d58",
          900: "#2d424c",
          950: "#1a2a32",
        },
        "fun-green": {
          DEFAULT: "#00ca4b",
          50: "#ecfff4",
          100: "#d3ffe6",
          200: "#aaffd0",
          300: "#69ffac",
          400: "#21ff81",
          500: "#00f25f",
          600: "#00ca4b",
          700: "#009e3e",
          800: "#007332",
          900: "#02652e",
          950: "#003917",
        },
        whisper: "#F0F0F5",

        // portfolio
        primary: {
          50: "#e8f0ff",
          100: "#c5d6ff",
          200: "#9ebaff",
          300: "#759cff",
          400: "#4d7eff",
          500: "#246efe",
          600: "#1e60e6",
          700: "#174ec4",
          800: "#123da0",
          900: "#0b2872",
        },
        secondary: {
          50: "#edfdff",
          100: "#c8f7fe",
          200: "#a2f1fe",
          300: "#7cebfe",
          400: "#55e5fe",
          500: "#6de7fe",
          600: "#3ed8f3",
          700: "#1dc3df",
          800: "#0ba9c3",
          900: "#0588a0",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        cairo: ["Cairo", "ui-sans-serif", "system-ui", "ui-sans", "sans-serif"],
        "committee-primary": ["Cairo", "Almarai", "sans-serif"],
        "committee-secondary": ["Amiri", "serif"],
        "quran-primary": ["Noto Naskh Arabic", "Harir", "serif"],
        "quran-secondary": ["Lotus", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".margin-container": {
          marginInline: "1rem",

          "@screen sm": {
            // maxWidth: "640px",
            marginInline: "2rem",
          },
          "@screen md": {
            // maxWidth: "768px",
            marginInline: "3rem",
          },
          "@screen lg": {
            // maxWidth: "1024",
            marginInline: "4rem",
          },
          "@screen xl": {
            // maxWidth: "1280px",
            marginInline: "5rem",
          },
          "@screen 2xl": {
            // maxWidth: "1536px",
            marginInline: "7rem",
          },
        },

        ".padding-container": {
          paddingInline: "1rem",

          "@screen sm": {
            paddingInline: "2rem",
          },
          "@screen md": {
            paddingInline: "3rem",
          },
          "@screen lg": {
            paddingInline: "4rem",
          },
          "@screen xl": {
            paddingInline: "5rem",
          },
          "@screen 2xl": {
            paddingInline: "7rem",
          },
        },
      });
    },
  ],
};
