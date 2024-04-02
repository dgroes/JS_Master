// and or not

//AND && //si ambos valores son true el resultad será true, si alguno de los valors o ambos valores son false el resultado será false.
console.log(true && true);
console.log(false && true);
//Ejemplo:
let mayor = false;
let suscrito = true;
console.log('operador AND', mayor && suscrito);

//or si alguno de los valores es true, ya devolverá true, solo si ambos valores son false, devolverá false
console.log('operador OR', mayor  || suscrito);

//not esto negará una variable
console.log('operador NOT', !mayor);
let soloCatalogoInfantil = !mayor;