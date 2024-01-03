/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
            './dist/*.html',
            './dist/recipes/*/*.html'],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'lato': ['Lato']
      }
    },
  },
  plugins: [],
}
