/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
           './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          xs:"1rem",
          sm:'1rem',
          md:'1.5rem',
          lg:'2rem',
          xl:'3rem',
        },
      }
    },
  },
  plugins: [  
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}

