/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080c14',
          800: '#0d1424',
          700: '#111b2e',
          600: '#162038',
          500: '#1c2940',
        },
        electric: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        'neon': '0 0 20px rgba(56,189,248,0.3), 0 0 40px rgba(56,189,248,0.1)',
        'neon-sm': '0 0 10px rgba(56,189,248,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glow: {
          from: { boxShadow: '0 0 10px rgba(56,189,248,0.2)' },
          to: { boxShadow: '0 0 30px rgba(56,189,248,0.6), 0 0 60px rgba(56,189,248,0.2)' },
        }
      }
    },
  },
  plugins: [],
}
