// Set Current year in footer
document.getElementById(`year`).textContent = new Date().getFullYear();

// Calculator display element and state variables
const calculatorScreenDisplay = document.getElementById(`calculator-display`);
let expression = ``;
let result;

// Remove the last character from the calculator display and expression
function backspace() {
    if (calculatorScreenDisplay.value.length > 0) {
        calculatorScreenDisplay.value = calculatorScreenDisplay.value.substring(0, calculatorScreenDisplay.value.length - 1);
        expression = expression.substring(0, expression.length - 1);
    }
}

// Add button value to expression with smart operator handling
function addExpression(button) {
    let value = button.value;
    const lastCharacterInExpression = calculatorScreenDisplay.value.trim().slice(-1);
    
    // If the pressed button is a minus or plus operator
    if (value == `-` || value == `+`) {
        if(isNaN(lastCharacterInExpression) && lastCharacterInExpression != `(` && lastCharacterInExpression != `)`) {
            value = `(${value}`;
        }
    }

    calculatorScreenDisplay.value += value;
    expression += value;
    calculatorScreenDisplay.scrollTop = calculatorScreenDisplay.scrollHeight;
}

// Evaluate the current expression using math.js and update the display
function calculateResult() {
    expression = expression.trim();
    try {
        result = math.evaluate(expression);
        expression = result.toString();
    } catch {
        result = `Error`;
        expression = ``;
    }
    calculatorScreenDisplay.value = result;
}

// Reset the calculator: clear expression, result, and display (states)
function reset() {
    expression = ``;
    result = null;
    calculatorScreenDisplay.value = ``;
}
