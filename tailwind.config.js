import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Keyframes personnalisés
      keyframes: {
        "gradient-slow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      // Animations personnalisées
      animation: {
        "gradient-slow": "gradient-slow 8s ease infinite",
        "spin-slow": "spin 2s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      // Background size pour l'animation de gradient
      backgroundSize: {
        "200%": "200% 200%",
      },
      // Couleurs personnalisées
      colors: {
        spinner: {
          light: "#e5e7eb", // gray-200
          dark: "#4b5563", // gray-600
          primary: "#00ff00", // vert néon
        },
      },
    },
  },
  plugins: [animate],
  darkMode: "class",
};
