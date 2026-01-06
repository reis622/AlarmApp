/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Dosyaların neredeyse orayı belirt (Örn: ./src klasörü)
  theme: {
    extend: {
      fontFamily: {
        "workSans": ['Serif', 'sans-serif'],
        "bbhBartle": ['"BBH Bartle"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


