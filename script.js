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
  if (b === 0) {
    return "Error";
  } else {
    return a / b;
  }
}

function exponentiationFunction(a, b) {
  return Math.pow(a, b);
}

function percentageFunction(a, b) {
  if (b === 0) {
    return "Error";
  } else {
    return (a * 100) / b;
  }
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
  } else if (operator === "**") {
    return exponentiationFunction(num1, num2);
  } else if (operator === "%") {
    return percentageFunction(num1, num2);
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
let value;
let currentOp1 = "";
let operation = "";
let currentOp2 = "";
let counter = 0;

// Functions
function handleEqualBtnClick() {
  if (!currentOp2 || !currentOp1) {
    return;
  }

  let num1 = parseFloat(currentOp2);
  let num2 = parseFloat(currentOp1);
  let result = operate(num1, operation, num2);

  currentOp1 = result;
  currentOp2 = "";
  operation = "";
  operationPanel.textContent = "";

  if (result.toString().length > 16) {
    result = result.toString().slice(0, 16);
  }

  if (result.toString().length > 12) {
    resultPanel.style.fontSize = "30px";
  }

  resultPanel.textContent = result;
  counter++;
}

function keyNumbers(value) {
  if (counter > 0 && resultPanel.textContent.length > 0) {
    return;
  }

  if (currentOp1.toString().length < 16) {
    resultPanel.style.fontSize = "40px";
    if (value === "." && currentOp1.includes(".")) {
      return;
    }
    currentOp1 += value;
    resultPanel.textContent = currentOp1;
    if (currentOp1.toString().length > 12) {
      resultPanel.style.fontSize = "30px";
    }
  }
}

function keyOperation(keyOp) {
  if (operation && currentOp1 && currentOp2) {
    handleEqualBtnClick();
    currentOp2 = currentOp1;
  } else {
    currentOp2 = resultPanel.textContent || currentOp1;
  }

  if (operation || !currentOp1) {
    return;
  }
  operation = keyOp;
  operationPanel.textContent = currentOp2 + " " + operation;
  currentOp1 = "";
  resultPanel.textContent = "";
}

// Write numbers
numberBtn.forEach((number) => {
  number.addEventListener("click", function () {
    keyNumbers(this.dataset.value);
  });
});

document.addEventListener("keydown", function (event) {
  const keyNum = event.key;
  if (!isNaN(keyNum) && keyNum !== " ") {
    keyNumbers(keyNum);
  }
});

// Clear Button
clearBtn.addEventListener("click", function () {
  currentOp1 = "";
  operationPanel.textContent = "";
  resultPanel.textContent = "";
  counter = 0;
});

// Erase Button
eraseBtn.addEventListener("click", function () {
  currentOp1 = currentOp1.slice(0, -1);
  if (currentOp1.toString().length > 12) {
    resultPanel.style.fontSize = "30px";
  } else {
    resultPanel.style.fontSize = "40px";
  }
  resultPanel.textContent = currentOp1;
});

// Operators
operatorBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    keyOperation(this.dataset.value);
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (["+", "-", "*", "/"].includes(key)) {
    keyOperation(key);
  }
});

equalBtn.addEventListener("click", handleEqualBtnClick);
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    handleEqualBtnClick();
  }
});
