const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
  const initialValue = 0;
  return arr.length ? arr.reduce((previous, current) => previous + current) : 0;
};

const multiply = function(arr2) {
  return arr2.length ? arr2.reduce((previous, current) => previous * current) : 0;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
