// Basic Math Operation Functions
function addFunction(a, b) {
  return a + b;
}

function subtractFunction(a, b) {
  return a - b;
}

function multiplyFunction(a, b) {
  return a * b;
}

function divideFunction(a, b) {
  return a / b;
}

// Function Operate
function operate(num1, operator, num2) {
  if (operator === "+") {
    return addFunction(num1, num2);
  } else if (operator === "-") {
    return subtractFunction(num1, num2);
  } else if (operator === "*") {
    return multiplyFunction(num1, num2);
  } else if (operator === "/") {
    return divideFunction(num1, num2);
  }
}

// Keyboard variables
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const eraseBtn = document.querySelector(".erase");
const clearBtn = document.querySelector(".clear");
const operationPanel = document.querySelector(".operation-panel");
const resultPanel = document.querySelector(".result-panel");
let currentOp = "";

// Write numbers
numberBtn.forEach((number) => {
  number.addEventListener("click", function () {
    if (currentOp.toString().length < 16) {
      let value = this.dataset.value;
      if (value === "." && currentOp.includes(".")) {
        return;
      }
      currentOp += value;
      resultPanel.textContent = currentOp;
      if (currentOp.toString().length > 12) {
        resultPanel.style.fontSize = "30px";
      }
    }
  });
});
