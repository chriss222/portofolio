/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./index.html", 
    ],
  theme: {
    extend: {
        colors: {
            "deep-blue": "#010026",
            "lighter-blue": "#524dff",
            blue: "#2CBCE9",
            red: "#DC4492",
            yellow: "#FDCC49",
            grey: "#ededed",
            "dark-grey": "#757575",
            "opaque-black": "rgba(0,0,0,0.35)",
        },
        backgroundImage: (theme) => ({
            "gradient-rainbow":
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
            "gradient-rainblue":
            "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
            "board-gradient": "linear-gradient(90deg, rgba(1,0,38,1) 0%, rgba(2,2,128,1) 40%, rgba(1,0,38,1) 100%)",
        }),
        boxShadow: {
            'custom-right': "11px -5px 20px 5px rgba(29,35,125,0.7)",
            'custom-left': "-17px -5px 20px 5px rgba(29,35,125,0.7)",
        },
        screens: {
            xs: "430px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        }
    },
  },
  plugins: [],
}
