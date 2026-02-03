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
        // Light mode colors (existing)
        'primary-bg': '#FFFFFF',
        'secondary-bg': '#F7F7F7',
        'primary-text': '#111111',
        'secondary-text': '#555555',
        'border': '#E5E5E5',
        'card-hover': '#F2F2F2',
        'accent': '#3B82F6', // Updated to match Accent Blue
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-500': '#6B7280',
        'blue-400': '#60A5FA',
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
        // Dark mode colors
        'dark-bg': '#0F172A', // Deep Blue
        'dark-surface': '#1E293B',
        'dark-border': '#334155',
        'dark-text': '#F8FAFC',
        'dark-text-secondary': '#94A3B8',
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
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'staggered-fade-in': 'staggeredFadeIn 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        staggeredFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
