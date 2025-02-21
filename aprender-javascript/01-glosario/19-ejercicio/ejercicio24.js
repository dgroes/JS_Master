//Ejercicio 24:

/* 
    Crea un array con 10 números aleatorios del 1 al 100.
    Luego, pide al usuario que adivine un número.

    Si acierta, muestra un mensaje de celebración, sin no,
    muestra el número correcto.

*/

let mensaje = "Tienes que elejeir un número";
alert(mensaje);

let numero = prompt("¿ Que número ? ")

let numeroAzar = Math.floor(Math.random() * 5) + 1;

if (numero == numeroAzar) {
    alert("🥳 ¡Enhorabuena! Has acertado 🎉");
} else {
    alert("No haz acertado 👎, haz F5 y vuelve a intentar");
}

