/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = { 
  extend: {},
  container: {
    center: true,
  },
  fontFamily: {
    'sans': [ 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ],
  }
}; 
export const darkMode = 'selector';
export const plugins = [];