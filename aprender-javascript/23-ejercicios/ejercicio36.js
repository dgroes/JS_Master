// Ejercicio 36

/* 
    Crea una caja de texto que cuente cuántas teclas ha pulsado el usuario dentro de la caja.
    muestra el número de teclas pulsadas en tiempo real.
*/

let contador = 0;
let numero = document.querySelector("#numero");
let input = document.querySelector("#inputTexto");

input.addEventListener("keydown", (evento) => {
    if (evento.key === "Backspace") {  
        if (contador > 0) contador--; // Evita que el contador sea negativo
    } else {
        contador++;
    }
    
    numero.textContent = contador;
    console.log("Contador:", contador);
});
