let owner = document.querySelector("#owner span");
let address = document.querySelector("#address span");

let x = [];

if (localStorage.getItem("bakeryData") != null) {
  x = JSON.parse(localStorage.getItem("bakeryData"));
}
console.log(x);

owner.innerHTML = x[0].bakeryOwner;
address.innerHTML = `${x[0].address.bakeryCity} , ${x[0].address.bakeryVillage} ,${x[0].address.bakeryZone} بجوار ${x[0].nearbyPlace}`;
