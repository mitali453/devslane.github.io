module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      DEFAULT: "0 10px 20px -10px #4361ee"
    },
    fontFamily:{
      'body' : ['Nunito', 'sans-serif']
    },
  
    extend: {
     
        
        
      
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"]
    },
  },
  plugins: [],
}
