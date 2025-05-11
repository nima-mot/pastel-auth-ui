module.exports = {
  darkMode: 'class', // 👈 این خط خیلی مهمه
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#a3c4f3',
        'pastel-green': '#51f861',
        'pastel-purple': '#cdb4db',
        'pastel-pink': '#ffb5e8',
        'pastel-yellow': '#ffffd1',
        'pastel-gray': '#e0e0e0',
        'pastel-green-dark': '#70f1cf',
      }
    },
  },
  plugins: [],
}
