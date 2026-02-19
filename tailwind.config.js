/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b242af',
        'primary-dark': '#8f3590',
        'brand': {
          DEFAULT: '#b242af',
          dark: '#8f3590',
          light: '#d68ad4',
        },
      },
      fontFamily: {
        'montreal': ['Neue Montreal', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config
