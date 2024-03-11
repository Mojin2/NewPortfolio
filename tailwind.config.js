/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kdam: ["Kdam Thmor Pro", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
        Silkscreen: ["Silkscreen", "sans-serif"],
        PressStart2P: ["Press Start 2P", "system-ui"],
        Pixel: ["Pixelify Sans", "sans-serif"],
        PixelThick: ["Pixel-thick", "sans-serif"],
        PixelCute: ["Pixel-cute", "sans-serif"],
        PixelPetty: ["Pixel-petty", "sans-serif"],
      },
      textShadow: {
        brown: "-2px 0 #36242b, 0 2px #36242b, 2px 0 #36242b, 0 -2px #36242b",
        green: "-2px 0 #324312, 0 2px #324312, 2px 0 #324312, 0 -2px #324312",
        red: "-2px 0 #810a0b, 0 2px #810a0b, 2px 0 #810a0b, 0 -2px #810a0b",
        main: "-0.2px 0 #695845, 0 0.2px #695845, 0.2px 0 #695845, 0 -0.2px #695845",
      },
      backgroundPosition: {
        my: "left top",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-top-right": {
          background: "linear-gradient(-135deg,transparent 8px,#3b5998 0)",
        },
        ".border-top-left": {
          background: "linear-gradient(135deg,transparent 12px,#4c71b5 0)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

const fillColor = "#3b5998";
