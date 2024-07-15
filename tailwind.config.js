/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = { 
  extend: {
    fontSize: {
      '6xl': '4rem',
      '8xl': '6rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'gray': '#1e1e1e',
      'white': '#ffffff',
      'lightpurple': '#cfa1ff',
      'midpurple': '#764ba2',
      'darkpurple': '#7978FF',
      'lightblue': '#57eaef',
      'midblue': '#0291ff',
      'darkblue': '#1a202c',
      'yellow': '#f7d070',
    },
  },
  container: {
    // center: true,
  },
  fontFamily: {
    'display': [ 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ],
  },
}; 
export const darkMode = 'selector';
export const plugins = [];