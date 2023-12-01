/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = {
  content: [
    "src/app/pages/home/home.component.html",
    "src/app/shared/btn-primary/btn-primary.component.html",
    "src/app/shared/github-section/github-section.component.html",
    "src/app/shared/header/header.component.html",
    "src/app/shared/main-picture/main-picture.component.html",
    "src/app/shared/main-section/main-section.component.html",
    "src/app/shared/social-section/social-section.component.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

