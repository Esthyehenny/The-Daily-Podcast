/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        veryLightGray: '#F7F7F7',
        lightGray: '#8F8F8F',
        mediumGray: '#5E5E5E',
        darkGray: '#333333',
        veryDarkGray: '#1A1A1A',
        brightYellow: '#FFC107 '
      }
    },
  },
  plugins: [],
}

