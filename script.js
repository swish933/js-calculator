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
  op(x, y);
};
