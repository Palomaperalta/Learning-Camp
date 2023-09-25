let operation;
let a;
let b;

const input = document.getElementById("input");
const buttonC = document.getElementById("button-c");
const buttonCero = document.getElementById("button-0");
const buttonUno = document.getElementById("button-1");
const buttonDos = document.getElementById("button-2");
const buttonTres = document.getElementById("button-3");
const buttonCuatro = document.getElementById("button-4");
const buttonCinco = document.getElementById("button-5");
const buttonSeis = document.getElementById("button-6");
const buttonSiete = document.getElementById("button-7");
const buttonOcho = document.getElementById("button-8");
const buttonNueve = document.getElementById("button-9");
const buttonDivide = document.getElementById("button-divide");
const buttonMultiply = document.getElementById("button-multiply");
const buttonSubstract = document.getElementById("button-substract");
const buttonSum = document.getElementById("button-sum");
const buttonEquals = document.getElementById("equals");
const buttonComa = document.getElementById("button-coma");

buttonC.addEventListener("click", () => resetC());
buttonCero.addEventListener("click", () => botonNumero(0));
buttonUno.addEventListener("click", () => botonNumero(1));
buttonDos.addEventListener("click", () => botonNumero(2));
buttonTres.addEventListener("click", () => botonNumero(3));
buttonCuatro.addEventListener("click", () => botonNumero(4));
buttonCinco.addEventListener("click", () => botonNumero(5));
buttonSeis.addEventListener("click", () => botonNumero(6));
buttonSiete.addEventListener("click", () => botonNumero(7));
buttonOcho.addEventListener("click", () => botonNumero(8));
buttonNueve.addEventListener("click", () => botonNumero(9));
buttonSum.addEventListener("click", () => {
  a = parseFloat(input.value);
  operation = "+";
});
buttonSubstract.addEventListener("click", () => {
  a = parseFloat(input.value);
  operation = "-";
});
buttonMultiply.addEventListener("click", () => {
  a = parseFloat(input.value);
  operation = "*";
});
buttonDivide.addEventListener("click", () => {
  a = parseFloat(input.value);
  operation = "/";
});
buttonEquals.addEventListener("click", () => equals());
buttonComa.addEventListener("click", () => botonNumero("."));

function resetC() {
  input.value = 0;
  operation = undefined;
  a = undefined;
  b = undefined;
}

function botonNumero(num) {
  if (!operation) {
    if (parseFloat(input.value) === 0) {
      input.value = num;
    } else {
      input.value = input.value + num;
    }
  } else {
    if (!b) {
      b = num;
      input.value = num;
    } else {
      b = parseFloat(input.value + num);
      input.value = input.value + num;
    }
  }
}

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

function equals() {
  if (operation === "+") {
    input.value = sum(a, b);
    operation = undefined;
    b = undefined;
    a = undefined;
  }
  if (operation === "-") {
    input.value = substract(a, b);
    operation = undefined;
    b = undefined;
    a = undefined;
  }
  if (operation === "*") {
    input.value = multiply(a, b);
    operation = undefined;
    b = undefined;
    a = undefined;
  }
  if (operation === "/") {
    input.value = divide(a, b);
    operation = undefined;
    b = undefined;
    a = undefined;
  }
}
