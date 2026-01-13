/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'medium-brown': '#BB9457',
        'button-orange': '#BB9457',
      },
      fontSize: {
        'heading-xl': '46px',
        'carta' : '26px',
      },
      fontFamily: {
        'body': ['Lexend', 'sans-serif'],
        'heading': ['Shrikhand', 'cursive'],
        'typewriter': ['Lexend', 'sans-serif'],
        'carta' : ['Birthstone', 'sans-serif'],
      },
      letterSpacing: {
        'small': '2px',
      },
      textShadow: {
        'header-shadow': "2px 2px rgba(252, 64, 40, 0.3)",
      },
      height: {
        "banner-height": "40vh",
        "banner-height-mobile": "10vh",
      },
      backgroundImage: {
        'terrunio-overlay': "url('/terruFrente.jpg')",
      },
      backgroundColor: {
        'caribbean-yellow': '#6F1D1B'
      },
      borderRadius: {
        'button-border-radius': '10px'
      },
      spacing: {
        'button-margin': '15px auto'
      },
      screens: {
        '3xl': '2000px',
      },
      minWidth: {
        "1/3": "30%"
      },
    },
    plugins: [],
  }
}