/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1A75BB',
          light: '#4A97D4',
          dark: '#155F9C',
        },
        orange: {
          DEFAULT: '#F7941D',
          light: '#F7B455',
          dark: '#D9820A',
        },
        lime: {
          DEFAULT: '#B8DB8B',
          dark: '#6FA33E',
        },
        navy: {
          DEFAULT: '#092A49',
          light: '#123B66',
          dark: '#071C33',
        },
        sky: '#EAF3FC',
        cream: '#FFF3E3',
        mint: '#EBF5DA',
        ink: '#092A49',
        muted: '#5B6B7C',
        accent: {
          DEFAULT: '#1A75BB',
          light: '#4A97D4',
          dark: '#155F9C',
        },
        teal: {
          DEFAULT: '#6FA33E',
          light: '#B8DB8B',
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
        card: '0 4px 24px rgba(9, 42, 73, 0.08)',
        'card-hover': '0 18px 45px rgba(9, 42, 73, 0.16)',
        button: '0 8px 20px rgba(247, 148, 29, 0.28)',
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
