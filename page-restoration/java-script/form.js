// Форма

const form = document.querySelector(".sign-up");
const btnForm = document.querySelector(".restoration_btn-sing-up");
const buttomWidthForm = document.querySelector(
  ".restoration_btn-sing-up_buttom"
);
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

  buttomWidthForm.addEventListener("click", () => {
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

    const requestData = {
      to_email: "europartswest1@gmail.com",
      subject: "rostykfox911@gmail.com",
      message: `Імя ${imputName.value} Телефон ${phoneNumberInput.value} ${inputText.value}`,
    };
    console.log(requestData);
    axios.post("http://127.0.0.1:8000/api/send-email", requestData);

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
