import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'color-dark-green': '#003C43',
        'color-med-green': '#135D66',
        'color-green': '#77B0AA',
        'color-light-green': '#E3FEF7'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    flowbite.plugin()
  ],
};
