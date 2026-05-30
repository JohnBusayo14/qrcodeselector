/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Kid-friendly, rounded type system
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fredoka', 'Baloo 2', 'Nunito', 'sans-serif'],
        fun: ['"Baloo 2"', 'Fredoka', 'sans-serif'],
      },
      colors: {
        ink: '#0B1220',
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        cta: '0 8px 24px rgba(79,70,229,0.30)',
      },
    },
  },
  plugins: [],
};
