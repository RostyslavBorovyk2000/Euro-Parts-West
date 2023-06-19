import burger from "./bar-menu.js";
import forms from "./form.js";

// Запускаємо імпортовану функцію для БАР МЕНЮ;
burger();

// Запускаємо імпортовану функцію для ФОРМИ;
forms();

// Галерея запчастин........................................................................

const mainContainer = document.querySelector(".list_categoriys");
const categoriesContainer = document.querySelector(".all-products");
const block = document.querySelector(".block");
const wrapperBlockInform = document.querySelector(".js-wrapper");

// const getQueryParam = param => {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// };

class Card {
  constructor(name, urlImg, artNumber) {
    this.name = name;
    this.urlImg = urlImg;
    this.artNumber = artNumber;
  }

  render() {
    categoriesContainer.insertAdjacentHTML(
      "beforeend",
      ` <div class="product">
      <img src="${this.urlImg}">
      <div class="product-info">
       <h4 class="product-title">${this.name}</h4>
       <p class="product-price">${this.artNumber}</p>
       <button class="product-btn">Замовити</button>
      </div>
     </div>`
    );
    this.clickForm();
  }

  clickForm() {
    const form = document.querySelector(".sign-up");
    const closeForm = document.querySelector(".close-img");
    const send = document.querySelector(".wrapper-send");
    const sendAccept = document.querySelector(".accept-sign-up");
    const closeAccept = document.querySelector(".accept-close-img");
    const overflo = document.getElementById("overflo");
    const phoneNumberInput = document.querySelector(".sing_up_input_phone");
    const imputName = document.querySelector(".sing_up_input_name");
    const inputText = document.querySelector(".sing_up_input_inform");
    const partsBtn = document.querySelectorAll(".product-btn");

    partsBtn.forEach(element => {
      element.addEventListener("click", () => {
        phoneNumberInput.value = "";
        imputName.value = "";
        inputText.value = "";
        imputName.style.borderColor = "grey";
        phoneNumberInput.style.borderColor = "grey";
        inputText.style.borderColor = "grey";
        form.style.display = "flex";
        overflo.style.display = "block";

        imputName.addEventListener("input", updateButtonColor);
        phoneNumberInput.addEventListener("input", updateButtonColor);

        function updateButtonColor() {
          if (imputName.value.length > 0 && phoneNumberInput.value.length > 0) {
            send.style.background = "#C00000";
          } else {
            send.style.background = "";
          }
        }
      });

      send.addEventListener("click", () => {
        const expectedNumber = phoneNumberInput.value;
        const enteredNumber = parseInt(phoneNumberInput.value.trim());
        if (
          enteredNumber != expectedNumber ||
          isNaN(enteredNumber) ||
          phoneNumberInput === "" ||
          imputName === "" ||
          inputText === ""
        ) {
          imputName.style.borderColor = "red";
          phoneNumberInput.style.borderColor = "red";
          inputText.style.borderColor = "red";
          return;
        }

        form.style.display = "none";
        sendAccept.style.display = "flex";
        overflo.style.display = "block";

        closeAccept.addEventListener("click", () => {
          sendAccept.style.display = "none";
          overflo.style.display = "none";
        });
      });

      closeForm.addEventListener("click", () => {
        form.style.display = "none";
        overflo.style.display = "none";
      });
    });
  }
}
const btnCategoris = document.querySelectorAll(".item_categoriys");
btnCategoris.forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();
    const categorisId = event.target.getAttribute("data-id");

    axios
      .get(`http://127.0.01:8000/api/categories/${categorisId}`)
      .then(({ data }) => {
        if (categorisId == data.id) {
          const products = data.products;
          products.forEach(({ name, image_url, article }) => {
            wrapperBlockInform.classList.add("hidden");
            mainContainer.classList.add("hidden");
            block.classList.remove("hidden");
            new Card(name, image_url, article).render();
          });
        }
      });
  });
});
