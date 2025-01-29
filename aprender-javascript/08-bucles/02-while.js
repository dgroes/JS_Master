//Bucle while

/* let year = 1990;
let objetivo = 2177;
let interferencia = 2117;

while (year != 2177) {
    console.log("Año " + year);


    if (year == interferencia) {
        break;
    }

    year++;
}
 */
console.log("------------------------------------");

let number = 1;
while (number <= 10) {
    console.log("Número: " + number);
    number++;
}


console.log("------------------------------------");
let numero = 1;
let tabla = 5;
while(numero <= 10){
    resultado = tabla * numero;
    console.log(tabla + " X " + numero + " = " + resultado);

    numero++;
}



console.log("------------------------------------");
let suma = 0;
let a = 1;
while (a <= 10){
    let resutl = suma += a;
    console.log(resutl);
    a++;

}

console.log("------------------------------------");

let personas = ['Ana', 'Luis', 'Carlos', 'María', 'Pedro'];
let i = 0;  // Índice para recorrer el array

while (i < personas.length) {  // Mientras el índice sea menor a la longitud del array
    console.log(personas[i]);  // Mostrar el nombre en la posición actual
    i++;  // Avanzar al siguiente elemento
}