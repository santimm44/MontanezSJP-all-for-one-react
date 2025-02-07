const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
    fontSize: {
            'fluid': 'clamp(1rem, 3vw, 1.5rem)',
            'fluid2': '5rem'
         },
  },
  plugins: [flowbite.plugin()],
}

