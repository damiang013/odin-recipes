/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
            './dist/*.html',],
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
