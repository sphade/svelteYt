/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#d6e0ea",
        secondary: { 100: "#10212F", 500: "#061726" },
        // secondary: "#10212F",
        // "secondary-darker": "#10212F",
        brand: "#85c742",
      },
    },
  },
  plugins: [],
};
