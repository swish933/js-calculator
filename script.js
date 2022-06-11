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

const formatter = new Intl.NumberFormat("en-GB");
const validateInput = (a, b) => {
  return isNaN(a) || isNaN(b) ? false : true;
};
const add = (a, b) => {
  let valid = validateInput(a, b);
  console.log(valid ? formatter.format(a + b) : "Error");
};
const divide = (a, b) => {
  let valid = validateInput(a, b);
  console.log(valid ? formatter.format(a / b) : "Error");
};
const subtract = (a, b) => {
  let valid = validateInput(a, b);
  console.log(valid ? formatter.format(a - b) : "Error");
};
const multiply = (a, b) => {
  let valid = validateInput(a, b);
  console.log(valid ? formatter.format(a * b) : "Error");
};
const operate = (op, x, y) => {
  let result = `${op(x, y)}`;
  console.log(result);
};

const populateDisplay = (evt) => {
  let text = evt.target.firstChild.nodeValue;
  if (isNaN(text) && operator == null) {
    lhsOperand = parseInt(operationDisplay.textContent);
    operator = evt.target.dataset.operation;
    // console.log(lhsOperand, operator);
  } else if (operator !== null) {
    rhsOperand += text;
    // console.log(rhsOperand);
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
  operate(operator, parseInt(lhsOperand), parseInt(rhsOperand));
});
clear.addEventListener("click", (evt) => {
  // clearDisplay()
});
