/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Здесь можно добавить кастомные цвета из вашей дизайн-системы
      },
      fontFamily: {
        // Здесь можно добавить кастомные шрифты
      },
    },
  },
  plugins: [],
} 