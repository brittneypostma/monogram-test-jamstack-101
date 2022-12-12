const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [],
  presets: [require('./tailwind.theme.cjs')]
}

module.exports = config
