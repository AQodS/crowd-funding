/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "pink-custom": "#FE9AA0",
      },
    },
  },
  plugins: [],
};
