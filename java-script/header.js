// Бар меню

const btnDropDown = document.querySelector(".wrapper_button");
const hrDropDown = document.querySelectorAll(".wrapper_button-line");
const dropDownManu = document.querySelector(".wrapper_menu");
const headerBlockManu = document.querySelector(".header_block-inform");
console.log(headerBlockManu);
btnDropDown.addEventListener("click", () => {
  hrDropDown.forEach(element => {
    element.classList.toggle("js-active");
    dropDownManu.classList.toggle("js-active");
  });
});

headerBlockManu.addEventListener("click", () => {
  hrDropDown.forEach(element => {
    element.classList.remove("js-active");
    dropDownManu.classList.remove("js-active");
  });
});

//Слайдер секції header

let tittleInform = document.querySelector(".header_block_inform-tittle");
let textInform = document.querySelector(".header_block_inform-text");
let imgHeader = document.querySelector(".block_inform-images");
const btnTop = document.querySelector(".js-circle-one");
const btnButton = document.querySelector(".js-circle-two");

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

// Слайдер для секції service при розмірі 320px-768px

class Slider {
  constructor() {}
  clickSlider() {
    let arrSlider = [
      "images/service/service-one.jpg",
      "images/service/service-two.jpg",
      "images/service/service-three.jpg",
      "images/service/service-four.jpg",
      "images/service/service-five.jpg",
      "images/service/service-six.jpg",
    ];

    let imgSliderService = document.querySelector(".service_slider-img");
    const btnArrowLeft = document.querySelector(".service_slider-arrow-left");
    const btnArrowRight = document.querySelector(".service_slider-arrow-right");

    btnArrowLeft.addEventListener("click", () => {
      let firstElement = arrSlider.shift();
      arrSlider.push(firstElement);
      imgSliderService.src = `${arrSlider[0]}`;
    });

    btnArrowRight.addEventListener("click", () => {
      let firstElement = arrSlider.pop();
      arrSlider.unshift(firstElement);
      imgSliderService.src = `${arrSlider[0]}`;
    });
  }

  render() {
    const serviceContainer = document.querySelector(".service_block-inform");

    serviceContainer.insertAdjacentHTML(
      "beforeend",
      '        <div class="service_block-slider">\n' +
        '          <img class="service_slider-img" src="images/service/service-one.jpg" alt="service-img">\n' +
        '          <div class="service_slider-arrow-left"><img src="images/service/left.svg" alt="arrow-left" width="7" height="12"></div>\n' +
        '          <div class="service_slider-arrow-right"><img src="images/service/right.svg" alt="arrow-right" width="7" height="12"></div>\n' +
        "              </div>\n" +
        "        \n" +
        '        <p class="js_service_text-two">Після огляду бригада зразу ж розпочає ремонт, щоб максимально ефективно вирішити проблему і скоротити Ваш час.</p>\n' +
        "        \n" +
        '           <a class="js-service_block-btn" href="./page-restoration/restoration.html">Детальніше про сервіс</a>'
    );

    this.clickSlider();
  }
}

new Slider().render();

// Слайдер блоку про нас

const btnArrowTop = document.querySelector(".arrow_top_btn-top");
const btnArrowBottom = document.querySelector(".arrow_top_btn-bottom");
const aboutUsImg = document.querySelector(".about_us-slider-img");
const nextElementSibling = document.querySelector(".js-next");
let arrAboutUs = [
  "images/about-us/about-us-one.jpg",
  "images/about-us/about-us-two.jpg",
  "images/about-us/about-us-three.jpg",
  "images/about-us/about-us-four.jpg",
  "images/about-us/about-us-five.jpg",
  "images/about-us/about-us-six.jpg",
  "images/about-us/about-us-seven.jpg",
  "images/about-us/about-us-eight.jpg",
  "images/about-us/about-us-nine.jpg",
  "images/about-us/about-us-ten.jpg",
];

btnArrowTop.addEventListener("click", () => {
  let firstElementImg = arrAboutUs.shift();
  arrAboutUs.push(firstElementImg);
  aboutUsImg.src = arrAboutUs[0];
  nextElementSibling.src = arrAboutUs[1];
});

btnArrowBottom.addEventListener("click", () => {
  let firstElementImg = arrAboutUs.pop();
  arrAboutUs.unshift(firstElementImg);
  aboutUsImg.src = `${arrAboutUs[0]}`;
  nextElementSibling.src = arrAboutUs[1];
});

// Форма

const form = document.querySelector(".sign-up");
const btnForm = document.querySelector(".header_block_inform-btn");
const closeForm = document.querySelector(".close-img");
const send = document.querySelector(".wrapper-send");
const sendAccept = document.querySelector(".accept-sign-up");
const closeAccept = document.querySelector(".accept-close-img");
const overflo = document.getElementById("overflo");

btnForm.addEventListener("click", () => {
  form.style.display = "flex";
  overflo.style.display = "block";
});

send.addEventListener("click", () => {
  form.style.display = "none";
  sendAccept.style.display = "flex";
});
closeForm.addEventListener("click", () => {
  form.style.display = "none";
  overflo.style.display = "none";
});

closeAccept.addEventListener("click", () => {
  sendAccept.style.display = "none";
  overflo.style.display = "none";
});
