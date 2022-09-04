/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        profit: '#1ccb22',
        loss: '#ff5a5a',
        'custom-black': '#171717',
        'custom-grey': '#979797',
        'custom-blue1': '#0a4ee2',
        'custom-blue2': '#dbeafe',
      },
    },
  },
  plugins: [],
};
