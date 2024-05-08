const tableBody = document.querySelector("#tableBody");
const welcome = document.querySelector("#welcome span");

// LOCAL STORAGE => Data Base
let bakeryIndex = +localStorage.getItem("bakeryIndex");
let bakeryData = JSON.parse(localStorage.getItem("bakeryData"));
addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("bakeryData") != null) {
    bakeryData = JSON.parse(localStorage.getItem("bakeryData"));
    welcome.innerHTML = `مرحبا ${bakeryData[bakeryIndex].bakeryOwner}`;
    displayDate();
  }
});

function displayDate() {
  let content = "";
  if (bakeryData[bakeryIndex].reqests) {
    bakeryData[bakeryIndex].reqests.forEach((element, index) => {
      content += `

      <tr class="border">
      <td class="border">${index + 1}</td>
      <td class="border">${element.nameReq}</td>
      <td class="border">${element.num}</td>
      <td class="border">${element.timeOrder} </td>
      <td class="border">
        <button onclick="acceptedItem(${index})" class="btn btn-outline-success btn-sm border-2">
          <i class="fa-solid fa-check"></i>
        </button>
        <button onclick="delayItem(${index})" class="btn btn-outline-warning btn-sm border-2">
        <i class="fa-solid fa-clock"></i>
        </button>
        <button onclick="deleteItem(${index})" class="btn btn-outline-danger btn-sm border-2">
          <i class="fa-solid fa-x"></i>
        </button>
      </td>
    </tr>
      `;
    });
  }

  tableBody.innerHTML = content;
}

// // Delete Item
// function deleteItem(index) {
//   // userRequsets.requsets.splice(index, 1);
//   userRequsets.requsets[index].deleted = true;
//   userRequsets.requsets[index].completed = false;
//   userRequsets.requsets[index].delay = false;

//   localStorage.setItem("bakeryIndex", JSON.stringify(userRequsets));
//   displayDate();
// }

// // delay
// function delayItem(index) {
//   userRequsets.requsets[index].delay = true;
//   userRequsets.requsets[index].completed = false;
//   userRequsets.requsets[index].deleted = false;
//   localStorage.setItem("bakeryIndex", JSON.stringify(userRequsets));
//   displayDate();
// }

// function acceptedItem(index) {
//   userRequsets.requsets[index].completed = true;
//   userRequsets.requsets[index].delay = false;
//   userRequsets.requsets[index].deleted = false;
//   localStorage.setItem("bakeryIndex", JSON.stringify(userRequsets));
//   displayDate();
// }
