module.exports = {
  purge: {
       enabled: true,
       content: ["./src/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // flex: {
      //   "1/3": "1 1 30%",
      // },
      // colors: {
      //   blue: {
      //     dark: "#486ebb",
      //     udacity: "#017a9b",
      //   },
      // },
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
      // gradientColorStops: ["hover"],
    },
  },
  plugins: [],
};
