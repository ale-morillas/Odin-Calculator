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

// Variables
let num1;
let operator;
let num2;

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
