/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      'purple-100': '#E5E0FF',
      'purple-700': '#6867AC',
      'cream-100': '#FFF2F2',
      'purple-800': '#555485',
      'email-100': '#FFADAD',
      'twitter-100': '#BAE6FD',
      'discord-100': '#A5B4FC',
      'github-100': '#41444B',
      'spotify-100': '#63FAA1',
      'email-500': '#D45D79',
      'twitter-500': '#5CC0F4',
      'discord-500': '#6D67E4',
      'github-500': '#333',
      'spotify-500': '#00FF69',
      'sun': '#FBC687',
      'moon': '#FFF2F2'
    },
    fontFamily: {
      'satoshi': ['Satoshi', 'sans-serif'],
      'clash-display': ['Clash Display', 'sans-serif']
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        wave: 'wave 1s infinite',
        fade: 'fade 0.4s ease-in',
        spin: 'spin 0.5s ease-in'
      },
      backgroundImage: {
        'night-sky': "url('/assets/img/night-sky-gray.jpeg')"
      }
    },
  },
  plugins: [],
};
