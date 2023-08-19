/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{svg,png,jpg,jpeg}'
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'black': '#000000',
      'ghost-white': '#F8F8FF',
      'gainsboro': '#DCDCDC',
      'dim-grey':'#696969',
      'sky-blue-light':'#5a9cb8',
      'chinese-silver': '#ccc',
      'nero': '#272727',
      'navy-shade':'#1E60C3',
      'app-body-color': '#f6f6f6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage:{
        'app-logo':`url(/assets/img/dalmirah.jpeg)`
      },
      boxShadow:{
        'header': '8px 0px 4px 4px #F8F8FF'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '1/10': '10%',
        '1/5': '20%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '7/10': '70%',
        '4/5': '80%',
        '1/100': '1%',
        '9/10': '90%',
        '1/6': '16.67%',
        '1/3': '33.33%',
        '1/4': '25%',
        '3/4': '75%',
        '1/20': '5%',
        '3/20': '15%',
        'inherit': 'inherit'
      },
    }
  },
  plugins: [
  ],
}
