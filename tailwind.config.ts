import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // "Standards navy": deeper, more institutional than the old sky blue.
        primary: {
          50: '#eef4fb',
          100: '#d9e6f5',
          200: '#b3cdea',
          300: '#83acd9',
          400: '#4f86c4',
          500: '#2468b0',
          600: '#0f559c',
          700: '#0c457f',
          800: '#0d3966',
          900: '#0e2f52',
        },
        ink: '#0e2238',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
