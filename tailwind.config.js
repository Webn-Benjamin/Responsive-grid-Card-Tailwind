/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        420: "26.25rem",
        345: "21.56rem",
      },
      minWidth: {
        420: "26.25rem",
        345: "21.56rem",
      },
      maxWidth: {
        420: "26.25rem",
        345: "21.56rem",
      },
      height: {
        360: "22.5rem",
        500: "31.25rem",
      },
      minHeight: {
        360: "22.5rem",
        500: "31.25rem",
      },
      maxHeight: {
        360: "22.5rem",
        500: "31.25rem",
      },
    },
  },
  plugins: [],
};
