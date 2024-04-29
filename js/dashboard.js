let city = document.getElementById("city");
let village = document.getElementById("village");
let areaZone = document.getElementById("areaZone");
let next = document.getElementById("next");
let bakerySection = document.getElementById("bakery-section");

let welcomeMessege = document.querySelector(".welcome span");
let btnLogout = document.getElementById("btnLogout");

// Welcome Messege
addEventListener("load", () => {
  let name = localStorage.getItem("loginData");
  if (name != null) {
    welcomeMessege.innerHTML = `مرحبا ${name.split(" ")[0]}`;
  } else {
    window.location = "login.html";
  }
});

// Logout Function

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "btnLogout") {
    localStorage.removeItem("loginData");
    window.location = "index.html";
  }
});

//  functions bakerySection
next.addEventListener("click", () => {
  bakerySection.classList.toggle("bakery-section-h");
});

// Start Swiper Slider

const swiper = new Swiper(".swiper", {
  loop: true,
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
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
