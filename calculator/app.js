// NOTE: I tried to follow the instructions as best as my understanding and ability allow me.
// This being said, I'd do some things differently.

let displayValue = "";
const operatorRegex = /\+|-|x|\//;

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

function operate() {
  //displayValue = display.value;
  // Regex to get the operator
  let operator = operatorRegex.exec(displayValue);
  // Create an array with the numbers of the operation and convert them to integrals
  let operationNumbers = displayValue
    .split(operator)
    .map((element) => Number(element));
  let result;

  if (operator == "+") {
    result = add(operationNumbers[0], operationNumbers[1]);
    setDisplay(result);
  }
  if (operator == "-") {
    result = subtract(operationNumbers[0], operationNumbers[1]);
    setDisplay(result);
  }
  if (operator == "x") {
    result = multiply(operationNumbers[0], operationNumbers[1]);
    setDisplay(result);
  }
  if (operator == "/") {
    result = divide(operationNumbers[0], operationNumbers[1]);
    setDisplay(result);
  }

  toggleButtons("enable", ".operator-button");
}

const display = document.getElementById("display");
display.value = displayValue;

function setDisplay(input) {
  display.value = input;
  displayValue = input;
}

function appendToDisplay(input) {
  display.value += input;
  displayValue += input;
}

function toggleButtons(action, selector) {
  const buttons = document.querySelectorAll(selector);
  for (let i = 0; i < buttons.length; i++) {
    if (action == "enable") {
      buttons[i].removeAttribute("disabled");
    } else if (action == "disable") {
      buttons[i].setAttribute("disabled", "disabled");
    }
  }
}

// This variable is used to avoid putting multiple decimals
// in one number.
let d = 0;

function appendNumber(input) {
  appendToDisplay(input);
  toggleButtons("enable", ".operator-button");
}

function appendOperator(input) {
  if (operatorRegex.test(displayValue) === true) {
    operate();
  }

  appendToDisplay(input);
  toggleButtons("disable", ".operator-button");
}

function appendDecimal(input) {
  appendToDisplay(input);
  // Disable button
  toggleButtons("disable", "#decimal");
}

function clearDisplay() {
  appendToDisplay(input);
  toggleButtons("disable", ".operator-button");
}

toggleButtons("disable", ".operator-button");
