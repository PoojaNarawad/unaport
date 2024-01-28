/** @type {import('tailwindcss').Config} */

module.exports = {
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '200px': '200px',
      },
    },
  },
  plugins: [],
}
