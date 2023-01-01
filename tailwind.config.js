/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        directEd: {
          primary: "#395241",
          "primary-light": "#6B8065",
          accent: "#F3EEE2",
          light: "#FDFDFD",
          dark: "#374756",
        },
      },
    ],
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      colors: {
        primary: "#395241",
        "primary-light": "#6B8065",
        accent: "#F3EEE2",
        light: "#FDFDFD",
        light2: "#F3EEE2",
        dark: "#374756",
        dark2: "#2B3035",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
};
