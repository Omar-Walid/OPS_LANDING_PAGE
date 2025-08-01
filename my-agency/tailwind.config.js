/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-950': '#0a0f2c',
      },
    },
  },
  plugins: [],
}
