/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = {
  content: [
    "src/app/pages/home/home.component.html",
    "src/app/shared/sections/github-section/github-section.component.html",
    "src/app/shared/sections/header/header.component.html",
    "src/app/shared/sections/main-section/main-section.component.html",
    "src/app/shared/sections/social-section/social-section.component.html",
    "src/app/shared/sections/experience-section/experience-section.component.html",
    "src/app/shared/main-picture/main-picture.component.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

