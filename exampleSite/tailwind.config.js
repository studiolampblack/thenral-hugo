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
        lora: ['Lora', 'serif'],
        source: ['Source Code Pro', 'monospace'],
        mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'], // Override default monospace stack
      },
      typography: {
        DEFAULT: {
          css: {
            'button, input, select, textarea': {
              fontWeight: '500',
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
        uppercase: '0.03em', // Add custom letter-spacing for uppercase
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}