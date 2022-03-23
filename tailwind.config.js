module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:"'Roboto', sans-serif",
        brand:"'Pacifico', cursive"
      },
      fontSize:{
        'xs': '.75rem',
      },
      colors:{
        'churpy-green':'#40ba58',
        'churpy-navy':'#0a122a',
        'churpy-dark':'#283046',
        'brand-gray':'#656B7A',
        'prose':'#474a52'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
