/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bt-color-1': 'rgb(239, 193, 11)',
        'bg-bt-color-uno': 'rgb(11, 239, 144)',
        'bg-body-color-left': 'rgb(20 37 44)', /* site bg color for grey(left) to tan (right)*/
        'bg-body-color-right': 'rgb(169 150 135)', 
        'cur-text-tan': 'rgb(255 205 162)', /*tan font color for currency rate*/
        'bg-cur-symb-grey': 'rgb(86 86 86)',
        'selection-aqua': 'rgb(80, 112, 121)', /*text selection highlight for site*/
          },
          screens: {
            'sm' : '640px',
            // => @media (min-width: 640px) { ... }
            'md' : '768px',
            // => @media (min-width: 768px) { ... }
            'lg' : '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl' : '1280px',
            // => @media (min-width: 1280px) { ... }
          },
    },
  },
  plugins: [],
}
