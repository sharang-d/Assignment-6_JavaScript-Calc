var operator = '',
    operand1 = null,
    operand2 = null;

// whenever a number button is pressed
function put(character) {
    var txt = document.getElementById("txtExpression");
    if (operator != '') {
        var c = txt.value.charAt(txt.value.length - 1);
        if (c == ' ')
            txt.value = '';
    } 
    txt.value += character;
}

// whenever [+-*/] buttons are pressed
function putOperator(character) {
    var txt = document.getElementById("txtExpression");
    if (txt.value == '')
        return;
    if (operator != '') {
        operand2 = parseFloat(txt.value);
        var result = operate();
        txt.value = result + ' ' + character + ' ';
        operand2 = operand1 = result;
        // Set operand2 = operator1 to achieve functionality of some
        // older calculators wherein if you press <number> <operator> 
        // and keep on pressing '=' it considers the first
        // operand as the second operand as well
        operator = character;
    } else {
        operator = character;
        operand1 = parseFloat(txt.value);
        txt.value += ' ' + character + ' ';
        // keep spaces before and after the operators
        operand2 = null;
    }
}

// when '=' button is pressed
function evaluateExpression() {
    var txt = document.getElementById("txtExpression");
    var result;
    if (operator) {
        operand2 = parseFloat(txt.value);
        result = operate();
        operand1 = result;
        operand2 = null;
        operator = '';
        txt.value = result;
    }
}

// does the actual (operand1 <operator> operannd2 = ?) calculation
function operate() {
    var result;
    switch (operator) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    case '/':
        result = operand1 / operand2;
        break;
    }
    return result;
}

// Remove the last character
function backspace() {
    var txt = document.getElementById("txtExpression");
    txtValue = txt.value;
    var lastChar = txtValue[txtValue.length - 1];
    if (lastChar != ' ') //do nothing if the last character is a space
        txt.value = txtValue.substring(0, txtValue.length - 1); //remove last character
}

// Clear function
function reset() {
    var txt = document.getElementById("txtExpression");
    operator = '';
    operand1 = operand2 = null;
    txt.value = '';
}

// the operations from the last column of the calc
function special(num) {
    var txt = document.getElementById("txtExpression");
    if (txt.value == '' || txt.value.charAt(txt.value.length - 1) == ' ')
        return;
    text = parseFloat(txt.value);
    switch (num) {
    case 0:
        txt.value = 1 / text;
        break;
    case 1:
        txt.value = Math.sqrt(text);
        break;
    case 2:
        txt.value = text * text;
        break;
    case 3:
        txt.value = text * text * text;
    }
}
