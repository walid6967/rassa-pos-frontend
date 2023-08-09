/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
        page:"#999999"
      }
    },
  },
  plugins: [],
}