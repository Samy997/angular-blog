/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6941C6',
        secondary: '#F9F5FF',
        primary2: '#42307D',
        title: '#101828',
        desc: '#667085'
      }
    },
  },
  plugins: [],
};
