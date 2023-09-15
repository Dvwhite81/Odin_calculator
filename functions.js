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
    console.log('resetAll')
    const display = document.getElementById('display');
    display.textContent = '';
    isComplete = false;
    currentOp = null;
    currentResult = 0;
}

export function addToDisplay(e) {
    console.log('addToDisplay')
    const input = e.target.dataset.key;
    const display = document.getElementById('display');
    if (isComplete) {
        resetAll();
        isComplete = false;
    }
    let current = display.textContent;
    console.log('current', current);
    current += input;
    console.log('2 current', current)

    display.textContent = current;
}

export function addOperator(e) {
    console.log('addOperator')
    const display = document.getElementById('display');
    const firstNum = parseFloat(display.textContent);

    console.log('currentOp', currentOp);
    if (currentOp !== null) {
        if (isComplete) {
            console.log('isComplete - currentResult',currentResult)
            isComplete = !isComplete;
        }
        else {
            currentResult = getEquation();
            console.log('currentResult', currentResult);
        }
    }
    currentOp = e.target.dataset.key;
    console.log('2 currentOp', currentOp)
    insertOperator(e);
}

function insertOperator(e) {
    console.log('insertOperator')
    const display = document.getElementById('display');
    const opKey = e.target.dataset.key;
    display.textContent += (' ' + opKey + ' ');
}

export function getEquation() {
    console.log('getEquation')
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
    console.log('handleEquals')
    isComplete = true;
    getEquation();
}
