/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "index.html",
      "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
        aspectRatio: {
          'photo': '4 / 3'
        },
        margin: {
            '6/12': "50%",
            '3/12': "25%"
        }
    },
  },
  plugins: [],
}

