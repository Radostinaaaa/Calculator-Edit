
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Can't divide by zero!";
    }
    return a / b;
}


function operate(operator, a, b) {
    const number1 = Number(a);
    const number2 = Number(b);

    switch (operator) {
        case "+":
            const addResult = add(number1, number2);
            return addResult;
        case "-":
            const minusResult = subtract(number1, number2);
            return minusResult;
        case "x":
            const multiplyResult = multiply(number1, number2);
            return multiplyResult;
        case "/":
            const divideResult = divide(number1, number2);
            return divideResult;
        default:
            return "Invalid operator";
    }
}

const display = document.querySelector("#Display-area .answerScreen");
const buttons = document.querySelectorAll("button");
const number1 = document.querySelector(".values .one");
const number2 = document.querySelector(".values .two");
const equals = document.querySelector(".values .last-operation");

for (const button of buttons) {
    button.addEventListener("click", event => {
        buttonText = event.target.innerText;
        if (event.target.id === "erase") {
            display.innerHTML = display.innerHTML.slice(0, -1); 
            number1.innerText = display.innerHTML;
        } 

        if (buttonText === ".") {
            if (!display.innerHTML.includes(".")) {
                display.innerHTML += ".";
            }
        } else {
            if (isNaN(buttonText)) {
                if (number1.innerText !== '' && number2.innerText === '') {
                    if(equals.innerText === "=") {
                        equals.innerText = buttonText;
                    } else {
                        number2.innerText = display.innerHTML;
                    }
                }
                
                if (number1.innerText === '') {
                    number1.innerText = display.innerHTML;
                }
    
                if (buttonText === "=") {
                    const equalsResult = operate(equals.innerText, Number(number1.innerText), Number(number2.innerText));
                    display.innerHTML = equalsResult;
                    equals.innerText = buttonText;
                    number1.innerText = equalsResult;
                    number2.innerText = "";
                } else if (number1.innerText != '' && number2.innerText != '') {
                    const result = operate(equals.innerText, Number(number1.innerText), Number(number2.innerText));
                    
                    display.innerHTML = result;
                    number1.innerText = result;
                    number2.innerText = '';
                    equals.innerText = buttonText;
                }
    
                if (buttonText !== "=" && buttonText !== "C") {
                    equals.innerText = buttonText;
                }
    
                if (buttonText === "C") {
                    display.innerHTML = "";
                    number1.innerText = "";
                    number2.innerText = "";
                    equals.innerText = "";
                }
            } else {
                if (display.innerHTML == 0 & buttonText == 0) {
                    display.innerHTML = 0;
                } else if (number1.innerText != '' && number1.innerText === display.innerHTML) {
                    display.innerHTML = buttonText;
                } else if (number1.innerText != '' && number2.innerText == '') {
                    display.innerHTML += buttonText;
                } else {
                    display.innerHTML += buttonText;
                }
            }
        }
    })
}
