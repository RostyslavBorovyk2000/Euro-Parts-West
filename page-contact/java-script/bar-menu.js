// Бар меню

const btnDropDown = document.querySelector(".wrapper_button");
const hrDropDown = document.querySelectorAll(".wrapper_button-line");
const dropDownManu = document.querySelector(".wrapper_menu");

const burger = () => {
  btnDropDown.addEventListener("click", () => {
    hrDropDown.forEach(element => {
      element.classList.toggle("js-active");
      dropDownManu.classList.toggle("js-active");
    });
  });
};

export default burger;
