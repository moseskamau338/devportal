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
      colors:{
        'churpy-green':'#40ba58',
        'churpy-navy':'#10163a',
        'churpy-dark':'#283046',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
