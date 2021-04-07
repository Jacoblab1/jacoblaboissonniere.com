/*
* A tailwinds config file used to generate atomic utility css classes.
* See: https://tailwindcss.com/docs/configuration/
* Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*
* Run '$ npm run css:dev' to compile changes in this file.
*/
const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],
    theme: {
      colors: {
        // Build your palette here
        white: colors.white,
        gray: colors.trueGray,
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'warm-gray': colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        yellow: colors.yellow,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        'brand-blue': {
          DEFAULT: '#CBF6FF'
        },
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
         '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          around: '0 5px 50px -8px rgba(0, 0, 0, 0.20)',
          none: 'none',
      },
      fontFamily: {
        header: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      extend: {
        boxShadow: {
          xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        }
      }
    },
    variants: {
      fontSize: ['responsive', 'hover'],
      borderWidth: ['first', 'responsive', 'last', 'odd', 'even', 'hover', 'focus'],
      borderRadius: ['first', 'responsive', 'last', 'odd', 'even', 'hover', 'focus'],
      backgroundImage: ['hover'],
      borderColor: ['first', 'last', 'hover', 'odd', 'even'],
      extend: {
         display: ['responsive', 'hover', 'focus', 'group-hover', 'odd', 'even'],
         backgroundColor: ['odd', 'even'],
         rotate: ['odd', 'even'],
         textAlign: ['responsive', 'hover', 'focus', 'odd', 'even']
      }
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }
