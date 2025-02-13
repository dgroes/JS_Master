/* FETCH (ajax) */
//Definir una api con su Link
const pokeApi = "https://pokeapi.co/api/v2/";

//Comprobar el resultado de la llama con fetch
let algo = fetch(pokeApi);
console.log(algo); // Recibirá una "Promesa" y estará "Pendiente"


/* Para interactuar con el resultado */
fetch(pokeApi)
    .then(red => red.json())
    .then(data => console.log(data));


function mostrarPokemon(){
    let carta = document.querySelector("#poke");
    carta.innerHTML = `
        <header>${poke.name}</header>
    `
}


let idUser = 4;

fetch("https://reqres.in/api/users/"+ idUser)
    .then(data => data.json())
    .then(usuario => {
        console.log(usuario.data);
        mostrarUsuario(usuario.data)
    })
    .catch(error => {
        console.error("Error al pedir los datos", error);
    });

function mostrarUsuario(user) {
    let caja = document.querySelector("#user");
    caja.innerHTML = `
        <header>${user.first_name} ${user.last_name}</header>
        <img src="${user.avatar}" />
    `;
}