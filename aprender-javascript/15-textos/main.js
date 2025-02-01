// Longitud 
let nombre = "Miguel Tapia Parra";
console.log(nombre.length);

//Conversion a texto;
let numero = 666;
console.log(typeof (numero));

texto = numero.toString();
console.log(typeof (texto));


//Texto a mayusculas
let web = "chubasqueros-para-peces.com";
let webMayus = web.toUpperCase();
console.log(webMayus);


//Texto a minusculas
let platillo = "Tortilla de zanaoría";
console.log(platillo.toLowerCase());


//Conseguir una letra concreta
let frase = "Me gusta el cereal";
console.log(frase.charAt(5));

//Comprovar si una cadena tiene dentro otra
let eslogan = "Si tu abuelo no lo hubiera llevado, tú no existirías";
if (eslogan.includes("hubiera")) {
    console.log("La palabra si se encuentra dentro del Eslogan")
} else {

    console.log("La palabra no existe");
}

//Buscar posición de una palabra de un texto
let mensaje = "En que parte dejaste las llaves de la casa?";
console.log(mensaje.indexOf("llaves"));

//Extraer parte de un texto
let cancion = "This Ain't a Scene, It's an Arms Race";
console.log(cancion.slice(20, 32));

//Reemplazar parte de un texto
let anime = "Boruto: Naruto Next Generations";
console.log(anime.replace("Naruto Next Generations", "Two Blue Vortex 🗾"));
console.log(anime.replaceAll("o", "🌸"));


//Eliminar espacios de un texto (inicio y fin)
let correo = "   isotopos.de.albuquerque@gmail.com        ";
console.log(correo.trim());

//Separar cadena por partes (En un array)
let listaCompra = "Huevos,Hamburguesas,Platano,Atún,Queso,Pan,Carne";
let listaArray = listaCompra.split(',');
console.log(listaArray);


////Extraer parte de un texto, otra forma
let dialogo = "Me duele la cabeza, no se que hacer";
console.log(dialogo.substring(12, 18));


// Buscar texto en una cadena (Search y Match)
let respuesta = "No quiero ir al Supermercado 🛒";
let respuesta1 = "Buscar mas mas mas de una palabra";
console.log(respuesta.search("quiero"));
console.log(respuesta.match("quiero"));
console.log(respuesta1.match(/mas/g));
