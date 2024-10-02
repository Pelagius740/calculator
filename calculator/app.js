// NOTE: I tried to follow the instructions as best as my understanding and ability allow me.
// This being said, I'd do some things differently.

let number1;
let operator;
let number2;
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
    operator = /\+|-|x|\//.exec(displayValue);
    let operationNumbers = displayValue.split(operator).map(element => Number(element));
    
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
}

const display = document.getElementById("display");
display.value = displayValue;

let clickedButton = null;
const buttons = document.querySelectorAll('.operator-button, #decimal');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        handleButtonClick(event);
    });
});

function handleButtonClick(event) {
    // "event.target" refers to the button that was clicked
    clickedButton = event.target;
    console.log("Button clicked:", clickedButton);
}

function appendNumber(input) {
    display.value += input;
}

function appendOperator(input) {
    display.value += input;
    // If there's an operator in display, call operate
    // Enable decimal button
    // Disable other operators (except =; change css)
}

function appendDecimal(input) {
    display.value += input;
    // Disable button
    clickedButton.setAttribute("disabled", "disabled");
}

function clearDisplay() {
    display.value = "";
}
