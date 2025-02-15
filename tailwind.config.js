import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(to right, #006aff, #e0f2ff)",
      },
      colors: {
        primary: "#006AFF",
        "primary-dark": "#0056E0",
        "white-dark": "#e5e5e5 ",
        secondary: "#f4f4f4",
        tertiary: "#0B0B0B",
        quaternary: "#0f0f0f",
        quinary: "#15151D", //Color del Navbar
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
