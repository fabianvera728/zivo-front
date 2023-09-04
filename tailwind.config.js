const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#8659AA',
      'primary-light': '#F7F5FF',
      'primary-dark': '#3A275B',
      secondary: '#3A275B',
      white: '#ffffff',
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: '#8659AA',
            'primary-light': '#F7F5FF',
            'primary-dark': '#3A275B',
            secondary: '#3A275B',
            white: '#ffffff',
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: '#8659AA',
            'primary-light': '#F7F5FF',
            'primary-dark': '#3A275B',
            secondary: '#3A275B',
            white: '#ffffff',
          },
        },
      },
    }),
  ],
};
