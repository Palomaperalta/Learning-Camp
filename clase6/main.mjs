import { number } from "./ejercicio11.mjs";

//Ejercicio 1
const nombre = "Paloma";
let edad = 27;
console.log(nombre, edad);

//Ejercicio 2
const texto = `Hola mi nombre es ${nombre} y tengo ${edad} años`;
console.log(texto);

//Ejercicio 3
const suma = (a, b) => a + b;
console.log(suma(2, 3));

//Ejercicio 4
const numbers = [1, 2, 3, 4, 5];
const numerosMultiplicados = numbers.map((number) => number * 2);
console.log(numerosMultiplicados);

//Ejercicio 5
const numerosPares = numbers.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

//Ejercicio 6
const numerosSum = numbers.reduce((acc, num) => acc + num, 0);
console.log(numerosSum);

//Ejercicio 7
const letras1 = ["a", "b", "c"];
const letras2 = ["d", "e", "f"];
const letrasTotal = [...letras1, ...letras2];
console.log(letrasTotal);

//Ejercicio 8
const pelicula = {
  titulo: "Oppenheimer",
  genero: "Historia",
  estreno: "2023",
};
const { titulo, genero, estreno } = pelicula;
console.log(pelicula);

//Ejercicio 9
function isObject(obj) {
  if (typeof obj === "object") {
    const { titulo, genero, estreno } = obj;
    return `El titulo de la pelicula es ${titulo} y su genero es ${genero}, se estreno en ${estreno}`;
  } else {
    return null;
  }
}
console.log(isObject(pelicula));

//Ejercicio 10
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
}
const paloma = new Estudiante("Paloma", 27, "Learning Camp");

console.log(paloma);

//Ejercicio 11
console.log(number(2));

//Ejercicio 12
async function numberAsync() {
  try {
    const result = await number(2);
    window.localStorage.setItem("result", result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
numberAsync();

//Ejercicio 13
function negativeNumber(n) {
  try {
    if (n > 0) {
      console.log(n);
    } else {
      throw "el numero es negativo";
    }
  } catch (error) {
    console.log(error);
  }
}
negativeNumber(-2);

//Ejercicio 14
const spanResult = document.getElementById("result");
spanResult.innerText = window.localStorage.getItem("result");

//Ejercicio 15
const inputName = document.getElementById("name");
const inputEdad = document.getElementById("edad");
const inputSubmit = document.getElementById("submit");

inputName.value = window.localStorage.getItem("name");
inputEdad.value = window.localStorage.getItem("edad");

inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.setItem("name", inputName.value);
  window.localStorage.setItem("edad", inputEdad.value);

  window.alert(`Bienvenido ${inputName.value} ${inputEdad.value}`);
});
