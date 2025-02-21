// Ejercicio 31:
/* 
    Crea un semáforo con tres luces (Rojo, Amarillo y Verde)
    
    Cuando un peaton quiere curzar la calle debe pulsar un botón.
    
    Crea un Botón para cambiar el color de las luces del semaforo
    secuencialmente (De rojo a verde, pasando por amarillo).

    El semaforo siempre empieza en rojo
    Cuando haces click en el botón, pasará a amarillo.
    Al hacer click otra vez, pasa a verde, y asi el rato.

*/

// Definir variables
// Definir variables
let semaforo = document.querySelector("#semaforo");
let boton = document.querySelector("#boton");

function cambiarSemaforo() {
    let tiempo = 16; // Segundos
    let contador = document.querySelector("#contador");

    let intervalo = setInterval(() => {
        contador.textContent = tiempo;

        if (tiempo === 8) {
            semaforo.classList.toggle("amarillo");
        } else if (tiempo === 0) {
            semaforo.classList.toggle("verde");
            clearInterval(intervalo); // Detener el intervalo cuando llega a 0
        }

        tiempo--;

    }, 1000);
}

// Agregar el evento correctamente
boton.addEventListener("click", cambiarSemaforo);


