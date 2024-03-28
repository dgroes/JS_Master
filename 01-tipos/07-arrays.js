//Creación de un array
let animales = ['Gato', 'Urón'];
console.log(animales);

//Acceder a un valor de un array, en esste caso al primer elemento
console.log(animales[0]);

//Agregar nuevos elementos a un array, primero se especifica el lugar y luego el valor
animales[2] = 'Ornitorrinco';
console.log(animales);

/* Es importante tener en cuenta las posiciones que hay dentro de una array, si yo en este array de
animales le paso la posición 8 esto ocurrirá
LO que ocurre es que en la consola me indica que poseo 5 espacios vacios, pero aun así la 
longitud de este array es de 9 */
animales[8] = 'Mapache';
console.log(animales);

//Imprimir un elemento que está vació:
console.log(animales[6]);

//Los array dentro de JS se comportan como objetos
console.log(typeof animales);

//Devolber la cantidad de lemenentos que se encuetra en el array
console.log(animales.length);


