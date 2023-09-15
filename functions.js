let isComplete = false;
let currentOp = null;
let currentResult;

export function operate(a, b, op) {
    let result;
    switch (op) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'X':
            result = multiply(a, b);
            break;
        case '÷':
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
    return ((a * 100) * (b * 100)) / 10000;
}

function divide(a, b) {
    if (b === 0) {
        return "Ha ha";
    }
    else {
        return ((a * 100) / (b * 100)) / 100;
    }
}

export function resetAll() {
    const display = document.getElementById('display');
    display.textContent = '';
    isComplete = false;
    currentOp = null;
    currentResult = 0;
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

    if (currentOp !== null) {
        if (isComplete) {
            isComplete = !isComplete;
        }
        else {
            currentResult = getEquation();
        }
    }
    currentOp = e.target.dataset.key;
    insertOperator(e);
}

function insertOperator(e) {
    const display = document.getElementById('display');
    const opKey = e.target.dataset.key;
    display.textContent += (' ' + opKey + ' ');
}

export function getEquation() {
    const display = document.getElementById('display');
    display.textContent += ' = ';
    const equation = display.textContent;
    const [first, op, second, equals] = equation.split(' ');
    const a = parseFloat(first);
    const b = parseFloat(second);

    const result = operate(a, b, op);
    currentResult = result;
    display.textContent = result;
    return result;
}

export function handleEquals() {
    isComplete = true;
    getEquation();
}

export function handleDelete() {
    const display = document.getElementById('display');
    let currentContent = display.textContent;
    let newContent = currentContent.slice(0, -1);
    display.textContent = newContent;
}
