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
    display.value = result;
    displayValue = result;
  }
  if (operator == "-") {
    result = subtract(operationNumbers[0], operationNumbers[1]);
    display.value = result;
    displayValue = result;
  }
  if (operator == "x") {
    result = multiply(operationNumbers[0], operationNumbers[1]);
    display.value = result;
    displayValue = result;
  }
  if (operator == "/") {
    result = divide(operationNumbers[0], operationNumbers[1]);
    display.value = result;
    displayValue = result;
  }

  toggleButtons("enable", ".operator-button");
}

const display = document.getElementById("display");
display.value = displayValue;

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
  display.value += input;
  displayValue += input;
  toggleButtons("enable", ".operator-button");
}

function appendOperator(input) {
  if (operatorRegex.test(displayValue) === true) {
    operate();
  }

  display.value += input;
  displayValue += input;

  toggleButtons("disable", ".operator-button");
}

function appendDecimal(input) {
  display.value += input;
  displayValue += input;
  // Disable button
  toggleButtons("disable", "#decimal");
}

function clearDisplay() {
  display.value = "";
  displayValue = "";
  toggleButtons("disable", ".operator-button");
}

toggleButtons("disable", ".operator-button");
