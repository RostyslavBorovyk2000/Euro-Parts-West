//Слайдер секції header

const tittleInform = document.querySelector(".header_block_inform-tittle");
const textInform = document.querySelector(".header_block_inform-text");
const imgHeader = document.querySelector(".block_inform-images");
const btnTop = document.querySelector(".js-circle-one");
const btnButton = document.querySelector(".js-circle-two");

const sliderHeader = () => {
  btnButton.addEventListener("click", () => {
    btnTop.classList.remove("js-active");
    btnButton.classList.add("js-active");
    imgHeader.src = "images/header/header-nav-img-two.jpg";
    tittleInform.textContent = "БІЛЬШЕ РУК - МЕНШЕ ВИТРАТ:";
    textInform.textContent = "ОДНА БРИГАДА ЗА ЦІНОЮ ОДНОГО СПЕЦІАЛІСТА";
  });

  btnTop.addEventListener("click", () => {
    btnButton.classList.remove("js-active");
    btnTop.classList.add("js-active");
    imgHeader.src = "images/header/header-nav-img-one.jpg";
    tittleInform.textContent = "До посівної готові ЗАВЧАСНО";
    textInform.textContent =
      "Надійність та довговічність вашого навантажувача - наша турбота";
  });
};

export default sliderHeader;
