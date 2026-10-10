/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF9',
          100: '#FAF7F2',
          200: '#F4EFEB',
          300: '#EBE3DC',
          400: '#DDD2C7',
          500: '#C9BBAE',
        },
        champagne: {
          50: '#FBF9F2',
          100: '#F7F2E3',
          200: '#EEE3C4',
          300: '#DFCD9B',
          400: '#CBB270',
          500: '#B89B4E',
          600: '#997D37',
          700: '#7A612A',
        },
        charcoal: {
          50: '#F7F6F5',
          100: '#EBE9E6',
          200: '#D5D1CB',
          300: '#B0AAA2',
          400: '#847D74',
          500: '#5F5850',
          600: '#433D37',
          700: '#2E2925',
          800: '#1D1A18',
          900: '#121110',
          950: '#0B0A09',
        },
        blush: {
          50: '#FAF6F5',
          100: '#F5ECE9',
          200: '#EBDAD5',
          300: '#DCBFB8',
          400: '#C89D94',
          500: '#B27F75',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Marcellus', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 17, 16, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(18, 17, 16, 0.08)',
        'luxury': '0 20px 40px -15px rgba(18, 17, 16, 0.12)',
        'gold-glow': '0 0 25px -5px rgba(203, 178, 112, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
