let owner = document.querySelector("#owner span");
let address = document.querySelector("#address span");
let welcome = document.querySelector("#welcome span");
let state = document.querySelector(".state span");
let clock = 0;
const time = document.querySelector("#hours");
const count = document.querySelector("#count");
const btn = document.querySelector(".btn");
let bakeryOwnerInfo = JSON.parse(localStorage.getItem("bakeryIndex"));
addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loginData") != null) {
    welcome.innerHTML = `مرحبا ${
      localStorage.getItem("loginData").split(" ")[0]
    }`;
  }

  if (localStorage.getItem("bakeryIndex") != null) {
    owner.innerHTML = bakeryOwnerInfo.bakeryOwner;
    address.innerHTML = `${bakeryOwnerInfo.address.bakeryCity} , ${bakeryOwnerInfo.address.bakeryVillage} ,${bakeryOwnerInfo.address.bakeryZone} بجوار ${bakeryOwnerInfo.nearbyPlace}`;
  }

  setInterval(() => {
    const date = new Date();
    if (date.getHours() == 0) {
      clock = 12 + "AM";
    } else if (date.getHours() > 12) {
      clock = date.getHours() - 12;
    } else {
      clock = date.getHours();
    }

    if (clock < 5) {
      state.innerHTML = "متاح";
    } else {
      state.innerHTML = "غير متاح";
    }
  }, 1000);
});

btn.addEventListener("click", bakeryOrder);
function bakeryOrder() {
  const bakeryOrderObj = {
    nameReq: localStorage.getItem("loginData"),
    num: count.value,
    timeOrder: time.value,
  };
  bakeryOwnerInfo.requsets.push(bakeryOrderObj);

  localStorage.setItem("bakeryIndex", JSON.stringify(bakeryOwnerInfo));

  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "تم الطلب بنجاح",
    showConfirmButton: false,
    timer: 1500,
  });
}
