const plugin = require('tailwindcss/plugin')

const { ovrriedWithRoot10PX } = require('./scripts/config/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...ovrriedWithRoot10PX,
      screens: {
        xs: '375px',
        // => @media (min-width: 375px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1640px) { ... }
        '3xl': '1640px',
        maxxl: '1920px'
      },
      // 两种字体 LexendDeca 和 Lexend
      fontFamily: {
        // lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        // lexendDeca: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1E1C2C'
      }
    }
  },

  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: { fontSize: '10px' }
      })
    })
  ]
}
