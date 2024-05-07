let city = document.getElementById("city");
let village = document.getElementById("village");
let areaZone = document.getElementById("areaZone");
let next = document.getElementById("next");
let bakerySection = document.getElementById("bakery-section");

let welcomeMessege = document.querySelector(".welcome span");
let btnLogout = document.getElementById("btnLogout");
let bakeryData = JSON.parse(localStorage.getItem("bakeryData"));

// Welcome Messege
addEventListener("load", () => {
  displayInputs();
  let name = localStorage.getItem("loginData");
  if (name != null) {
    welcomeMessege.innerHTML = `مرحبا ${name.split(" ")[0]}`;
  } else {
    window.location = "login.html";
  }
  if (localStorage.getItem("bakeryData") != null) {
    bakeryData = JSON.parse(localStorage.getItem("bakeryData"));
  } else {
    bakeryData = [];
  }
});

// Logout Function

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "btnLogout") {
    localStorage.removeItem("loginData");
    window.location = "index.html";
  }
});

// ملئ المدخلات دينميك
function displayInputs() {
  let inputbakeryCity = [];
  let inputbakeryVillage = [];
  let inputbakeryZone = [];
  bakeryData.forEach((item) => {
    inputbakeryCity.push(item.address.bakeryCity);
    inputbakeryVillage.push(item.address.bakeryVillage);
    inputbakeryZone.push(item.address.bakeryZone);
  });
  let inputbakeryCityArr = new Set(inputbakeryCity);
  let inputbakeryVillageArr = new Set(inputbakeryVillage);
  let inputbakeryZoneArr = new Set(inputbakeryZone);
  inputbakeryCityArr.forEach((item) => {
    city.innerHTML += `<option value="${item}">${item}</option>`;
  });
  inputbakeryVillageArr.forEach((item) => {
    village.innerHTML += `<option value="${item}">${item}</option>`;
  });
  inputbakeryZoneArr.forEach((item) => {
    areaZone.innerHTML += `<option value="${item}">${item}</option>`;
  });
}

//  functions bakerySection
next.addEventListener("click", displayBakerys);
// areaZone.addEventListener("change", displayBakerys);

function displayBakerys() {
  let content = ``;

  bakeryData.forEach((bakery, index) => {
    if (areaZone.value == bakery.address.bakeryZone) {
      content += `
          <div class="swiper-slide">
            <div
              class="d-flex h-100 align-items-center justify-content-center"
            >
              <div class="text-center">
                <h4>${bakery.bakeryOwner}</h4>
                <h5>${bakery.address.bakeryCity} / ${bakery.address.bakeryVillage} / ${bakery.address.bakeryZone}</h5>
                <span> بجوار ${bakery.nearbyPlace}</span>
                    <button class="btn" onclick="loginBakrey(${index})">دخول</button>
              </div>
            </div>
          </div>
      `;
    } else {
      document.querySelector(".swiper-wrapper").innerHTML = "";
    }
  });

  document.querySelector(".swiper-wrapper").innerHTML = content;
  // Start Swiper Slider

  const swiper = new Swiper(".swiper", {
    loop: false,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
}

function loginBakrey(bakeryIndex) {
  localStorage.setItem("bakeryIndex", JSON.stringify(bakeryData[bakeryIndex]));
  window.location = "userrequest.html";
}
