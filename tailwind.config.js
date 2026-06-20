/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          card: '#1e1e1e',
          border: '#2a2a2a',
          header: '#000000',
        },
        accent: {
          DEFAULT: '#00bcd4',
          hover: '#03fcec',
          glow: 'rgba(0, 188, 212, 0.5)',
          soft: 'rgba(0, 188, 212, 0.08)',
        },
        muted: '#ccc',
        footer: '#888',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1160px',
      },
      borderRadius: {
        xl: '26px',
        '2xl': '34px',
      },
      boxShadow: {
        accent: '0 14px 36px rgba(0, 188, 212, 0.06)',
        card: '0 12px 28px rgba(0, 0, 0, 0.14)',
        lg: '0 20px 50px rgba(0, 0, 0, 0.24)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
