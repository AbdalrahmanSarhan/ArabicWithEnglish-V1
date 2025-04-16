export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#90cafc',
          400: '#5eaef9',
          500: '#3b91f2',
          600: '#2575e6',
          700: '#1c5ed0',
          800: '#1c4da6',
          900: '#1c4382',
          950: '#142a53',
        },
        secondary: {
          50: '#f2f7fc',
          100: '#e3edf7',
          200: '#c5dcef',
          300: '#94c1e3',
          400: '#5ea0d2',
          500: '#3b82bf',
          600: '#2969a3',
          700: '#235585',
          800: '#21476e',
          900: '#1f3c5c',
          950: '#14263d',
        },
        accent: {
          gold: {
            light: '#fff7e0',
            DEFAULT: '#e6b012',
            dark: '#a07910',
          },
          navy: {
            light: '#e6f0ff',
            DEFAULT: '#1e3a8a',
            dark: '#172554',
          },
          green: {
            light: '#e7f5ee',
            DEFAULT: '#2e7d54',
            dark: '#1c5037',
          }
        },
        dark: {
          100: '#1e293b',
          200: '#172033',
          300: '#111827',
          400: '#0f172a',
          500: '#0b111f',
          600: '#080c17',
        },
        light: {
          100: '#ffffff',
          200: '#f8fafc',
          300: '#f1f5f9',
          400: '#e2e8f0',
          500: '#cbd5e1',
          600: '#94a3b8',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scale': 'scale 1s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      padding: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      margin: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      gap: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dots-pattern': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
        'glow-primary': '0 0 15px rgba(0, 240, 216, 0.5)',
        'glow-secondary': '0 0 15px rgba(168, 85, 247, 0.5)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
}