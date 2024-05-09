let owner = document.querySelector("#owner span");
let address = document.querySelector("#address span");
let welcome = document.querySelector("#welcome span");
let state = document.querySelector(".state span");
let clock = 0;
const time = document.querySelector("#hours");
const count = document.querySelector("#count");
const btn = document.querySelector(".btn");
let bakeryIndex = +localStorage.getItem("bakeryIndex");
let bakeryData = JSON.parse(localStorage.getItem("bakeryData"));
let massegeReq = "";

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loginData") != null) {
    welcome.innerHTML = `مرحبا ${
      localStorage.getItem("loginData").split(" ")[0]
    }`;
  }

  if (localStorage.getItem("bakeryData") != null) {
    owner.innerHTML = bakeryData[bakeryIndex].bakeryOwner;
    address.innerHTML = `${bakeryData[bakeryIndex].address.bakeryCity} , ${bakeryData[bakeryIndex].address.bakeryVillage} ,${bakeryData[bakeryIndex].address.bakeryZone} بجوار ${bakeryData[bakeryIndex].nearbyPlace}`;
  }

  // قبول او رفض او تأجيل الطلب
  if (localStorage.getItem("Massege") != null) {
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: localStorage.getItem("Massege"),
      showConfirmButton: true,
      timer: false,
    }).then((deleteMassege) => {
      if (deleteMassege.isConfirmed) {
        localStorage.removeItem("Massege");
      }
    });
  }
  // Stata Bakery
  setInterval(() => {
    const date = new Date();
    if (date.getHours() == 0) {
      clock = 12;
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
function bakeryOrder(e) {
  const bakeryOrderObj = {
    nameReq: localStorage.getItem("loginData"),
    num: count.value,
    timeOrder: time.value,
    completed: false,
    delay: false,
    deleted: false,
  };

  bakeryData[bakeryIndex].reqests.push(bakeryOrderObj);

  localStorage.setItem("bakeryData", JSON.stringify(bakeryData));

  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "تم الطلب بنجاح",
    showConfirmButton: false,
    timer: 1500,
  });

  btn.style.cursor = "no-drop";
  btn.disabled = true;
}

// حاله الطلب
// function orderStatus() {
//   for (let i = 0; i < bakeryData[bakeryIndex].reqests.length; i++) {
//     if (
//       bakeryData[bakeryIndex].reqests.nameReq ==
//       localStorage.getItem("loginData")
//     ) {
//       if (bakeryData[bakeryIndex].reqests[i].completed) {
//         massegeReq = "قبول";
//       } else if (bakeryData[bakeryIndex].reqests[i].delay) {
//         massegeReq = "تأخير";
//       } else if (bakeryData[bakeryIndex].reqests[i].deleted) {
//         massegeReq = "مسح";
//       }
//     }
//   }
//   console.log(massegeReq);
// }
