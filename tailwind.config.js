module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    backgroundSize: {
      '400%': '400%'
    },
    extend: {
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '400% 0'
          }
        }
      },
      animation: {
        'move-bg': 'move-bg 16s infinite linear'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
