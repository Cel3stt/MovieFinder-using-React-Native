/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3a345b",
        secondary: "#f3c8dd",
        accent: "#71557a",
        background: "#F5F8FA",
        surface: "#FFFFFF",
        error: "#E0245E",
        warning: "#FFAD1F",
        info: "#17BF63",
        success: "#AAB8C2",
      }
    },
  },
  plugins: [],
}