let equation = document.querySelector("#equation");
let result = document.querySelector("#result");
let primaryValue = 0;

function operate(str) {
    return primaryValue = eval(str);
}

let clear = document.querySelector("#clear");
clear.onclick = () => {
    equation.value = "";
    primaryValue = 0;
    result.textContent = "";
}

let clearEntry = document.querySelector("#clear-entry");
clearEntry.onclick = () => {
    equation.value = "";
}

let equal = document.querySelector("#equal");
equal.onclick = () => {
    operate(equation.value);
    equation.value = primaryValue;
    result.textContent = primaryValue;
}

//equation.addEventListener('input', function() {
//    result.textContent = equation.value;
//});

equation.onkeypress = (e) => {
    return "1234567890-*+/".indexOf(String.fromCharCode(e.which)) >= 0;
}

let numButtons = document.querySelectorAll(".num, #zero, .op, #dec");
numButtons.forEach(function(button) { 
    button.onclick = () => {
        equation.value += button.textContent;
    }
});