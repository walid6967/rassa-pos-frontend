/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'B-blue': '#00B4FF',
      'white': '#fff'
    },
    extend: {
      fontFamily:{
        Estedad : "Estedad",
      },
      fontSize: {
        "btnS": "20px",
      },
      colors:{
        btn:"#00B4FF",
        charts: "#E6F6FD",
        page:"#999999",
        gray_fac: "#666666",
        gray_line:"#DADADA",
        gray_input:"#FFFFFF",
        gray_button: "#F5F5F5",
        error: "#EB5252",
      }
    },
  },
  plugins: [],
}