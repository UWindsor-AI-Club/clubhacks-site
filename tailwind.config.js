/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  /*Tells Tailwind: “Look through these files for class names.”

  Tailwind only generates CSS for the classes it finds here (keeps CSS small). ./src//js,ts,jsx,tsx means:
  
  /* = any folders/files under src
  
  {...} = match these extensions (JS/TS/React files)*/
  
  theme: {
    extend: {},
  },
  plugins: [],
}

