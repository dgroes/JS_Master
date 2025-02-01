//Funciones en JS

function saludo(nombre = "000100111") {
    console.log("Hola " + nombre);

    return "😃";
}

saludo("diego");

let mensajeFinal = saludo("Andrés");
alert(mensajeFinal);


saludo()



//Funcion dentro de otra:
function operaciones(numero1, numero2) {
    let resultados = {
        "suma": (numero1 + numero2),
        "resta": (numero1 - numero2),
        "multiplicacion": (numero1 * numero2),
        "division": numero2 !== 0 ? (numero1 / numero2) : "No se puede dividir por 0"
    };
    return resultados;
}

console.log("--------------------");

function porConsola(numero1, numero2) {
    let resultados = operaciones(numero1, numero2);

    console.log("Suma: " + resultados.suma);
    console.log("Resta: " + resultados.resta);
    console.log("Multiplicación: " + resultados.multiplicacion);
    console.log("División: " + resultados.division);
}

function porPantalla(numero1, numero2) {
    let resultados = operaciones(numero1, numero2);

    document.write("<h2>Suma: " + resultados.suma + "</h2>");
    document.write("<h2>Resta: " + resultados.resta + "</h2>");
    document.write("<h2>Multiplicación: " + resultados.multiplicacion + "</h2>");
    document.write("<h2>División: " + resultados.division + "</h2>");
}

function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}

// Prueba en navegador
calculadora(7, 9, true); // Mostrará los resultados en pantalla
calculadora(7, 9, false); // Mostrará los resultados en la consola



//Parametros REST
console.log("***********************************************************");
function misPeliculas(pelicula1, pelicula2, ...restoDePeliculas) {
    console.log(pelicula1);
    console.log(pelicula2);
    console.log(restoDePeliculas);
}

misPeliculas("Wiplash", "Django", "ScarFace", "Terminator 2", "Pulp Fiction");



//Operador SPREAD
console.log("**************************SPREAD**************************"); 7
let numeros = [1, 2, 3, 4, 5, 6];
let misNumeros = [...numeros, 7, 8, 9, 10, 11, 12];
console.log(misNumeros);

let misPelisFavs = ['Wiplash', "OldBoy"];
misPeliculas(...misPelisFavs, "Toy Storie", "Spierman", "Shrek");
// console.log(misPeliculas);