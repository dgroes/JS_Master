//Constante
//Una constante es una variable en la cual su contenido nunca cambiará

//Datos de una persona
let nombre = "Diego 💻";
let gitHub = "https://github.com/dgroes";
const run = "19.913.875-0";

console.log(nombre, run);

//Ahora quiero cambiar mis datos:
nombre = "Andres";

//Pero el varlor de run no lo pueo modificar porque es una constante
run = "23.285.15-6";
//Pasa esto:
/**
     *  script.js:15 Uncaught TypeError: Assignment to constant variable.
        at script.js:15:5
        (anonymous)	@	script.js:15
 */

console.log(nombre, run);