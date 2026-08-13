/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f6ff",
          100: "#f0edff",
          200: "#ddd5ff",
          300: "#c9b5ff",
          400: "#ad80ff",
          500: "#9d56ff",
          600: "#8b35ff",
          700: "#7c1aff",
          800: "#6b14d8",
          900: "#5a0fb3",
        },
        secondary: {
          50: "#faf8f3",
          100: "#f4f1e7",
          200: "#e9e4cf",
          300: "#ddd6b7",
          400: "#d2c99f",
          500: "#c7bb87",
          600: "#b8a670",
          700: "#a99558",
          800: "#8f7a44",
          900: "#756433",
        },
        accent: {
          pink: "#d946a6",
          teal: "#0d9488",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      spacing: {
        section: "6rem",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
