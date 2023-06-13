// Бар меню

const btnDropDown = document.querySelector(".wrapper_button");
const hrDropDown = document.querySelectorAll(".wrapper_button-line");
const dropDownManu = document.querySelector(".wrapper_menu");
const headerBlockManu = document.querySelector(".header_block-inform");
btnDropDown.addEventListener("click", () => {
  hrDropDown.forEach(element => {
    element.classList.toggle("js-active");
    dropDownManu.classList.toggle("js-active");
  });
});

// Форма

const form = document.querySelector(".sign-up");
const btnForm = document.querySelector(".record-service");
const closeForm = document.querySelector(".close-img");
const send = document.querySelector(".wrapper-send");
const sendAccept = document.querySelector(".accept-sign-up");
const closeAccept = document.querySelector(".accept-close-img");
const buttomWidthForm = document.querySelector(".service_buttom-width");

buttomWidthForm.addEventListener("click", () => {
  form.style.display = "flex";
});

btnForm.addEventListener("click", () => {
  form.style.display = "flex";
});

send.addEventListener("click", () => {
  form.style.display = "none";
  sendAccept.style.display = "flex";
});
closeForm.addEventListener("click", () => {
  form.style.display = "none";
});

closeAccept.addEventListener("click", () => {
  sendAccept.style.display = "none";
});
