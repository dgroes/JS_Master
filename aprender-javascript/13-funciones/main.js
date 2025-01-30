//Funciones en JS

function saludo(nombre = "000100111"){
    console.log("Hola " + nombre);

    return "😃";
}

saludo("diego");

let mensajeFinal = saludo("Andrés");
alert(mensajeFinal);


saludo()