/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1A2F",
        primaryPurp:"#110A14",
        secondary: "#F4A300",
        secondaryCyan: "#00D1B2",
        darkText: "#252525",
      },
    },
  },
  plugins: [],
};
