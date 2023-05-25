/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./dist/**/*.{html,js}"],
  theme: { 
    screens: {
      'xxs': '100px',

      'xs': '360px',

      'sm': '620px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',

      'xl': '1740px'
      // => @media (min-width: 1440px) { ... }
    },
    fontSize: {
      xxxs: '1rem',
      xxs: '1.5rem',
      xs: '2rem',
      sm: '3rem',
      md: '4rem',
      lg: '5.5rem',
      xl: '8rem',
      xxl: '10rem'
    },
    extend: {
      height: {
        xs: '17vh',
        sm: '23vh',
        md: '32vh',
        lg: '40vh',
        xl: '60vh'
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'perm': ['"Permanent Marker"', 'cursive'],
        'darum': ['"Darumadrop One"', 'cursive']
      },
    },
  },
  plugins: [],
}

