/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./preview.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#A62C37',
          50: '#FDF2F3',
          100: '#FBE4E6',
          200: '#F7C9CD',
          300: '#F0A1A8',
          400: '#E46B76',
          500: '#D53D4B',
          600: '#C0392B',
          700: '#A62C37',
          800: '#89252F',
          900: '#72242C',
          950: '#3F0F14',
        },
        apple: {
          bg: '#F5F5F7',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          text: '#1D1D1F',
          subtext: '#86868B',
          darkBg: '#000000',
          darkCard: '#1C1C1E',
          darkBorder: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 20px 48px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'crimson-glow': '0 8px 24px rgba(166, 44, 55, 0.35)',
      },
      borderRadius: {
        'apple': '20px',
        'apple-lg': '28px',
      }
    },
  },
  plugins: [],
}
