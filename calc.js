let equation = document.querySelector("#equation");
let result = document.querySelector("#result");
let primaryValue = 0;

function operate(eq) {
    if (eq.includes("/0")) { return result.textContent = "Nah." }
    primaryValue = eval(eq).toFixed(3);
    equation.value = primaryValue;
    result.textContent = `= ${primaryValue}`;
}

let clear = document.querySelector("#clear");
clear.onclick = () => {
    equation.value = "";
    primaryValue = 0;
    result.textContent = "";
}

let clearEntry = document.querySelector("#clear-entry");
clearEntry.onclick = () => { equation.value = ""; }

let equal = document.querySelector("#equal");
equal.onclick = () => { operate(equation.value); }

equation.onkeypress = (e) => {
    let nums = equation.value.split(/[*/+-]/);
    if (e.keyCode == "13") { 
        return operate(equation.value); 
    } else if (nums[nums.length-1].includes(".")) {
        return "1234567890-*+/".indexOf(String.fromCharCode(e.which)) >= 0;
    }
    return "1234567890-*+/.".indexOf(String.fromCharCode(e.which)) >= 0;
}

let eqButtons = document.querySelectorAll(".num, #zero, .op");
eqButtons.forEach(function(button) { 
    button.onclick = () => {
        equation.value += button.textContent;
    }
});

let decimal = document.querySelector("#dec");
decimal.onclick = () => {
    let nums = equation.value.split(/[*/+-]/);
    if (!nums[nums.length-1].includes(".")) { equation.value += "."; }
}

let back = document.querySelector("#back");
back.onclick = () => {
    return equation.value = equation.value.slice(0, equation.value.length-1);
}