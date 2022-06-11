const operationDisplay = document.querySelector(".operationText");
const resultDisplay = document.querySelector(".resultText");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const decimal = document.querySelector("#decimal");
const addKey = document.querySelector("#add");
const subtractKey = document.querySelector("#subtract");
const divideKey = document.querySelector("#divide");
const multiplyKey = document.querySelector("#multiply");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
let lhsOperand = "";
let rhsOperand = "";
let operator = null;
let answer = "";

const formatter = new Intl.NumberFormat("en-GB");
const validateInput = (a, b) => {
  return isNaN(a) || isNaN(b) ? false : true;
};

const add = (a, b) => {
  let valid = validateInput(a, b);
  answer = valid ? formatter.format(a + b) : "Error";
};
const divide = (a, b) => {
  let valid = validateInput(a, b);
  answer = valid ? formatter.format(a / b) : "Error";
};
const subtract = (a, b) => {
  let valid = validateInput(a, b);
  answer = valid ? formatter.format(a - b) : "Error";
};
const multiply = (a, b) => {
  let valid = validateInput(a, b);
  answer = valid ? formatter.format(a * b) : "Error";
};
const operate = (fn, x, y) => {
  switch (fn) {
    case "multiply":
      multiply(x, y);
      break;
    case "divide":
      divide(x, y);
      break;
    case "add":
      add(x, y);
      break;
    case "subtract":
      subtract(x, y);
      break;
  }
};

const clearDisplay = (evt) => {
  lhsOperand = "";
  rhsOperand = "";
  operator = null;
  operationDisplay.textContent = "";
  resultDisplay.textContent = "";
};

const populateDisplay = (evt) => {
  let text = evt.target.firstChild.nodeValue;
  if (isNaN(text) && text !== "." && operator == null) {
    operator = evt.target.dataset.operation;
    lhsOperand = parseFloat(operationDisplay.textContent);
  } else if (isNaN(text) && text !== "." && operator !== null) {
    operate(operator, parseFloat(lhsOperand), parseFloat(rhsOperand));
    clearDisplay();
    lhsOperand = answer;
    text = "";
    operator = evt.target.dataset.operation;
    let str = document.createTextNode(answer);
    resultDisplay.appendChild(str);
  } else if ((!isNaN(text) || text == ".") && operator !== null) {
    rhsOperand += text;
    console.log(lhsOperand, operator, rhsOperand);
  }
  let str = document.createTextNode(text);
  operationDisplay.appendChild(str);
};

zero.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
one.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
two.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
three.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
four.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
five.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
six.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
seven.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
eight.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
nine.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
decimal.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
addKey.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
subtractKey.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
divideKey.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
multiplyKey.addEventListener("click", (evt) => {
  populateDisplay(evt);
});
equals.addEventListener("click", (evt) => {
  answer = "";
  operate(operator, parseFloat(lhsOperand), parseFloat(rhsOperand));
  let str = document.createTextNode(answer);
  resultDisplay.textContent = "";
  resultDisplay.appendChild(str);
});
clear.addEventListener("click", (evt) => {
  clearDisplay(evt);
});
