import { addOperator, addToDisplay, getEquation, handleEquals, operate, resetAll } from './functions.js';

const body = document.querySelector('body');

function start() {
    const heading = createHeading();
    body.appendChild(heading);

    const container = createContainer();

    const displayDiv = createDisplay();
    container.appendChild(displayDiv);

    const buttonsDiv = createButtons();
    container.appendChild(buttonsDiv);

    body.appendChild(container);

    addListeners();
}

function createHeading() {
    const heading = document.createElement('h1');
    heading.textContent = 'JavaScript Calculator';
    return heading;
}

function createContainer() {
    const container = document.createElement('div');
    container.className = 'container';

    return container;
}

function createDisplay() {
    const div = document.createElement('div');
    div.className = 'displayDiv';

    const display = document.createElement('h2');
    display.id = 'display';
    display.textContent = '';

    div.appendChild(display);

    return div;
}

function createButtons() {
    const div = document.createElement('div');
    div.className = 'buttonsDiv';

    const digits = ['', '', '', 'Clear', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'X', '.', 0, '=', '÷'];
    const numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', 'X', '÷'];
    const set1 = [7, 11, 15, 19];
    const set2 = [3, 16, 18];
    const set3 = [0, 1, 2];

    for (let i = 0; i < 20; i++) {
        const button = document.createElement('button');
        button.className = 'button';
        button.setAttribute('data-key', `${digits[i]}`);
        button.textContent = digits[i];

        if (set1.includes(i)) {
            button.style.backgroundColor = 'lightblue';
            button.setAttribute
        }
        else if (set2.includes(i)) {
            button.style.backgroundColor = 'cadetblue';
        }
        else if (set3.includes(i)) {
            button.style.visibility = 'hidden';
        }

        if (numbers.includes(button.textContent)) {
            button.setAttribute('data-type', 'number');
        }
        else if (operators.includes(button.textContent)) {
            button.setAttribute('data-type', 'operator');
        }

        div.appendChild(button);
    }

    return div;
}

function addListeners() {
    const clearBtn = document.querySelector('[data-key="Clear"]');
    clearBtn.addEventListener('click', resetAll);

    const equalsBtn = document.querySelector('[data-key="="]');
    equalsBtn.addEventListener('click', handleEquals);

    const numberBtns = document.querySelectorAll('[data-type="number"]');
    numberBtns.forEach(btn => btn.addEventListener('click', addToDisplay));

    const opBtns = document.querySelectorAll('[data-type="operator"]');
    opBtns.forEach(btn => btn.addEventListener('click', addOperator));
}

start();
