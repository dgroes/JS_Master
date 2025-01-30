/* Ejercicio 14:
    Un DJ no sabe que música poner en la fiesta.
    Preguntale al usuario que generno quiere (pop, rock, rap, etc.)
    segun lo que prefiera devuelve un mensaje diferente.
*/

const readline = require('readline-sync');

console.log('----------------------------------');
let generos = ['Pop', 'Rock', 'Rap', 'Kpop', 'Salsa', 'Cumbia'];

console.log('Que pone el DJ? 💃');
console.log('Oye tu, que musica crees que deberia poner a continuacion?');
console.log('Tengo estos generos disponibles: ', generos.join(', '));

let respuesta = readline.question('Respuesta: ');
respuesta = respuesta.charAt(0).toUpperCase() + respuesta.slice(1).toLowerCase(); // Capitalizar la primera letra

let encontrado = false;
for (const genero of generos) {
    if (respuesta === genero) {
        console.log(`¡Buena elección! Pondremos ${genero} 🎶`);
        encontrado = true;
        break; // Terminamos el bucle una vez encontrado
    }
}

if (!encontrado) {
    console.log("Lo siento, no tengo ese género disponible. 😢");
}

