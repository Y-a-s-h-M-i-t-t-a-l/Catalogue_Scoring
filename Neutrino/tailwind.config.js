/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      colors: {
        gray: "#131314",
        aliceblue: "#e2e8f0",
        lightgray: {
          "100": "#cfcfcf",
          "200": "#c9cfd6",
          "300": "rgba(201, 207, 214, 0.09)",
          gray: "#131314",
        white: "#fff",
        chocolate: "#e1652e",
        skyblue: "#5fb7d3",
        "gray-scale-gray-100": "#e6e6e6",
        "gray-scale-gray-400": "#999",
        gray: "#131314",
        white: "#fff",
        chocolate: {
          "100": "#e1652e",
          "200": "#d15e2b",
        },
        skyblue: "#5fb7d3",
        },
        cornflowerblue: "#71a2f4",
        skyblue: "#5fb7d3",
        white: "#fff",
        steelblue: "#2b85a1",
        "gray-scale-gray-400": "#999",
        "gray-scale-gray-100": "#e6e6e6",
        chocolate: "#e1652e",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "2xs-3": "10.3px",
        "6xs-2": "6.2px",
        "sm-7": "13.7px",
      },
    },
    fontSize: {
      lg: "18px",
      "9xl": "28px",
      "29xl": "48px",
      "23xl": "42px",
      "base-4": "16.4px",
      "mini-4": "14.4px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
