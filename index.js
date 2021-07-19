const firstInputField = document.querySelector(".input-1");
const secondInputField = document.querySelector(".input-2");
const customNumber = document.querySelector(".custom-btn");
const resetBtn = document.querySelector(".reset-btn");
const tipAmount = document.querySelector(".amount");
const tipTotal = document.querySelector(".total");
const gridButtons = document.querySelector(".grid-btns");

// function validateInputs(inputs) {
//   inputs.forEach((input) => {
//     if (input.value.trim() === "") {
//       showError();
//       console.log("error");
//     } else {
//       showSuccess();
//       console.log("success");
//     }
//   });
// }
// function showError() {
//   document.querySelector(".input-2").classList.add("error");
//   // secondInputField.;
// }
// function showSuccess() {
//   document.querySelector("input").classList.add("success");
// }
function calcBill(amount, people) {
  return (parseFloat(amount / people) + parseFloat(tipAmountPerPerson)).toFixed(
    2
  );
}

function calcTip(percentageNum, amount, people) {
  // let percentAmount = ((percentageNum / 100) * amount).toFixed(2);
  // let percentBillPerPerson = amount + percentAmount / 2;
  // let totalPerPerson = (((percentageNum / 100) * amount) / people).toFixed(2);
  tipAmountPerPerson = (((percentageNum / 100) * amount) / people).toFixed(2);
  tipAmount.textContent = `$${tipAmountPerPerson}`;
  tipTotal.textContent = `$${calcBill(amount, people)}`;
}

gridButtons.addEventListener("click", function (e) {
  e.preventDefault();
  const percentageNum = e.target.value;
  const amount = firstInputField.value;
  const numPeople = secondInputField.value;

  if (e.target.classList.contains("click-btn")) {
    if (amount === "" || numPeople === "") {
      tipAmount.textContent = `$0.00`;
      tipTotal.textContent = `$0.00`;
      validateInputs([amount, numPeople]);
    } else {
      calcTip(percentageNum, amount, numPeople);
    }
  }
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tipAmount.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  firstInputField.value = "";
  secondInputField.value = "";
  customNumber.value = "";
});

// function calcPercentage(percentageNum, amount) {
//   return ((percentageNum / 100) * amount).toFixed(2);
// }

// const amount = firstInputField.value.trim();
// const customized = customBtn.value.trim();
// const numPeople = secondInputField.value.trim();

// //Check to match the target element clicked
// if (e.target.classList.contains("btn")) {
//   const btnId = e.target.id;
//   console.log(btnId);

//   if (btnId === "five") {
//     let fivePercent = calcPercentage(5, amount);
//     tipAmount.textContent = `$${fivePercent}`;
//     let fivePercentTotal = calcTotal(customized, amount, numPeople);
//     tipTotal.textContent = `$${fivePercentTotal}`;
//   }
//   if (btnId === "ten") {
//     let tenPercent = calcPercentage(10, amount);
//     tipAmount.textContent = `$${tenPercent}`;
//     let tenPercentTotal = calcTotal(10, amount, numPeople);
//     tipTotal.textContent = `$${tenPercentTotal}`;
//   }
//   if (btnId === "fifteen") {
//     let fifteenPercent = calcPercentage(15, amount);
//     tipAmount.textContent = `$${fifteenPercent}`;
//     let fifteenPercentTotal = calcTotal(15, amount, numPeople);
//     tipTotal.textContent = `$${fifteenPercentTotal}`;
//   }
//   if (btnId === "twenty-five") {
//     let twentyFivePercent = calcPercentage(25, amount);
//     tipAmount.textContent = `$${twentyFivePercent}`;
//     let twentyFivePercentTotal = calcTotal(25, amount, numPeople);
//     tipTotal.textContent = `$${twentyFivePercentTotal}`;
//   }
//   if (btnId === "fifty") {
//     let fiftyPercent = calcPercentage(50, amount);
//     tipAmount.textContent = `$${fiftyPercent}`;
//     let fiftyPercentTotal = calcTotal(50, amount, numPeople);
//     tipTotal.textContent = `$${fiftyPercentTotal}`;
//   }
// }
