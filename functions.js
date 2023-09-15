let isComplete = false;

export function operate(a, b, op) {
    let result;
    switch (op) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }

    return result;
}

function add(a, b) {
    return ((a * 100) + (b * 100)) / 100;
}

function subtract(a, b) {
    return ((a * 100) - (b * 100)) / 100;
}

function multiply(a, b) {
    return ((a * 100) * (b * 100)) / 100;
}

function divide(a, b) {
    return ((a * 100) / (b * 100)) / 100;
}

export function resetAll() {
    const display = document.getElementById('display');
    display.textContent = '';
}

export function addToDisplay(e) {
    const input = e.target.dataset.key;
    const display = document.getElementById('display');
    if (isComplete) {
        resetAll();
        isComplete = false;
    }

    let current = display.textContent;
    current += input;

    display.textContent = current;
}

export function addOperator(e) {
    const display = document.getElementById('display');
    const firstNum = parseFloat(display.textContent);
    addSpace();
    addToDisplay(e);
    addSpace();
}

function addSpace() {
    const display = document.getElementById('display');
    display.textContent += ' ';
}

export function getEquation() {
    const display = document.getElementById('display');
    display.textContent += ' = ';
    const equation = display.textContent;
    const [first, op, second, equals] = equation.split(' ');
    const a = parseFloat(first);
    const b = parseFloat(second);

    const result = operate(a, b, op);
    display.textContent = result;
    isComplete = true;
}
