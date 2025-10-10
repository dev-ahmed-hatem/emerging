/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "ui-sans-serif", "system-ui", "ui-sans", "sans-serif"],
      },
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
