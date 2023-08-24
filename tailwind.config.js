/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#888",
          "200": "#222",
        },
        white: "#fff",
        whitesmoke: "#f8f8f8",
        darkslategray: "#292f36",
        "back-select": "#fbfbfb",
        color: "#efefef",
        "m3-sys-light-on-surface": "#1c1b1f",
        "line-color": "#cfd4e3",
        transparecy: "rgba(255, 255, 255, 0)",
        primary2: "#a2bb81",
        color1: "#636363",
        primary1: "#695b4c",
        color2: "#232527",
        "border-color": "#bfbfbf",
      },
      fontFamily: {
        "font-16": "'Noto Sans'",
        "m3-label-large": "Roboto",
        jost: "Jost",
        "dm-serif-display": "'DM Serif Display'",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      smi: "13px",
      base: "16px",
      sm: "14px",
      "16xl": "35px",
      xl: "20px",
      "6xl": "25px",
      lgi: "19px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


// module.exports = {
//   content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
