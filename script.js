let displayField = document.getElementById('display');

function appendNumber(number) {
    displayField.value += number;
}

function appendOperator(operator) {
    displayField.value += ` ${operator} `;
}

function deleteNumber() {
    displayField.value = displayField.value.slice(0, -1);
}

function resetCalculator() {
    displayField.value = '';
}

function calculate() {
    try {
        displayField.value = eval(displayField.value);
    } catch {
        displayField.value = 'Error';
    }
}

