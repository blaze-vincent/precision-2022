module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand_purple: {
          100:  '#e8e7ee',
          500: '#4c487b',
          600: '#322f50',
        },
        muted_white: {
          100: '#fbfbfb'
        }
      }
    },
  },
  plugins: [],
}
