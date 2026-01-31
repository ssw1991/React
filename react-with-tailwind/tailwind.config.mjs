/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue':'#1F509A',
      },
    },
  },
  plugins: [],
}