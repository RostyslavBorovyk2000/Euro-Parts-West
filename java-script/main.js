import burger from "./bar-menu.js";
import forms from "./form.js";
import sliderHeader from "./slider-header.js";
import sliderService from "./slider-servise.js";

// Запускаємо імпортовану функцію для БАР МЕНЮ;
burger();

// Запускаємо імпортовану функцію для ФОРМИ;
forms();

//Слайдер секції header
sliderHeader();

// Слайдер для секції service при розмірі 320px-768px
sliderService;

const img = document.querySelector(".block_inform-images");
const largeScreenImagePath = "images/header/header-nav-img-one.jpg";
const smallScreenImagePath = "images/header/header-nav-img-width-max.jpg";

function updateImagePath() {
  if (window.innerWidth > 1024) {
    img.src = largeScreenImagePath;
  } else {
    img.src = smallScreenImagePath;
  }
}

updateImagePath();
window.addEventListener("resize", updateImagePath);
