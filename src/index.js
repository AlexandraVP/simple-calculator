
let lastCommand = null;
let calculatorValue = 0;

function calculateNextValue(command, value, commandValue) {
    if (command === 'SUM') {
        return value + commandValue;
    } else if (command === 'DIFF') {
        return value - commandValue;
    } else if (command === 'MUL') {
        return value * commandValue;
    } else if (command === 'DIV') {
        return value / commandValue;
    }
}

function onSecondOperandSubmit(secondOperand){
    calculatorValue = calculateNextValue(lastCommand,calculatorValue, secondOperand);
}

function handleCommand(command){
    lastCommand = command;
}

function inputOperand(operand){
    if(lastCommand === null){
        calculatorValue = operand;
    }else{
        onSecondOperandSubmit(operand);
    }
}

document.getElementById('plus-button').addEventListener('click', () => {
    const operand = +document.getElementById('text-field').value;
    inputOperand(operand);
    document.getElementById('text-field').value = "";
    handleCommand('SUM');
});

document.getElementById('minus-button').addEventListener('click', () => {
    const operand = +document.getElementById('text-field').value;
    inputOperand(operand);
    document.getElementById('text-field').value = "";
    handleCommand('DIFF');
});


document.getElementById('mul-button').addEventListener('click', () => {
    const operand = +document.getElementById('text-field').value;
    inputOperand(operand);
    document.getElementById('text-field').value = "";
    handleCommand('MUL');
});


document.getElementById('div-button').addEventListener('click', () => {
    const operand = +document.getElementById('text-field').value;
    inputOperand(operand);
    document.getElementById('text-field').value = "";
    handleCommand('DIV');
});

document.getElementById('output').addEventListener('click', () => {
    if(lastCommand !== null){
        const operand = +document.getElementById('text-field').value;
        inputOperand(operand);
    }
    document.getElementById('text-field').value = calculatorValue;
    handleCommand(null);
});