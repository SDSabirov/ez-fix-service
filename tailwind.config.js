/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      //primary
      'deep-blue':'#003366',
      'steel-gray':'#4A4A4A',
      'bright-orange':'#FF6F00',
      //secondary
      'light-gray':'#F0F0F0',
      'sky-blue':'#66B2FF',
      'accent-green':'#4CAF50',

      'dark-navy':'#002233',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

