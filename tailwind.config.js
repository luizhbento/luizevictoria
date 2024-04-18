/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['"Antic Didone"', 'sans-serif'],
        contentFont: ['Roboto', 'sans-serif'],
        menuFont: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
