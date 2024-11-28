/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1280px",
      },
      colors: {
        main: "var(--main)",
        "dark-main": "var(--dark-main)",
        accent: "var(--accent)",
        sec: "var(--sec)",
      },
    },
  },
  plugins: [],
};
