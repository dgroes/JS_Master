
// FACIL
/* for (let index = 1; index <= 10; index++) {

    console.log(index);
}

console.log("-------------------------");
let numero = 5;
for (let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("-------------------------");
let suma = 0;
for(let e = 1; e <=10; e++){
   console.log(suma += e);
}


console.log("-------------------------");
const personas = ['Ana', 'Carlos', 'Luis', 'María'];
for(const nombres of personas){
    console.log(nombres);
} */


//MEDIO
/* Tabla de multiplicar personalizada
📌 Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10. */
const readline = require('readline-sync');

let numero = readline.questionInt("Ingresa un numero para ver su tabla de multiplicar: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


/* Sumar números dentro de un rango
📌 Pide dos números al usuario y suma todos los números enteros entre ellos.
🔹 Asegúrate de que el número menor sea el inicio y el mayor el fin. */
console.log('----------------------------------')
console.log('Sumar números dentro de un rango 🤙')
let first = readline.questionInt('Ingresa el primer numero: ');
let second = readline.questionInt('Ahora ingresa el segundo numero: ');

/* for (let index = 3; index <= 7; index++) {
    console.log(index);
    
} */
let a = first;
let b = second;

for (let i = a; i <= b; i++){
    
    siguiente = first + 1;
    suma = siguiente 
    console.log(suma);
}

