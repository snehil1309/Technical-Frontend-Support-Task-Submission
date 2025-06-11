/** @format */

const radios = document.querySelectorAll('input[name="unit"]');
const boxes = document.querySelectorAll(".option-box");
const addToCartBtn = document.getElementById("add-to-cart");
const totalAmount = document.getElementById("total-amount");
const toast = document.getElementById("toast");

const prices = {
  "unit-1": 10.0,
  "unit-2": 18.0,
  "unit-3": 24.0,
};

function handleSelection() {
  boxes.forEach((box) => {
    const selection = box.querySelector(".selection");
    const radio = box.querySelector('input[name="unit"]');

    if (radio.checked) {
      box.classList.add("selected");
      if (selection) selection.classList.add("show");
      totalAmount.textContent = `$${prices[radio.id].toFixed(2)} USD`;
    } else {
      box.classList.remove("selected");
      if (selection) selection.classList.remove("show");
    }
  });
}

function showToast() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function initializeSelection() {
  handleSelection();
}

radios.forEach((radio) => {
  radio.addEventListener("change", handleSelection);
});

addToCartBtn.addEventListener("click", showToast);

document.addEventListener("DOMContentLoaded", initializeSelection);
