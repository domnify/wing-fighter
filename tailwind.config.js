/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "index.html"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

