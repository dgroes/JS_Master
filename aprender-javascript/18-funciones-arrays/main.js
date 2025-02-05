let gadgets = ['PC', 'Laptop', 'Tablet', 'E-Reader'];

//Longitud del array
console.log(gadgets.length);

//Añador elementos
gadgets.push('Smart Watch');
gadgets.push('Head Phones');

console.log(gadgets);

//Eliminar último elemento
gadgets.pop();
console.log(gadgets);

//Agregar elementos el inicio del array
gadgets.unshift('Smartphone');
gadgets.unshift('Nintento Switch');
console.log(gadgets);

//Eliminar el primer elemento de un array
gadgets.shift();
console.log(gadgets);

//Busqueda si un elemento existe o no (busqueda por indice)
let indice = gadgets.indexOf('Laptop');
let indice1 = gadgets.indexOf('PS4');
console.log('Posición: ' + indice);

console.log('Posición: ' + indice1); //Cundo no exite arroja un -1

//Busqueda para ver si existe (True o False)
let existe = gadgets.includes('PS5');
console.log(existe); // Arroja false porqué PS5 no está en el array

// Filtrar arrays
gadgets.push('XBOX Series');
gadgets.push('Aura Ring');
gadgets.push('Nothing Phone 2a');
gadgets.push('RayBans Smart Glasses');

//Una forma larga
/* let gadgetsWithN = gadgets.filter(gadget => {

        let result = false;

        if(gadget.includes("n")){
          result = true;
        }

        return result;
      }) */

//Una forma Corta
let gadgetsWithN = gadgets.filter(gadget => gadget.includes('n'));

console.log(gadgetsWithN);

// Reduce
let reducir = gadgets.reduce(
  (total, actual) => total + ', ' + actual[0].toLowerCase() + actual
);
console.log(reducir);

let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((actumulador, numeroActual, itereaciones) => actumulador + numeroActual);
console.log(suma);


//Ordenar
orderAsc = gadgets.sort();
console.log(orderAsc);

//Revertir orden de un array
console.log(orderAsc.reverse());


//Combinar arrays
let fruts = ["Orange", 'Apple', 'Grapes', 'Banana', 'Watermelon'];
let union = gadgets.concat(fruts);
console.log(union);

//Convertir en cadena (con separador)
let etiquetas = fruts.join(", ");
console.log(etiquetas);

//Copiar porción de array
let myGadgetsFavs = gadgets.slice(4, 8);
console.log("Mis gadget Favoritos: " + myGadgetsFavs);

//Busquedas
let search = gadgets.find(gadget => gadget.length > 5);
console.log(search);

//Busqueda con un return del indice
let searchIndex = gadgets.findIndex(gadget => gadget.length > 6);
console.log(searchIndex);

//Some (es como un LIKE)
let letterE = gadgets.some(gadget => gadget.includes("e"));
console.log(letterE);

// Every
let letterA = gadgets.every(gadget => gadget.includes("e"));
console.log(letterA);

// Aplanar
let anios = [
  [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997],
  [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
  [2020, 2021, [2030, 2031, 2032, 2033[2040, 2041, 2042]]]
];

let plana = anios.flat(3); //Dentro de los parametro añado el número de dimensiones que quiero aplanar
console.log(plana);


//Copy Whit in
let fechas = ["01-04-2024", "17-09-2025", "23-12-2026", "30-03-2027"];
fechas.copyWithin(0, 3);
console.log(fechas);

// Converir string en array
let nombre = "Diego";
let arrayString = Array.from(nombre);
console.log(arrayString);

//Desectrucuración de arrays
let [uno, dos, tres] = [1, 2, 3];
console.log(dos);

let [actor, ...restoActores] = ["Al Pacino", "Salma Hayek ", "Jared Leto", "Joaquin Phoenix", "Demi Moore", "Brie Larson", "Denzel Washintong"];
console.log(actor);
console.log(restoActores);

//Expandir arrays
let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayTwo = [9, 10, 11, 12, 13, 14, 15];

let arrayCompleto = [...arrayOne, arrayTwo];
console.log(arrayCompleto);


// De array a string 
console.log(gadgets.toString());

// De string a array
let frase = "Este es un String que se convertirá en un array 😃";
console.log(frase.split(" "));
