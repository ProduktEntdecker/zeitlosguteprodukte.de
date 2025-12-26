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
        // Accent - Cognac/Leather Brown (warmth, heritage, quality)
        cognac: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8bc',
          300: '#e9bc8f',
          400: '#de9a5f',
          500: '#d4803f',
          600: '#c66a34',
          700: '#a5522d',
          800: '#85432b',
          900: '#6c3926',
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
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial-style type scale
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '500' }],
        'title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
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
      },
    },
  },
  plugins: [],
}

export default config
