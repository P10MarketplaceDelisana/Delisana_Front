/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'brown-letter': '#330F0F',
        'beige-bg': '#f3ece3',
        'granate': '#AC0231',
        'blue-sky': '#88CAD6',
        'granate-dark': '#660000',
        'granate-light': '#AA0000',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],

}

