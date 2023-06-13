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
const btnForm = document.querySelector(".btn_parts");
const closeForm = document.querySelector(".close-img");
const send = document.querySelector(".wrapper-send");
const sendAccept = document.querySelector(".accept-sign-up");
const closeAccept = document.querySelector(".accept-close-img");
const btnWidht = document.querySelector(".btn_parts-js-btn");

btnWidht.addEventListener("click", () => {
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

// Галерея запчастин

const cards = document.querySelector(".cards");
const blockInput = document.querySelector(".block");
const wrapperInform = document.querySelector(".wrapper_parts");

const btnOne = document.querySelector(".js-one");
const btnTwo = document.querySelector(".js-two");
const btnThree = document.querySelector(".js-three");
const btnFour = document.querySelector(".js-four");
const btnSix = document.querySelector(".js-six");
const btnSeven = document.querySelector(".js-seven");
const btnEight = document.querySelector(".js-eight");
const btnNine = document.querySelector(".js-nine");
const btnTen = document.querySelector(".js-ten");
const btnEleven = document.querySelector(".js-eleven");
const btnTwelv = document.querySelector(".js-twelv");
const btnThirteen = document.querySelector(".js-thirteen");
const btnFourteen = document.querySelector(".js-fourteen");
const btnFifteen = document.querySelector(".js-fifteen");
const btnSixteen = document.querySelector(".js-sixteen");

class Card {
  constructor(img, name, number) {
    this.img = img;
    this.name = name;
    this.number = number;
  }

  render() {
    cards.insertAdjacentHTML(
      "beforeend",
      ` 
      <div class="card">
        <img src="${this.img}" alt="Запчастина">
        <h3 class="name-part">${this.name}</h3>
        <p class="number-part">${this.number}</p>
        <button class="btn-card">Замовити</button>
      </div>      
    `
    );
  }
}

btnOne.addEventListener("click", () => {
  wrapperInform.style.display = "none";
  blockInput.style.display = "block";
  new Card("rostyk", "borovyk", 122323).render();
});
