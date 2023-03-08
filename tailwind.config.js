/**
 * * *  @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./slick.js", "./script.js"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        lightGreen: "#00DDA880",
        redCard: "#CF292999;",
        blueCard: "#0058DD99;",
        section: "#1A191A;",
        section2: " #161616;",
        section_blk: "#161616",
        Emerald: "#34d399",
        about_color: "#373737",
        list: "#BDBDBD;",
        bgBlack_trasparent: "rgba(24, 24, 24, 0.888)",
      },
      screen: {
        smarthphone: "360px",
      },
      keyframes: {
        ShowMenu: {
          "0%": {
            right: "-100vw",
          },
          "100%": {
            right: "-40px",
          },
        },
      },
    },

    fontFamily: {
      Logo: ["American Captain"],
      Link: ["SF Pro Display"],
      helvetica: ["Helvetica 45 Light"],
    },

    dropShadow: {
      shadow: ["text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25)"],
    },
  },
  plugins: [],
};
