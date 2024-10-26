/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        theme1: {
          light: "#EEEEEE",
          primary: "#00ADB5",
          secondary: "#393E46",
          dark: "#222831",
        },
      },
    },
  },
};
