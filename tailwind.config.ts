import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Play4Ward — Haitian blue + coral
        ink: '#0f2f57', // deepest blue, for dark sections / headings
        blue: {
          DEFAULT: '#123a6b',
          600: '#123a6b',
          500: '#1c4f8f',
          400: '#3a6fb0',
        },
        coral: {
          DEFAULT: '#ff5a4d',
          600: '#e94436',
          400: '#ff7d72',
        },
        gold: {
          DEFAULT: '#f5b53d',
          600: '#e0a026',
        },
        sand: '#fbf8f3', // warm off-white background
        cream: '#f4eee3', // slightly deeper warm tone
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,47,87,0.04), 0 12px 32px -12px rgba(15,47,87,0.18)',
        lift: '0 20px 50px -20px rgba(15,47,87,0.35)',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(1.2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-arc': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
