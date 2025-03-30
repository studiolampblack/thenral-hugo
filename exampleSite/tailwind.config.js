/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "content/**/*.md",
      "./themes/thenral-hugo/**/*.{html,js}"
    ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'button, input, select, textarea': {
              fontWeight: '500',
            },
            'code, pre': {
              fontFamily: 'Source Code Pro, monospace',
            },
          }
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        lora: ['Lora', 'serif'],
        source: ['Source Code Pro', 'monospace'],
      },
      fontWeight: {
        ui: 500,
        heading: 700,
        hero: 800,
        body: 400,
      },
      letterSpacing: {
        uppercase: '0.03em', // Add custom letter-spacing for uppercase
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}