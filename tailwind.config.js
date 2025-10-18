export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#f9e6e6',
          200: '#f5c8c8',
          300: '#eba9a9',
          400: '#e07c7c',
          500: '#c54e4e',
          600: '#9e2a2a',
          700: '#8a2424',
          800: '#732020',
          900: '#5f1c1c',
        },
        secondary: {
          50: '#ecfffd',
          100: '#c2fffc',
          200: '#86fff9',
          300: '#4cf3f1',
          400: '#20d0ce',
          500: '#0cb3b1',
          600: '#0a8e8d',
          700: '#0e706f',
          800: '#125959',
          900: '#125872',
        },
        accent: {
          50: '#fff1f1',
          100: '#ffe4e4',
          200: '#fecfcf',
          300: '#fda8a8',
          400: '#fe7c7c',
          500: '#fe5955',
          600: '#ef2b27',
          700: '#ca1e1a',
          800: '#a71c18',
          900: '#891c19',
        },
      },
    },
  },
  plugins: [],
}