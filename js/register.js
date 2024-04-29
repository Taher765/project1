const userName = document.querySelector("#userName");
const numId = document.querySelector("#numId");
const numUsers = document.querySelector("#numUsers");
const cardId = document.querySelector("#cardId");
const password = document.querySelector("#password");
const errorDiv = document.querySelector("#errorDiv");

const btnRegister = document.querySelector(".btn-register");

// usres Container
let users = [];

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  userName.focus();
});
// User Name Validation
userName.addEventListener("keyup", usernameValidation);
userName.addEventListener("blur", usernameValidation);
function usernameValidation() {
  // AR ONLY
  let regex = /^[\u0621-\u064A ]+$/;
  if (
    userName.value.length > 5 &&
    userName.value != "" &&
    userName.value.match(regex)
  ) {
    userName.classList.remove("error-border");
    userName.classList.add("succes-border");
    return true;
  } else {
    userName.classList.add("error-border");
    userName.classList.remove("succes-border");
    return false;
  }
}

// Number Id Validation
numId.addEventListener("keyup", numIdValidation);
numId.addEventListener("blur", numIdValidation);
function numIdValidation() {
  if (numId.value.length === 14 && numId.value != "" && !isNaN(numId.value)) {
    numId.classList.remove("error-border");
    numId.classList.add("succes-border");
    return true;
  } else {
    numId.classList.add("error-border");
    numId.classList.remove("succes-border");
    return false;
  }
}

// Num User Validation
numUsers.addEventListener("keyup", numUsersValidation);
numUsers.addEventListener("blur", numUsersValidation);
function numUsersValidation() {
  if (
    numUsers.value != "" &&
    !isNaN(numUsers.value) &&
    numUsers.value < 5 &&
    numUsers.value > 0
  ) {
    numUsers.classList.remove("error-border");
    numUsers.classList.add("succes-border");
    return true;
  } else {
    numUsers.classList.add("error-border");
    numUsers.classList.remove("succes-border");
    return false;
  }
}

// Card Id Validation
cardId.addEventListener("keyup", cardIdValidation);
cardId.addEventListener("blur", cardIdValidation);
function cardIdValidation() {
  if (
    cardId.value.length === 14 &&
    cardId.value != "" &&
    !isNaN(cardId.value)
  ) {
    cardId.classList.remove("error-border");
    cardId.classList.add("succes-border");
    return true;
  } else {
    cardId.classList.add("error-border");
    cardId.classList.remove("succes-border");
    return false;
  }
}
// Password Validation
password.addEventListener("keyup", passwordValidation);
password.addEventListener("blur", passwordValidation);
function passwordValidation() {
  if (
    password.value.length === 4 &&
    password.value != "" &&
    !isNaN(password.value)
  ) {
    password.classList.remove("error-border");
    password.classList.add("succes-border");
    return true;
  } else {
    password.classList.add("error-border");
    password.classList.remove("succes-border");
    return false;
  }
}
// Register Function
btnRegister.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  const userObj = {
    userName: userName.value,
    numId: numId.value,
    cardId: cardId.value,
    password: password.value,
    numUsers: numUsers.value,
  };

  if (
    usernameValidation() &&
    numIdValidation() &&
    cardIdValidation() &&
    numUsersValidation() &&
    passwordValidation()
  ) {
    users.push(userObj);
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "تم التسجيل بنجاح",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  } else {
    Swal.fire({
      position: "center-center",
      icon: "error",
      title: "من فضلك ادخل البيانات بشكل صحيح",
      showConfirmButton: false,
      timer: 2500,
    });
  }
}
