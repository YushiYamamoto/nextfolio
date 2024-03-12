/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': {'max': '640px'},

      'desktop': {'min': '640px'},
      
      'desktopXL': {'min': '1024px'},

    },
    extend: {
      colors: {
        lightcyan: '#84ffff', // Define aqua color with hexadecimal value
        gradientLeft: '#1e88e5',
        gradientRight: '#8e24aa',
      },
      animation: {
        blinking: "blinking 10s linear infinite",
        scalepulse: "scalepulse 8s ease-in-out infinite",
        fadeIn: "fadeIn 5s"
      },
      keyframes: {
     
        fadeIn: {
          from: { opacity: 0},
          to: { opacity: 1}
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        blinking: {
          to: { "background-position": "400%"}
        },
        scalepulse: {
          '0%': { "scale": "1" },
         '50%': { "scale": "1.15" },
         '100%': { "scale": "1" },
        }
        
        
      },
      maxHeight: {
        'lg': '512px',
        'md': '448',
        'sm': '384'
      },

      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [],
}