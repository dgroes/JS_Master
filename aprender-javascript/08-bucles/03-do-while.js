/* let numero = 2;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero <= 5);


console.log("----------------------------");
let azar = Math.floor(Math.random() * 6);
let contador = 1;
let adivinar = 5;
do {
    if (azar == adivinar) {

        console.log("Ház acertado!! el número es el: " + azar);
    } else {
        console.log("De los 3 intentos, no le haz atinado");
    }
    contador++;
} while (contador == 3);



console.log("----------------------------");
let a = 1;
do {

    if (a % 2 == 0) {
        console.log(a);
    }

    a++;
} while (a <= 20);


console.log("----------------------------");
let respuesta = "n";
let count = 1;
do {
    if (respuesta == "s") {
        console.log("Saliste");
        break;
    } else {
        console.log("¿Quieres salir? (S/N)");
    }

    count++;
} while (count <= 10);



console.log("----------------------------");
let colores = ['Rojo', 'Azúl', 'Verde', 'Amarillo', 'Negro', 'Morado']
let i = 0;
do {
    console.log(colores[i]);
    i++;

} while (i < colores.length - 1);
 */


const readline = require('readline-sync');

console.log("----------------------------");

let adivinar = 5;
let intentos = 3;
let contador = 0;
let numero;

do {
    numero = parseInt(readline.question("Adivina el numero entre 0 y 6: "));
    if (numero === adivinar) {
        console.log("¡Ház acertado!! El número es: " + adivinar);
        break;
    } else {
        console.log("Incorrecto, intenta de nuevo.");
    }
    contador++;
} while (contador < intentos);

if (numero !== adivinar) {
    console.log("No adivinaste en los 3 intentos. El número era " + adivinar);
}


console.log("----------------------------");

let colores = ['Rojo', 'Azul', 'Verde', 'Amarillo'];
let index = readline.keyInSelect(colores, "Elige un color: ");

if (index !== -1) {
    console.log("Elegiste: " + colores[index]);
} else {
    console.log("Cancelaste la selección.");
}
