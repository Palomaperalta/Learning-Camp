function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operation) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if (operation === "+") {
      console.log(sum(firstNumber, secondNumber));
    }
    if (operation === "-") {
      console.log(substract(firstNumber, secondNumber));
    }
    if (operation === "*") {
      console.log(multiply(firstNumber, secondNumber));
    }
    if (operation === "/") {
      console.log(divide(firstNumber, secondNumber));
    }
  }
}
calculator(1, 2, "+");
calculator("1", 2, "+");

calculator("a", 1, "+");
calculator(1, 2, "hi");
