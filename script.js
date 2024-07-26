var display = document.getElementById("calculator-screen");
display.value = 0;
var firstNumber = 0;
var secondNumber = 0;
var total = 0;
var operator = '';

function divide (a, b) {
  return a / b;
}

function multiply (a, b) {
    return a * b;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operator';
    }
}

var numberButtons = document.querySelectorAll(".number");
var operatorButtons = document.querySelectorAll(".operator");
var equalsButton = document.querySelector(".equals");

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        if (display.value == 0) {
            display.value = numberButton.value;
        } else {
            display.value += numberButton.value;
        }
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        firstNumber = display.value;
        operator = operatorButton.value;
        display.value = '';
        operatorButton.classList.remove("operator");
        operatorButton.classList.add("active");
    });
});

equalsButton.addEventListener("click", () => {
    secondNumber = display.value;
    total = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.value = total;
    operatorButtons.forEach((operatorButton) => {
        operatorButton.classList.remove("active");
        operatorButton.classList.add("operator");
    });
});