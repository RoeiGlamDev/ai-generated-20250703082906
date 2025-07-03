// Get the display element
const display = document.getElementById('display');

// Get the clear button
const clearButton = document.getElementById('clear');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.number');

// Get all the operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Initialize the current value and previous value
let currentValue = '';
let previousValue = '';

// Initialize the current operator
let currentOperator = '';

// Add event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the button
    const value = button.getAttribute('data-value');

    // Append the value to the current value
    currentValue += value;

    // Update the display
    display.value = currentValue;
  });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the button
    const value = button.getAttribute('data-value');

    // Check if the value is '='
    if (value === '=') {
      // Calculate the result
      const result = calculateResult(previousValue, currentValue, currentOperator);

      // Update the display
      display.value = result;

      // Reset the current value and previous value
      currentValue = result;
      previousValue = '';
    } else {
      // Update the previous value and current operator
      previousValue = currentValue;
      currentOperator = value;

      // Reset the current value
      currentValue = '';
    }
  });
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  // Reset the display and values
  display.value = '';
  currentValue = '';
  previousValue = '';
  currentOperator = '';
});

// Function to calculate the result
function calculateResult(previousValue, currentValue, operator) {
  // Convert the values to numbers
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);

  // Check the operator and calculate the result
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}

// Add fade-in animation to the display
display.classList.add('fade-in');

// Add smooth transition to the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.classList.add('smooth-transition');
});