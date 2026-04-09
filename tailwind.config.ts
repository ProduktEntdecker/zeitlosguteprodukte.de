import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Navy (trust, timelessness, sophistication)
        navy: {
          50: '#f0f3f9',
          100: '#dae1ef',
          200: '#b8c7e0',
          300: '#8ba5cb',
          400: '#5d7eb2',
          500: '#3d5d96',
          600: '#2f4a7c',
          700: '#283d65',
          800: '#243454',
          900: '#1a2744',
          950: '#0f172a',
        },
        // Accent - Cognac/Leather Brown (warmth, heritage, quality) — 600/700 darkened for WCAG AA
        cognac: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8bc',
          300: '#e9bc8f',
          400: '#de9a5f',
          500: '#c47a38',
          600: '#a35a28',
          700: '#8a4820',
          800: '#6e3a1c',
          900: '#5a3019',
          950: '#3a1b11',
        },
        // Background - Warm Cream (elegance, comfort, premium)
        creme: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e8',
          300: '#f5ead8',
          400: '#eddcc1',
          500: '#e3c9a6',
          600: '#d4b085',
          700: '#c09567',
          800: '#9d7a55',
          900: '#816548',
          950: '#453524',
        },
      },
      fontFamily: {
        serif: ['var(--font-libre)', 'Libre Baskerville', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Soft premium type scale — Libre Baskerville is optically larger, so sizes are slightly reduced
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '400' }],
        'title': ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.005em', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0.005em' }],
        'body': ['1rem', { lineHeight: '1.65', letterSpacing: '0.005em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in-up': 'fadeInUp 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in-down': 'fadeInDown 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-in-left': 'slideInLeft 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-in-right': 'slideInRight 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'float': 'float 4s cubic-bezier(0.37, 0, 0.63, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(26, 39, 68, 0.08), 0 2px 8px -2px rgba(26, 39, 68, 0.04)',
        'elegant-lg': '0 10px 40px -4px rgba(26, 39, 68, 0.12), 0 4px 16px -4px rgba(26, 39, 68, 0.06)',
        'elegant-xl': '0 20px 60px -8px rgba(26, 39, 68, 0.15), 0 8px 24px -8px rgba(26, 39, 68, 0.08)',
        'inner-glow': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.1)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'out-soft': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
