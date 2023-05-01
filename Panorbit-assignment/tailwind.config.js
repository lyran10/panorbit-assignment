/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //
      // 
      boxShadow: {
        "before": '5px 5px 0px 5px #F5F5F5',
        "after": '10px -10px 0px 10px #F5F5F5',
        "userAccount" : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
      },
    },
  },
  plugins: [],
}

