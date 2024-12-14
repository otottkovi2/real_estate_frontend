/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "index.html",
        "./src/**/*.{vue,js,ts}"
    ],
    theme: {
        colors: {
            'primary': "#6b7280",
            'secondary': "#d1d5db",
            'tertiary': "#4b5563",
            'black' : "black",
            "white" : "white"
        },
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

