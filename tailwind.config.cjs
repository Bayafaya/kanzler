/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color': '#333333',
        'header-background': '#F8F8F8',
        'catalog-button-background': '#F8F0F0',
        'text-color':' #333333',
        'blue-text':'#5178DC',
        'red-text':' #E11E26',
        'confirm-the-order-background':' #EA5A5A',
        'inputs-background':' #F6F6FC',
        'shadow':' 20px 20px 80px rgba(0, 0, 0, 0.03)',
        'radius':' 5px',
        'footer-background':' #262626',
        'background-logo-color':'#5F5F5F',
        'search-background':' #F7F7F7',
      },
      fontSize:{
        'head-txt':['14px',{
           lineHeight: '16px',
        }]
      },
      screens:{
        '840px': '840px',
      },
      fontFamily:{
        'inter':['Inter'],
      },
    },
  },
  plugins: [],
}
