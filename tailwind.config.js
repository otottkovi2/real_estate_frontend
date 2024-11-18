/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "index.html",
      "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
        margin: {
            '6/12': "50%"
        }
    },
  },
  plugins: [],
}

