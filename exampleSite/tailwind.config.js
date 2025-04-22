/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "content/**/*.md",
      "./themes/thenral-hugo/**/*.{html,js}"
    ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        literata: ['Literata', 'serif'],
        source: ['Source Code Pro', 'monospace'],
        mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            'button, input, select, textarea': {
              fontWeight: '500',
            },
            blockquote: { // Typographically appropriate blockquotes
              fontStyle: 'normal',
              fontSize: '90%',
              quotes: 'none',
            },
            'code': {
              fontWeight: '400',
              fontSize: '1em'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          }
        },
      },
      fontWeight: {
        ui: 500,
        heading: 700,
        hero: 800,
        body: 400,
      },
      letterSpacing: {
        uppercase: '0.03em', // Typographically tweak uppercase
      },
      colors: {
        'amazon-yellow': '#FF9900',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}