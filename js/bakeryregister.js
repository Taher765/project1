let bakeryOwner = document.getElementById("bakeryOwner");
let bakeryCity = document.getElementById("bakeryCity");
let bakeryVillage = document.getElementById("bakeryVillage");
let bakeryZone = document.getElementById("bakeryZone");
let nearbyPlace = document.getElementById("nearbyPlace");
let btnRegister = document.querySelector(".btn-register ");

// AR ONLY
let regex = /^[\u0621-\u064A ]+$/;
// Data Container
let bakeryData = [];

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("bakeryData") != null) {
    bakeryData = JSON.parse(localStorage.getItem("bakeryData"));
  }
});

// Bakery Owner validation
bakeryOwner.addEventListener("keyup", bakeryOwnerValidation);
bakeryOwner.addEventListener("blur", bakeryOwnerValidation);
function bakeryOwnerValidation() {
  if (
    bakeryOwner.value.length > 5 &&
    bakeryOwner.value != "" &&
    bakeryOwner.value.match(regex)
  ) {
    bakeryOwner.classList.remove("error-border");
    bakeryOwner.classList.add("succes-border");
    return true;
  } else {
    bakeryOwner.classList.add("error-border");
    bakeryOwner.classList.remove("succes-border");
    return false;
  }
}

// Bakery City validation
bakeryCity.addEventListener("keyup", bakeryCityValidation);
bakeryCity.addEventListener("blur", bakeryCityValidation);
function bakeryCityValidation() {
  if (
    bakeryCity.value.length > 5 &&
    bakeryCity.value != "" &&
    bakeryCity.value.match(regex)
  ) {
    bakeryCity.classList.remove("error-border");
    bakeryCity.classList.add("succes-border");
    return true;
  } else {
    bakeryCity.classList.add("error-border");
    bakeryCity.classList.remove("succes-border");
    return false;
  }
}
// Bakery Village validation
bakeryVillage.addEventListener("keyup", bakeryVillageValidation);
bakeryVillage.addEventListener("blur", bakeryVillageValidation);
function bakeryVillageValidation() {
  if (
    bakeryVillage.value.length > 5 &&
    bakeryVillage.value != "" &&
    bakeryVillage.value.match(regex)
  ) {
    bakeryVillage.classList.remove("error-border");
    bakeryVillage.classList.add("succes-border");
    return true;
  } else {
    bakeryVillage.classList.add("error-border");
    bakeryVillage.classList.remove("succes-border");
    return false;
  }
}
// Bakery Zone validation
bakeryZone.addEventListener("keyup", bakeryZoneValidation);
bakeryZone.addEventListener("blur", bakeryZoneValidation);
function bakeryZoneValidation() {
  if (
    bakeryZone.value.length > 5 &&
    bakeryZone.value != "" &&
    bakeryZone.value.match(regex)
  ) {
    bakeryZone.classList.remove("error-border");
    bakeryZone.classList.add("succes-border");
    return true;
  } else {
    bakeryZone.classList.add("error-border");
    bakeryZone.classList.remove("succes-border");
    return false;
  }
}
// Bakery Nearby Place validation
nearbyPlace.addEventListener("keyup", nearbyPlaceValidation);
nearbyPlace.addEventListener("blur", nearbyPlaceValidation);
function nearbyPlaceValidation() {
  if (
    nearbyPlace.value.length > 5 &&
    nearbyPlace.value != "" &&
    nearbyPlace.value.match(regex)
  ) {
    nearbyPlace.classList.remove("error-border");
    nearbyPlace.classList.add("succes-border");
    return true;
  } else {
    nearbyPlace.classList.add("error-border");
    nearbyPlace.classList.remove("succes-border");
    return false;
  }
}

// Register Function
btnRegister.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  if (
    bakeryOwnerValidation() &&
    bakeryCityValidation() &&
    bakeryVillageValidation() &&
    bakeryZoneValidation() &&
    nearbyPlaceValidation()
  ) {
    let bakeryObj = {
      bakeryOwner: bakeryOwner.value,
      address: {
        bakeryCity: bakeryCity.value,
        bakeryVillage: bakeryVillage.value,
        bakeryZone: bakeryZone.value,
      },
      nearbyPlace: nearbyPlace.value,
    };
    bakeryData.push(bakeryObj);
    localStorage.setItem("bakeryData", JSON.stringify(bakeryData));
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "تم التسجيل بنجاح",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log("ali");

    setTimeout(() => {
      window.location = "bakeryhome.html";
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
