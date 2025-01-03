/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Inria Serif', 'serif'],
        normal: ['Inter', 'serif'],
      },
      colors: {
        lightGreen: '#F5F9F2',

      },
    },
  },
  plugins: [],
}

