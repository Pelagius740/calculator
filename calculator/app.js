// NOTE: I tried to follow the instructions as best as my understanding and ability allow me.
// This being said, I'd do some things differently.

let displayValue = "";

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
  displayValue = display.value;
  // Regex to get the operator
  let operator = /\+|-|x|\//.exec(displayValue);
  // Create an array with the numbers of the operation and convert them to integrals
  let operationNumbers = displayValue
    .split(operator)
    .map((element) => Number(element));

  if (operator == "+") {
    display.value = add(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "-") {
    display.value = subtract(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "x") {
    display.value = multiply(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "/") {
    display.value = divide(operationNumbers[0], operationNumbers[1]);
  }

  toggleOperatorButtons("enable");
}

const operatorButtons = document.getElementsByClassName("operator-button");
const decimalButton = document.getElementById("decimal");
const display = document.getElementById("display");
display.value = displayValue;

function toggleOperatorButtons(action) {
  for (let i = 0; i < operatorButtons.length; i++) {
    if (action == "enable") {
      operatorButtons[i].removeAttribute("disabled");
    } else if (action == "disable") {
      operatorButtons[i].setAttribute("disabled", "disabled");
    }
  }
}

// This variables are used to enable operators one time only
// after a number has been pressed. The objective being to do
// one operation at once, as the instructions say.
let d = 0;
let o = 0;

function appendNumber(input) {
  display.value += input;
  if (o == 0) {
    toggleOperatorButtons("enable");
    o++;
  }
}

function appendOperator(input) {
  display.value += input;
  toggleOperatorButtons("disable");
}

function appendDecimal(input) {
  display.value += input;
  // Disable button
  //clickedButton.setAttribute("disabled", "disabled");
}

function clearDisplay() {
  display.value = "";
  o = 0;
  toggleOperatorButtons("disable");
}

toggleOperatorButtons("disable");
