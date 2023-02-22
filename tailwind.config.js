/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["index.html"],
   theme: {
      screens: {
         lg: "1400px",
      },
      colors: {
         "primary-dark": "#2E2E2E",
         "primary-yellow": "#F2ED72",
         "natural-pink": "#FFB9DB",
         "natural-peach": "#FFE3CE",
         "natural-cyan": "#C2F4FF",
         "natural-orang": "#FFEBB9",
         "natural-blue": "#C0C4E9",
         "natural-dark": "#3E3E3E",
         "natural-green": "#DAF6CC",
         "natural-white": "#FFFFFF",
      },
      fontFamily: {
         robot: ["Roboto Mono", "monospace"],
      },
      container: {
         center: true,
      },
      extend: {},
   },
   plugins: [],
};
