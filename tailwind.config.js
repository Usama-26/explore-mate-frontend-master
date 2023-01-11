/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/img/Decore-1@2x.png')",
      },
    },
  },
  plugins: [],
};
