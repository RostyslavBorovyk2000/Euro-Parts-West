import burger from "./bar-menu.js";
import forms from "./form.js";

// Запускаємо імпортовану функцію для БАР МЕНЮ;
burger();

// Запускаємо імпортовану функцію для ФОРМИ;
forms();

// Галерея запчастин........................................................................
const categoriesData = {
  engine: [
    {
      name: "Прокладка перед. кришки",
      urlImg:
        "https://servua.com/content/images/17/480x480l50nn0/28894488531392.png",
      artNumber: 702056,
    },
    {
      name: "Електро вентелятор",
      urlImg:
        "https://www.ats-parts.com.ua/image/catalog/Manitou/564055/564055%20Manitou%20original.jpg",
      artNumber: 564055,
    },
  ],

  filter: [
    {
      name: "Повітряний (зов)",
      urlImg:
        "https://agroimport.in.ua/image/cache/catalog/demo/image/data/Manitou/563416(5)ds-2000x2000.jpg",
      artNumber: 563416,
    },
    {
      name: "Повітряний (внут)",
      urlImg:
        "https://agroimport.in.ua/image/cache/catalog/demo/image/data/Manitou/563415(GFD)(3)-2000x2000.jpg",
      artNumber: 563415,
    },
  ],

  axel: [
    {
      name: "Підшипник бортової",
      urlImg:
        "https://servua.com/content/images/1/480x480l50nn0/52037831113666.png",
      artNumber: 562504,
    },
    {
      name: "Сальник бортової",
      urlImg:
        "https://promspectech.com.ua/image/cache/catalog/Forklifts/Manitou/salnik-604656-500x500.jpg",
      artNumber: 604656,
    },
  ],

  angleReducer: [
    {
      name: "Вал довгий",
      urlImg:
        "https://promspectech.com.ua/image/cache/catalog/Forklifts/Manitou/val-563789-500x500.jpg",
      artNumber: 563789,
    },
    {
      name: "Вал короткий",
      urlImg:
        "https://www.ats-parts.com.ua/image/catalog/Manitou/563787/563787.jpg",
      artNumber: 563787,
    },
  ],
};

const mainContainer = document.querySelector(".list_categoriys");
const categoriesContainer = document.querySelector(".all-products");
const block = document.querySelector(".block");
const wrapperBlockInform = document.querySelector(".js-wrapper");

const getQueryParam = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

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
  }
}

const categoryQueryParam = getQueryParam("category");
console.log(categoryQueryParam);

if (categoryQueryParam) {
  wrapperBlockInform.classList.add("hidden");
  mainContainer.classList.add("hidden");
  block.classList.remove("hidden");

  const categoryData = categoriesData[categoryQueryParam];
  categoryData.forEach(cardData => {
    const card = new Card(cardData.name, cardData.urlImg, cardData.artNumber);
    card.render(categoriesContainer);
  });
} else {
  wrapperBlockInform.classList.remove("hidden");
  mainContainer.classList.remove("hidden");
  block.classList.add("hidden");
}
