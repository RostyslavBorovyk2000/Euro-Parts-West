// Слайдер блоку про нас

const btnArrowTop = document.querySelector(".arrow_top_btn-top");
const btnArrowBottom = document.querySelector(".arrow_top_btn-bottom");
const aboutUsImg = document.querySelector(".about_us-slider-img");
const nextElementSibling = document.querySelector(".js-next");

let arrAboutUs = [
  "images/about-us/about-us-one.jpeg",
  "images/about-us/about-us-two.jpg",
  "images/about-us/about-us-three.jpg",
  "images/about-us/about-us-four.jpg",
  "images/about-us/about-us-eleven.jpg",
  "images/about-us/about-us-six.jpg",
  "images/about-us/about-us-seven.jpg",
  "images/about-us/about-us-eight.jpg",
  "images/about-us/about-us-nine.jpg",
  "images/about-us/about-us-ten.jpg",
];

const aboutAs = () => {
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
};

export default aboutAs;
