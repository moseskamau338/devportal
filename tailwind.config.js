module.exports = {
  darkMode:'class',
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
        'light-green':'#E5F8ED',
        'success':'#55C770',
        'churpy-navy':'#0a122a',
        'churpy-dark':'#283045',
        // dark mode vars
        'churpy-night':'#0F172A',
        'churpy-night-box':'#1E293B',

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
