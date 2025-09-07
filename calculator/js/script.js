let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(num) {
  if (currentInput.includes('.') && num === '.') return;
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (firstOperand !== null) {
    calculateResult();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  if (firstOperand === null || currentInput === '') return;
  let secondOperand = parseFloat(currentInput);
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    case '%':
      result = firstOperand % secondOperand;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  firstOperand = null;
  operator = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput || (firstOperand !== null ? firstOperand + ' ' + operator : '0');
}