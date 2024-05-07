const tableBody = document.querySelector("#tableBody");
const welcome = document.querySelector("#welcome span");

let userRequsets = {};

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("bakeryIndex") != null) {
    userRequsets = JSON.parse(localStorage.getItem("bakeryIndex"));
  } else {
    userRequsets.requsets = [];
  }
  if (localStorage.getItem("owner") != null) {
    welcome.innerHTML = `مرحبا ${
      JSON.parse(localStorage.getItem("owner")).bakeryOwner
    }`;
  }
  displayDate();
});

function displayDate() {
  let content = "";
  if (userRequsets.requsets) {
    userRequsets.requsets.forEach((element, index) => {
      content += `
      
      <tr class="border">
      <td class="border">${index + 1}</td>
      <td class="border">${element.nameReq}</td>
      <td class="border">${element.num}</td>
      <td class="border">${element.timeOrder} </td>
      <td class="border">
        <button class="btn btn-outline-success btn-sm border-2">
          <i class="fa-solid fa-check"></i>
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

function deleteItem(index) {
  console.log(index);
  userRequsets.requsets.splice(index, 1);
  localStorage.setItem("reqs", JSON.stringify(userRequsets));
  displayDate();
}
