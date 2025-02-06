/* 
    Ejercicio 29:

    Crea una función que reciba una palabra y devuelva cuantas vocales tiene

*/

// Vocales del alfabeto
const vocales = ['a', 'e', 'i', 'o', 'u'];

// Función para contar vocales
function buscadorDeVocales(palabra) {
    let letras = palabra.toLowerCase().split(""); // Convertir a minúsculas y dividir en letras
    let contador = 0; // Contador de vocales

    // Recorrer la palabra y contar cuántas vocales tiene
    for (let i = 0; i < letras.length; i++) {
        if (vocales.includes(letras[i])) {
            contador++;
        }
    }

    return contador;
}

// Pedir la palabra al usuario
let palabra = prompt("Escribe una palabra 😅");
let cantidadVocales = buscadorDeVocales(palabra);
alert(`La palabra "${palabra}" tiene ${cantidadVocales} vocal(es).`);