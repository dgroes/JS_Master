//Ejercicio 33:

/* 
    Crea un programa donde tengas un botón que cuente cuántas veces lo haz pulsado

    Cuando lleges a 15 clicks, se muestra un mensaje de "Limite Alcanzado"

    Si se soprepasa, el contador se resetea y el contador comienza de 0 nuevamente


*/
let contador = 0;

let boton = document.querySelector("#botonContador");

let numero = document.querySelector("#numeroContador");


aumentarContador = boton.addEventListener("click", () => {
    contador++;

    numero.textContent = contador;
    if (contador === 16) {
        numero.textContent = "Limite alcanzado"
        contador = 0;
    } else {
        contador.textContent = contador;
    }
})
