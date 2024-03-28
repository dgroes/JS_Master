/**
 * Una función es un bloque de código reutilizable que puede ser llamado y 
 * ejecutado en cualquier momento. Las funciones en JavaScript son fundamentales para
 * organizar y modularizar el código, permitiendo dividir tareas en piezas más pequeñas 
 * y manejables.
 */

//Creaición de una función
function saludar() {
    console.log("hola dev");
}

//LLamando una función
saludar();

//Sumar valores con una functión
/**
 * El return permite que una función devuelva un valor o resultado específico al punto
 * del código donde fue llamada. Esto es esencial para obtener resultados de operaciones 
 * o cálculos realizados dentro de la función y utilizar esos resultados en otras partes del programa. 
 */
function suma(){
    return 2 + 3;
}


//Imprimir resultado de la suma
let resultado = suma();
console.log(resultado);

//Otra forma de imprimir el resultado de la suma
console.log(suma());

