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
const btnForm = document.querySelector(".block_inform_parts-btn");
const closeForm = document.querySelector(".close-img");
const send = document.querySelector(".wrapper-send");
const sendAccept = document.querySelector(".accept-sign-up");
const closeAccept = document.querySelector(".accept-close-img");
const btnWidht = document.querySelector(".block_inform_parts-btn-two");
const overflo = document.getElementById("overflo");

btnWidht.addEventListener("click", () => {
  form.style.display = "flex";
  overflo.style.display = "block";
});

btnForm.addEventListener("click", () => {
  form.style.display = "flex";
  overflo.style.display = "block";
});

send.addEventListener("click", () => {
  form.style.display = "none";
  sendAccept.style.display = "flex";
  overflo.style.display = "block";
});
closeForm.addEventListener("click", () => {
  form.style.display = "none";
  overflo.style.display = "none";
});

closeAccept.addEventListener("click", () => {
  sendAccept.style.display = "none";
  overflo.style.display = "none";
});

// Галерея запчастин

const wrapperCategorys = document.querySelector(".wrapper_list-categoriys");
const blockCard = document.querySelector(".block");
const list = document.querySelector(".list_categoriys");

class Categories {
  constructor(link) {
    this.link = link;
  }

  render() {
    list.insertAdjacentHTML(
      "beforeend",
      ` <li class="item_categoriys">Двигун</li>
    <li class="item_categoriys">КПП</li>
    <li class="item_categoriys">Кутовий редуктор</li>
    <li class="item_categoriys">Мости</li>
    <li class="item_categoriys">Стріла</li>
    <li class="item_categoriys">Електросистема</li>
    <li class="item_categoriys">Паливна система</li>
    <li class="item_categoriys">Гідравлічна система</li>
    <li class="item_categoriys">Запчастини для ТО</li>
    <li class="item_categoriys">Інші запчастини</li> `
    );
  }
}

window.addEventListener("load", () => {
  new Categories("link").render();

  const li = document.querySelectorAll(".item_categoriys");

  li.forEach(element => {
    element.addEventListener("click", () => {
      wrapperCategorys.style.display = "none";
      blockCard.style.display = "block";
    });
  });
});

class Card {
  constructor(name, artNumber, linkImg) {
    this.name = name;
    this.artNumber = artNumber;
    this.linkImg = linkImg;
  }

  creatElement() {}
}
