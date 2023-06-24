import burger from "./bar-menu.js";
import forms from "./form.js";
import Card from "./Card-parts.js";

// Запускаємо імпортовану функцію для БАР МЕНЮ;
burger();

// Запускаємо імпортовану функцію для ФОРМИ;
forms();

// Галерея запчастин........................................................................

const getQueryParam = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const categoriesContainer = document.querySelector(".all-products");
const input = document.querySelector(".input_seurch-card");

const filterCards = () => {
  const cards = document.querySelectorAll(".product");
  const inputValue = input.value.toLowerCase().trim();

  cards.forEach(card => {
    const cardTitle = card
      .querySelector(".product-title")
      .textContent.toLowerCase();
    const cardArtNumber = card
      .querySelector(".product-price")
      .textContent.toLowerCase();

    if (cardTitle.includes(inputValue) || cardArtNumber.includes(inputValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

input.addEventListener("input", filterCards);

const categoryQueryParam = getQueryParam("categories");

const showCardsByCategory = categoryQueryParam => {
  const wrapperBlockInform = document.querySelector(".js-wrapper");
  const mainContainer = document.querySelector(".list_categoriys");
  const block = document.querySelector(".block");

  if (categoryQueryParam) {
    wrapperBlockInform.classList.add("hidden");
    mainContainer.classList.add("hidden");
    block.classList.remove("hidden");

    axios
      .get(`http://127.0.0.1:8000/api/categories/${categoryQueryParam}`)
      .then(({ data }) => {
        if (categoryQueryParam == data.id) {
          categoriesContainer.innerHTML = "";
          const products = data.products;
          products.forEach(({ name, image_url, article }) => {
            new Card(name, image_url, article).render();
          });
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.log("Сторінку не знайдено");
        } else {
          console.log("Сталася помилка при отриманні даних");
          console.error(error);
        }
      });
  } else {
    wrapperBlockInform.classList.remove("hidden");
    mainContainer.classList.remove("hidden");
    block.classList.add("hidden");
  }
};

showCardsByCategory(categoryQueryParam);
