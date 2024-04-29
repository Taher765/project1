let city = document.getElementById("city");
let village = document.getElementById("village");
let areaZone = document.getElementById("areaZone");
let next = document.getElementById("next");
let bakerySection = document.getElementById("bakery-section");

let welcomeMessege = document.querySelector(".welcome span");
let btnLogout = document.getElementById("btnLogout");

addEventListener("load", () => {
  if (localStorage.getItem("loginData") != null) {
    welcomeMessege.innerHTML = `مرحبا ${localStorage.getItem("loginData")}`;
  } else {
    window.location = "login.html";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "btnLogout") {
    localStorage.removeItem("loginData");
    window.location = "index.html";
  }
});

next.onclick = () => {
  bakerySection.style.width = "800px";
};
