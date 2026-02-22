/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6EC1E4",
        secondary: "#FFD166",
        accent: "#EF476F",
        mint: "#A8E6CF",
        lavender: "#CDB4DB",
        background: "#F9FBFF",
        textDark: "#2E2E2E"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      }
    },
  },
  plugins: [],
};