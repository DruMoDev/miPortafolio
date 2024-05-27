/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(to right, #5c37e5, #b09df8, #d7cefd, #ffffff)",
      },
      colors: {
        primary: "#5c37e5",
        secondary: "#adadad",
        tertiary: "#0B0B0B",
        quaternary: "#0f0f0f",
        quinary: "#15151D", //Color del Navbar
      },
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
