// NOTE: I tried to follow the instructions as best as my understanding and ability allow me.
// This being said, I'd do some things differently.

function add(num1, num2) {
  return Math.floor((num1 + num2) * 1000) / 1000;
}

function subtract(num1, num2) {
  return Math.floor((num1 - num2) * 1000) / 1000;
}

function multiply(num1, num2) {
  return Math.floor(num1 * num2 * 1000) / 1000;
}

function divide(num1, num2) {
  return Math.floor((num1 / num2) * 1000) / 1000;
}

function operate() {
  // Regex to get the operator
  let operator = operatorRegex.exec(displayValue);
  // Create an array with the numbers of the operation and convert them to integrals
  let operationNumbers = displayValue
    .split(operator)
    .map((element) => Number(element));
  let result;

  if (operator == "+") {
    result = add(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "-") {
    result = subtract(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "x") {
    result = multiply(operationNumbers[0], operationNumbers[1]);
  }
  if (operator == "/") {
    if (operationNumbers[1] == "0") {
      setDisplay("¯\\_(ツ)_/¯");
      return;
    }
    result = divide(operationNumbers[0], operationNumbers[1]);
  }

  // Not needed based on my tests, but since it's a requirement...
  if (result.length > 23) {
    setDisplay("ERROR!");
    return;
  }

  setDisplay(result);
  toggleButtons("enable", ".operator-button");
}

function setDisplay(input) {
  display.value = input;
  displayValue = input.toString();
}

function appendToDisplay(input) {
  if (/[0-9]/.test(display.value) === false) {
    setDisplay("");
  }
  display.value += input;
  displayValue += input.toString();
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

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 150);
  });
});

function appendNumber(input) {
  appendToDisplay(input);
  toggleButtons("enable", ".operator-button");
}

function appendOperator(input) {
  if (operatorRegex.test(displayValue)) {
    operate();
  }

  appendToDisplay(input);
  toggleButtons("disable", ".operator-button");
  toggleButtons("enable", "#decimal");
}

function appendDecimal(input) {
  if (displayValue != "") {
    appendToDisplay(input);
    toggleButtons("disable", "#decimal");
  }
}

function clearDisplay() {
  setDisplay("");
  toggleButtons("disable", ".operator-button");
  toggleButtons("enable", "#decimal");
}

function backspace() {
  lastChar = displayValue.slice(-1);
  newDisplayValue = displayValue.slice(0, -1);
  setDisplay(newDisplayValue);
  if (operatorRegex.test(lastChar) == true) {
    toggleButtons("enable", ".operator-button");
  }
}

const operatorRegex = /\+|-|x|\//;

let displayValue;
const display = document.getElementById("display");
setDisplay("");

toggleButtons("disable", ".operator-button");
