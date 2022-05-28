const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',  
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {fontFamily: {
      sans: ['Raleway', ...fontFamily.sans],
      display: ['Raleway', ...fontFamily.sans],
      body: ['Raleway', ...fontFamily.sans],
    },	},
  },
  plugins: [require('@tailwindcss/typography')],
}
