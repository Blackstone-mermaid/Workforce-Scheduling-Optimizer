/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New theme palette: Mystification → First Snow
        brand: {
          900: '#2E3E6D',  // Mystification
          800: '#495589',  // Astronaut  
          700: '#7087BB',  // Orbital
          600: '#A2B7E4',  // Gladeye
          500: '#BBD0ED',  // Light Steel Blue
          400: '#D0DCEF',  // lighter
          300: '#DCE6F3',  // even lighter
          200: '#E5EDFA',  // First Snow
          100: '#EFF4FC',
          50:  '#F7FAFF',
        },
        ink: {
          900: '#1A2340',
          800: '#2E3E6D',
          700: '#3D4F7C',
          600: '#495589',
          500: '#64738F',
          400: '#8892A8',
          300: '#ACB4C4',
          200: '#CDD4E0',
          100: '#E5EDFA',
          50:  '#F7FAFF',
        },
        slate: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0',
          300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b',
          600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(46,62,109,0.08), 0 1px 2px -1px rgba(46,62,109,0.06)',
        'card-md': '0 4px 12px 0 rgba(46,62,109,0.1), 0 2px 4px -2px rgba(46,62,109,0.07)',
        'card-lg': '0 10px 24px 0 rgba(46,62,109,0.14), 0 4px 8px -4px rgba(46,62,109,0.08)',
        'glow': '0 0 20px rgba(112,135,187,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideIn: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        pulseSoft: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.7 } },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2E3E6D 0%, #495589 50%, #7087BB 100%)',
        'brand-light': 'linear-gradient(135deg, #E5EDFA 0%, #BBD0ED 50%, #A2B7E4 100%)',
        'page-bg': 'linear-gradient(160deg, #F7FAFF 0%, #EFF4FC 40%, #E5EDFA 100%)',
      }
    },
  },
  plugins: [],
}
