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
      const color = element.deleted
        ? "red"
        : element.completed
        ? "green"
        : element.delay
        ? "orange"
        : "transparent";
      content += `

      <tr class="border" style="background:${color} !important">
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

// Delete Item
function deleteItem(index) {
  // bakeryData[bakeryIndex].reqests.splice(index, 1);
  bakeryData[bakeryIndex].reqests[index].deleted = true;
  bakeryData[bakeryIndex].reqests[index].completed = false;
  bakeryData[bakeryIndex].reqests[index].delay = false;
  localStorage.setItem("bakeryData", JSON.stringify(bakeryData));
  localStorage.setItem(
    "Massege",
    `تم رفض طلبكم من فضلك توجه الي مخبز اخر ${
      bakeryData[bakeryIndex].reqests[index].nameReq +
      " " +
      bakeryData[bakeryIndex].reqests[index].num
    } رغيف`
  );
  displayDate();
}

// // delay
function delayItem(index) {
  bakeryData[bakeryIndex].reqests[index].delay = true;
  bakeryData[bakeryIndex].reqests[index].completed = false;
  bakeryData[bakeryIndex].reqests[index].deleted = false;
  localStorage.setItem("bakeryData", JSON.stringify(bakeryData));
  localStorage.setItem(
    "Massege",
    `تم تأخر طلبكم 20 دقيقه ${
      bakeryData[bakeryIndex].reqests[index].nameReq +
      " " +
      bakeryData[bakeryIndex].reqests[index].num
    } رغيف`
  );
  displayDate();
}

// Accepted Item
function acceptedItem(index) {
  bakeryData[bakeryIndex].reqests[index].completed = true;
  bakeryData[bakeryIndex].reqests[index].delay = false;
  bakeryData[bakeryIndex].reqests[index].deleted = false;
  localStorage.setItem("bakeryData", JSON.stringify(bakeryData));
  localStorage.setItem(
    "Massege",
    `من فضلك توجع الي المخبز لاستلام الطلب الخاص بك ${
      bakeryData[bakeryIndex].reqests[index].nameReq +
      " " +
      bakeryData[bakeryIndex].reqests[index].num
    } رغيف`
  );
  displayDate();
}
