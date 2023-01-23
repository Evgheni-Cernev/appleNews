const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    backgroundColor: {
      primary: "#242525",
    },
    textColor: {
      white: "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: "10px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        "5px": "5px",
        "20px": "20px",
      },
      borderRadius: {
        "4xl": "6px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ matchVariant }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:not(:nth-child(${value}))`;
        }
      );
    })
  ]
};
