let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let mutliplicacion = numero1 * numero2;

console.log("Suma: " + suma);
console.log("resta: " + resta);
console.log("mutliplicacion: " + mutliplicacion);


//Asignacion

let numerito = 17;
numerito *= 3;

console.log(numerito);


//Comparación
let numerazo = 31;
console.log(numerazo == "31");
console.warn(numerazo === "31");

console.warn(numerazo != 38);
console.warn(numerazo != "31");
console.warn(numerazo !== "31");


console.warn(numerazo > 5);



//Operadores Lógicos
let mayorEdad = true;
let tieneEntrada = true;

console.log(mayorEdad && tieneEntrada);
console.log(mayorEdad || tieneEntrada);
console.log(!mayorEdad);

//Operadores de cadenas
let mensaje1 = "Hola😄";
let mensaje2 = "¿Que tal 🐶?";
let mensajeTotal = mensaje1 + " " + mensaje2;
mensajeTotal += " Soy un gato, no un perro 🙀";
console.log(mensajeTotal);


//Operadores de incremento y decremento
let cifra = 21;
cifra++;
cifra++;
cifra++;
cifra--;
console.log(cifra);