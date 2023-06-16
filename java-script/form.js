// Форма

const form = document.querySelector(".sign-up");
const btnForm = document.querySelector(".header_block_inform-btn");
const closeForm = document.querySelector(".close-img");
const send = document.querySelector(".wrapper-send");
const sendAccept = document.querySelector(".accept-sign-up");
const closeAccept = document.querySelector(".accept-close-img");
const overflo = document.getElementById("overflo");
const phoneNumberInput = document.querySelector(".sing_up_input_phone");
const imputName = document.querySelector(".sing_up_input_name");
const inputText = document.querySelector(".sing_up_input_inform");

const forms = () => {
  btnForm.addEventListener("click", () => {
    form.style.display = "flex";
    overflo.style.display = "block";
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
};

export default forms;
