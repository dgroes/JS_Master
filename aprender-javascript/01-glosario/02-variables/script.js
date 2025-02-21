//Las variables son utiles para almecenar información
//Son una expecie de "cajas" en las que podemos almacenear infomración y podemos "llamar a esas casa para mostrar o utilizar el contenido que está dentro."

//Tipos de variables
var nombre = "Dalpo 🐱";
let apellido = "Chi";
const nacionalidad = "Chileno 🇨🇱";


//Deninifr variables let + variable reservada + contenido;
let heroe = "Spiderman 🕷️";
let ciudad = "New York 🌇";
let edad = 23;

let heroe_ciudad = heroe + " es de " + ciudad;

console.log(heroe_ciudad);

//Sobre-escribir una variale:
heroe = "Capitan America 💪";
ciudad = "San Bernardo";
edad = 100;

//Mostrar una variable en la consola:
console.log(heroe, ciudad, edad);



console.log(heroe_ciudad);

//Alerta de una variable
alert(heroe_ciudad);
