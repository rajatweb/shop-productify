/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include Remix app files
    './components/**/*.{js,ts,jsx,tsx}', // If you have additional folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}