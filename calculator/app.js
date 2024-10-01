let number1;
let operator;
let number2;
let displayValue;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

function appendToDisplay() {
    return null;
}

function clear() {
  return (displayValue = 0);
}

console.log(operate(2, "+", 2))
console.log(operate(2, "-", 2))
console.log(operate(2, "*", 2))
console.log(operate(2, "/", 2))