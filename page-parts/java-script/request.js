const request = () => {
  const mainContainer = document.querySelector(".list_categoriys");
  const categoriesContainer = document.querySelector(".all-products");
  const block = document.querySelector(".block");
  const wrapperBlockInform = document.querySelector(".js-wrapper");

  const getQueryParam = param => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  window.addEventListener("popstate", event => {
    event.preventDefault();
    const state = event.state;
    if (state && state.category) {
      const categoryQueryParam = state.category;
      wrapperBlockInform.classList.add("hidden");
      mainContainer.classList.add("hidden");
      block.classList.remove("hidden");
      axios
        .get(`http://127.0.0.1:8000/api/categories/${categoryQueryParam}`)
        .then(({ data }) => {
          console.log(data);
          if (categoryQueryParam == data.id) {
            categoriesContainer.innerHTML = "";
            const products = data.products;
            products.forEach(({ name, image_url, article }) => {
              new Card(name, image_url, article).render();
            });
          }
        });
    } else {
      wrapperBlockInform.classList.remove("hidden");
      mainContainer.classList.remove("hidden");
      block.classList.add("hidden");
    }
  });

  const categoryQueryParam = getQueryParam("categories");
  if (categoryQueryParam) {
    wrapperBlockInform.classList.add("hidden");
    mainContainer.classList.add("hidden");
    block.classList.remove("hidden");

    axios
      .get(`http://127.0.0.1:8000/api/categories/${categoryQueryParam}`)
      .then(({ data }) => {
        console.log(data);
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
          console.log("Страницю не знайдено");
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

export default request;
