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
    `تم رفض طلبكم وهو ${bakeryData[bakeryIndex].reqests[index].num} رغيف , من فضلك توجه الي مخبز اخر`
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
    `تم تأجيل طلبكم وهو ${bakeryData[bakeryIndex].reqests[index].num} رغيف لمدة 20 دقيقة بسبب كثره الطلبات في الوقت المحدد`
  );
  displayDate();
}
// Price
let x = 5;

// Accepted Item
function acceptedItem(index) {
  bakeryData[bakeryIndex].reqests[index].completed = true;
  bakeryData[bakeryIndex].reqests[index].delay = false;
  bakeryData[bakeryIndex].reqests[index].deleted = false;
  localStorage.setItem("bakeryData", JSON.stringify(bakeryData));
  localStorage.setItem(
    "Massege",
    ` من فضلك توجه الي المخبز لاستلام الطلب الخاص بك وهو ${
      bakeryData[bakeryIndex].reqests[index].num
    } رغيف و دفع مبلغ ${
      (x * bakeryData[bakeryIndex].reqests[index].num) / 100
    }  جنيه عند الاستلام `
  );
  displayDate();
}
