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
        mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            'button, input, select, textarea': {
              fontWeight: '500',
            },
            '--tw-prose-body': 'var(--tw-prose-headings)', // Make text more readable
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
    },
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}