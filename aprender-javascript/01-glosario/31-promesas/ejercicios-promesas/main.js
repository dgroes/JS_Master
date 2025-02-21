//EJERCICIO 01: Simulación de Carga de Datos

let cargarUsuarios = new Promise((resolve, reject) => {
    setTimeout(() => {
        let conectado = true;
        if (conectado) {
            resolve("Usuario Cargado Correctamente 😃");
        } else {
            reject("El Usuario aun no se ha Cargado 😕");
        }
    }, 2000)
});


cargarUsuarios
    .then(resultado => {
        console.info(resultado);
    })
    .catch(error => {
        console.error("Error: ", error);
    })



// EJERCICIO 02: Verificar edad para ingresar
function verificarEdad(edad) {

    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Acceso concedido 🟢");
        } else {
            reject("Acceso denegado 🔞");
        }

    });


};

verificarEdad(17)
    .then(resultado => {
        console.info(resultado);
    })
    .catch(error => {
        console.error("Error: ", error);
    })



//EJERCICIO 03: Simular una API de Pokémon
let name = "ditto";

function obtenerPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(dato => {
            console.log(dato.name);
        })
        .catch(error => {
            console.error("Error vuelve a intentarlo: ", error);
        })
}
obtenerPokemon(name);