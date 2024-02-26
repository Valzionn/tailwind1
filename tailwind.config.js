/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      gray: {
        500: '#34495e'
      },
      light: {
        500: '#ecf0f1'
      },
      green: {
        500: '#22c55e'
      },
      orange: {
        500: '#f39c12'
      },
      blue: {
        500: '#3b82f6'
      },
    },
    extend: {},
  },
  plugins: [],
}

