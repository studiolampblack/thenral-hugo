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
          }
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      fontWeight: {
        ui: 500,
        uiSmall: 400,
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