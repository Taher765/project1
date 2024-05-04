const servBtn = document.querySelectorAll(".servese");
const servInfo = document.querySelectorAll(".text-info");
const loading = document.querySelector(".loading");

addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 500);
});

// Show Div Info Serv
servBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    servInfo.forEach((divInfo) => {
      if (btn.getAttribute("data-serv") === divInfo.getAttribute("data-serv")) {
        divInfo.classList.add("serv-active");
      } else {
        divInfo.classList.remove("serv-active");
      }
    });
  });
});
