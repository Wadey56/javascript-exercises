const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	return array.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(array) {
	return array.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function(number, power) {
  if (number == 0) {
    return 1;
  }
  let result = number;
	for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
  // 4 16 64
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  }
  let result = number;
	for (let i = number - 1; i > 0; i--) {
    result *= i;
  }
  return result;
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
