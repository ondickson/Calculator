let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');

let currentNumber = '';
let previousNumber = '';
let operation = null;

// Number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

// Operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.id;

        if (operator === 'clear') {
            clearCalculator();
        } else if (operator === 'backspace') {
            backspace();
        } else if (operator === 'equals') {
            calculate();
        } else {
            operation = button.textContent;
            previousNumber = currentNumber;
            currentNumber = '';
        }
    });
});

function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.value = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '×':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '÷':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = currentNumber;
    }
    display.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
}
