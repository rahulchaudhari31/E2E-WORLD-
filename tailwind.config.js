/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1F77C0',
          light: '#4A97D4',
          dark: '#155F9C',
        },
        orange: {
          DEFAULT: '#F59A1F',
          light: '#F7B455',
          dark: '#D9820A',
        },
        lime: {
          DEFAULT: '#B7DC8B',
          dark: '#6FA33E',
        },
        navy: {
          DEFAULT: '#0B2A4A',
          light: '#123B66',
          dark: '#071C33',
        },
        sky: '#EAF2FB',
        cream: '#FEF3E3',
        mint: '#E8F3DD',
        ink: '#0B2A4A',
        muted: '#5B6B7C',
        accent: {
          DEFAULT: '#1F77C0',
          light: '#4A97D4',
          dark: '#155F9C',
        },
        teal: {
          DEFAULT: '#6FA33E',
          light: '#B7DC8B',
          dark: '#557F2F',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        button: '9999px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(11, 42, 74, 0.08)',
        'card-hover': '0 18px 45px rgba(11, 42, 74, 0.16)',
        button: '0 8px 20px rgba(245, 154, 31, 0.28)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
};
