module.exports = {
  content: [ "./src/Components/*.js"],
  purge: {
       enabled: true,
       content: [ "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // flex: {
      //   "1/3": "1 1 30%",
      // },
      colors: {
        udacity:{
          "main":"02B3E4",
          "interactive":{
            "click":"#017a9b",
            "focus":"#014052",
            "focus-border":"#02B3E4"
          },
          "text":{
            "header":"#1f2932",
            "black":"#2e3d49",
            "white":"#fff",
            "gray":"#c8cdd2"
          },
          'nav':"#1f2932",
          "black":"#0f2b3d",
          "grayDark":"rgba(31,41,50,.5)",
          "emerald":"#2e3d49",
          "white":"#fff",
          "greenDark":"#018377",
          "greenLight":"#15c26b"
        }        
      },
      boxShadow: {
        'udacity-focused': 'rgb(2 179 228) 0px 0px 0px 4px;',
      },
      // height: {
      //   nav: "7vh",
      //   list_item: "14",
      //   list: "93vh",
      //   smallerList: "85vh",
      // },
      // inset: {
      //   "top-nav": "7vh",
      // },
      animation: {
        fadeOutLeft: "fadeOutLeft 1s ease-in-out",
        fadeOutRight: "fadeOutRight 1s ease-in-out",
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in-out",
      },
      keyframes: {
        fadeOutLeft: {
          "0%": {},
          "100%": { transform: "translate(-30vh)", opacity: "0" },
        },
        fadeOutRight: {
          "0%": {},
          "100%": { transform: "translate(30vh)", opacity: "0" },
        },
        fadeInLeft: {
          "0%": { transform: "translate(-30vh)", opacity: "0" },
          "100%": {},
        },
        fadeInRight: {
          "0%": { transform: "translate(30vh)", opacity: "0" },
          "100%": {},
        },
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ["hover"],
    },
  },
  plugins: [],
};
