console.log("********Arrays en JS *********");
console.log("");

//Array
let nombres = ['Domingo', 'Facundo', 'José Luis', 'Clemente', 'Humberto'];
console.log(nombres);
console.log(nombres[4]); //Acceder al elemento (4)

let peliculas = new Array(['Batman', 'Death Proof', 'Nightcrawler']);
console.log(peliculas);
console.log(peliculas.length);

//Modificar un elemento de un Array
nombres[3] = "Jorge Nitales";
console.log(nombres);


//Práctica de Arrays:
let elemento = parseInt(prompt("¿Que usuario quieres del array?", 0));
if(elemento >= nombres.length){
    alert("Upps!! ese usuario en concreto no existe, elige otro");
} else {
    alert("El usuario si existe dentro del array: ".concat(nombres[elemento]));
}