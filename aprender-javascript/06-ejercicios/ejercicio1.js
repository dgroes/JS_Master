//Ejercicio número 01:
//Calcula cuantas horas le llevería llegar a la luna una nave espacial y guarda el resultado en una variable.

//La distancia desde la tierra a hasta la luna es de 384.400 kilometos

//La velocidad de la nave es de 1225 Kilometros por hora.

// Si una hora equivale a 1225 kilometros, cuanto tardará con 384 Mil kilometros ? 
 
//          384.400 * 1 == ❌
//              1225


let distancia_a_luna = 384400; //kilometros
let velocidad_nave = 1225; //Kilometros por hora
let horas = 1; // Cuanto se demorará???

let viaje_tierra_a_luna = Math.round((distancia_a_luna / velocidad_nave));
console.warn("La Tierra se demoraría un total de: " + viaje_tierra_a_luna + " horas en llegar a la Luna");
console.log(velocidad_nave * 4);


let number = 20;
let holl = 5;

let mall = number / holl;
console.log(mall);

for (let i = 0; velocidad_nave >= distancia_a_luna; i++) {
    velocidad_nave += velocidad_nave;
  }

  console.log(velocidad_nave);
  