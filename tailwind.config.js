/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customBlue: '#B9D9EB', // light blue
      },
      fontFamily: {
        'source': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}

