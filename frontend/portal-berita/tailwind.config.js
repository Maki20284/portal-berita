const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "D:/PERKULIAHAN/magang winnicode/website-jurnalisme/frontend/portal-berita/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "D:/PERKULIAHAN/magang winnicode/website-jurnalisme/frontend/portal-berita/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E0063'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
