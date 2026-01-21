/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#FFFFFF',
        'secondary-bg': '#F7F7F7',
        'primary-text': '#111111',
        'secondary-text': '#555555',
        'border': '#E5E5E5',
        'card-hover': '#F2F2F2',
        'accent': '#0A84FF',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', '40px'],
        'h2': ['24px', '28px'],
        'h3': ['20px', '22px'],
        'paragraph': ['15px', '17px'],
      },
      fontWeight: {
        'heading': '500',
        'heading-bold': '600',
        'text': '300',
        'text-normal': '400',
        'button': '500',
      },
    },
  },
  plugins: [],
}
