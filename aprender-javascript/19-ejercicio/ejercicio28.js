/* 
   Ejercicio 28:

   1. Pide 6 números por pantalla y metelos en un array.
   2. Muestra el array entero (todos sus elementos) en el
       cuerpo de la página y en la consola
   3. ordenalo y muestralo.
   4. invierte su orden y muetralo
   5. muestra cunatos elementos tiene el array
   6. Busca uno de los valores que ha metido el usuario que nos diga si
       lo encuentra y su indice.
   7. refactoriza todo lo posible usando funciones.
   
*/

//1: pedir números
let numeros = [];

for (let contador = 1; contador <= 6; contador++) {
    let numero = Number(prompt("Introduce un número", 0));

    numeros.push(numero);
}


//2: Mostrar array entero
function mostrar(coleccion) {
    console.log(coleccion);
    document.write("<h2>Contenido del array</h2>");
    document.write("<ul>");

    coleccion.forEach(elemento => {
        document.write("<li>" + elemento + "</li>");
    })

    document.write("</ul>");

    return coleccion;
}

mostrar(numeros);


//3: Ordenar y mostrar
numeros.sort((a, b) => a - b);
mostrar(numeros);


//4: Invertir y mostrar
numeros.reverse();
mostrar(numeros);

//5: Mostra cuantos elementos tiene
document.write("<h2>El array tiene: " + numeros.length + " elementos </h2>");

//6: Busqueda
let busqueda = Number(prompt("Busca un número", 0));
let posicion = numeros.findIndex(numero => numero === busqueda);
if(posicion && posicion != -1){
    console.log("La posición de la busqueda es: "+posicion);
} else{
    console.log("Número no encontrado");
}