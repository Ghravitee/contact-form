/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Green-200-Lighter": "hsl(148, 38%, 91%)",
        "Green-600-Medium": "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
        "Grey-500-Medium": "hsl(186, 15%, 59%)",
        "Grey-900-Darker": "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
