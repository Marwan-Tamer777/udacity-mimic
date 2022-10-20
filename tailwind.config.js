module.exports = {
  content: [ './src/components/**/*.{html,js}'],
  theme: {
    extend: {
      // flex: {
      //   "1/3": "1 1 30%",
      // },
      colors: {
        udacity:{
          "main":"#02B3E4",
          "interactive":{
            "click":"#017a9b",
            "focus":"#014052",
            "focus-border":"#02B3E4",
            "from":{
              "navy":{
                "lowOpacity":"dd"
              },
            },
          },
          "text":{
            "header":"#1f2932",
            "black":"#2e3d49",
            "white":"#fff",
            "gray":"#c8cdd2"
          },
          'nav':"#1f2932",
          "black":"#0f2b3d",
          "navy":"#02b3e4",
          "grayDark":"rgba(31,41,50,.5)",
          "emerald":"#2e3d49",
          "emeraldLight":"#02ccba",
          "white":"#fff",
          "greenDark":"#018377",
          "greenLight":"#15c26b"
        }        
      },
      boxShadow: {
        "boxx":{
          "white":"0 4px 8px 0 rgb(17 22 26 / 16%), 0 4px 8px 0 rgb(17 22 26 / 8%), 0 8px 16px 0 rgb(17 22 26 / 4%)"
        },
        'udacity-focused': '0px 0px 0px 4px rgb(2 179 228)',
        "udacity-hovered":"0 0 8px 0 rgb(17 22 26 / 6%), 0 4px 16px 0 rgb(17 22 26 / 8%), 0 8px 12px 0 rgb(17 22 26 / 6%), 0 16px 24px 0 rgb(17 22 26 / 4%);",
        'udacity-standard':"0 4px 8px 0 rgb(17 22 26 / 16%), 0 4px 8px 0 rgb(17 22 26 / 8%), 0 8px 16px 0 rgb(17 22 26 / 4%)"
      },
      backgroundImage:{
        "courseCard":"linear-gradient(180deg,rgba(3,7,25,.57),transparent),linear-gradient(315deg,#02ccba,#02b3e4)"
      },
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
