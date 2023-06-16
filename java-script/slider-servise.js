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

const sliderService = new Slider().render();

export default sliderService;
