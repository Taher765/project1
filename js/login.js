const numCard = document.querySelector("#numCard");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");
let numCardFlag = false;
let passwordFlag = false;
let usersData = [];
let globalIndex = null;

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("users") != null) {
    usersData = JSON.parse(localStorage.getItem("users"));
  }
  numCard.focus();
});

numCard.addEventListener("keyup", cardIdValidation);
numCard.addEventListener("blur", cardIdValidation);
function cardIdValidation() {
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].cardId === numCard.value) {
      numCard.classList.add("succes-border");
      numCard.classList.remove("error-border");
      numCardFlag = true;
      globalIndex = i;
      break;
    } else {
      numCard.classList.remove("succes-border");
      numCard.classList.add("error-border");
      numCardFlag = false;
    }
  }
}

password.addEventListener("keyup", passwordValidation);
password.addEventListener("blur", passwordValidation);

function passwordValidation() {
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].password === password.value && i === globalIndex) {
      password.classList.add("succes-border");
      password.classList.remove("error-border");
      passwordFlag = true;

      break;
    } else {
      password.classList.remove("succes-border");
      password.classList.add("error-border");
      passwordFlag = false;
    }
  }
}

loginBtn.addEventListener("click", loginForm);
function loginForm(e) {
  e.preventDefault();

  if (numCardFlag && passwordFlag) {
    console.log("Done");
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: `مرحبا يا ${usersData[globalIndex].userName}`,
      showConfirmButton: false,
      timer: 1500,
    });
    // Data;
    localStorage.setItem("loginData", usersData[globalIndex].userName);
    setTimeout(() => {
      window.location = "dashboard.html";
    }, 1500);
  } else {
    Swal.fire({
      position: "center-center",
      icon: "error",
      title: `رقم البطاقه او كلمة السر غير صحيحه`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
