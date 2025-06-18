const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete')
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('#zero,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine');
const operatorButtons = Document.querySelectorAll('#plus,#minus,#multiply,#divide');

let currentNumber = '';
let previousNumber = '';
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {{
        currentNumber +=
        button.textContent;
        display.value = currentNumber;
    };
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    const result = calculate(previousNumber,currentNumber,operator);
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
});

clearButton.addEventListener('click', () => {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
});

deleteButton.addEventListener('click', () => {
    currentNumber =
    currentNumber.slice(0,-1);
    display.value = currentNumber;
});

function calculate(previousNumber,
currentNumber, operator) {
    const num1 =
    parseFloat(previousNumber);
    const num2 =
    parseFloat(currentNumber);
    switch (operator) {
        case '+':
        return num1 + num2;
        case '-':
        return num1 - num2;
        case '*':
        return num1 * num2;
        case '/':
        if (num2 === 0) {
            return 'error';
        }    
        return num1 / num2;
        default:
        return 0;    
    }
}
})