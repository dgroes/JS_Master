// Espera a que el documento cargue completamente antes de ejecutar el código
// Recupera los Pokémon guardados en localStorage y los muestra en la interfaz

document.addEventListener("DOMContentLoaded", () => {
    let datosGuardados = JSON.parse(localStorage.getItem("pokemones")) || [];
    misPokemones(datosGuardados);
});

// Selección de elementos en el DOM
let pokemonName = document.querySelector("#pokemon-name");
const botonBuscar = document.querySelector("#buscar");
const botonGuardar = document.querySelector("#guardar");
const formulario = document.querySelector("#formulario");

// Evento para buscar un Pokémon al hacer clic en el botón "Buscar"
botonBuscar.addEventListener("click", async () => {
    let pokemon = pokemonName.value.trim().toLowerCase(); // Obtiene y limpia el nombre ingresado
    if (pokemon) {
        let datosPokemon = await conseguirPokemon(pokemon); // Llama a la API para obtener datos
        if (datosPokemon) {
            mostrarPokemon(datosPokemon); // Muestra el Pokémon en la interfaz
        }
    } else {
        alert("Por favor, ingresa un nombre de Pokémon válido.");
    }
});

// Evento para guardar un Pokémon en la lista de favoritos
botonGuardar.addEventListener("click", async () => {
    let pokemon = pokemonName.value.trim().toLowerCase(); // Obtiene y limpia el nombre ingresado
    if (!pokemon) {
        alert("Por favor, ingresa un nombre de Pokémon válido.");
        return;
    }

    let pokemonData = await conseguirPokemon(pokemon); // Obtiene datos del Pokémon desde la API
    if (pokemonData) {
        guardarPokemon(pokemonData); // Guarda el Pokémon en localStorage
    }
});

// Función para obtener los datos de un Pokémon desde la API de PokeAPI
async function conseguirPokemon(pokemon) {
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!respuesta.ok) throw new Error("Pokémon no encontrado");

        let dato = await respuesta.json();

        // Crea un objeto con la información relevante del Pokémon
        const pokemonInfo = {
            nombre: dato.name,
            imagen: dato.sprites.other["official-artwork"].front_default,
            tipo: dato.types[0].type.name,
            numero: dato.id,
            fecha: new Date().toLocaleString() // Fecha de consulta
        };

        return pokemonInfo;
    } catch (error) {
        console.error("Error al conseguir la información:", error);
        alert("Pokémon no encontrado. Verifica el nombre.");
    }
}

// Función para mostrar la información del Pokémon buscado en la pantalla
function mostrarPokemon(pokemonInfo) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `
        <article>
            <header class="pokemonTitle">${pokemonInfo.nombre.toUpperCase()}</header>
            <img class="pokemonImage" src="${pokemonInfo.imagen}" alt="${pokemonInfo.nombre}"/>
            <footer>Tipo: ${pokemonInfo.tipo}</footer>
            <footer>Número de Pokédex: ${pokemonInfo.numero}</footer>
        </article>
    `;
}

// Función para guardar un Pokémon en localStorage
function guardarPokemon(pokemonInfo) {
    let pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];

    // Verifica si el Pokémon ya está guardado
    if (pokemones.some(p => p.nombre === pokemonInfo.nombre)) {
        alert("Este Pokémon ya está guardado.");
        return;
    }

    // Agrega el nuevo Pokémon a la lista y lo guarda en localStorage
    pokemones.push(pokemonInfo);
    localStorage.setItem("pokemones", JSON.stringify(pokemones));

    misPokemones(pokemones); // Actualiza la lista de Pokémon guardados
}

// Función para mostrar todos los Pokémon guardados
function misPokemones(pokemones) {
    const card = document.querySelector(".cards");
    card.innerHTML = ""; // Limpia la sección antes de mostrar los nuevos datos

    pokemones.forEach((pokemon, index) => {
        let article = document.createElement("article");
        article.innerHTML = `
            <header class="pokemonTitle">${pokemon.nombre.toUpperCase()}</header>
            <img class="pokemonImage" src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
            <footer>Tipo: ${pokemon.tipo}</footer>
            <footer>Número de Pokédex: ${pokemon.numero}</footer>
            <footer>Fecha de guardado: ${pokemon.fecha}</footer>
            <button class="eliminar-btn" data-index="${index}">Eliminar</button>
        `;
        card.appendChild(article);
    });

    // Agrega eventos a los botones de eliminar Pokémon
    document.querySelectorAll(".eliminar-btn").forEach((boton) => {
        boton.addEventListener("click", (event) => {
            let index = event.target.getAttribute("data-index");
            eliminarPokemon(index);
        });
    });
}

// Función para eliminar un Pokémon de la lista guardada
function eliminarPokemon(index) {
    let pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];
    pokemones.splice(index, 1); // Elimina el Pokémon de la lista
    localStorage.setItem("pokemones", JSON.stringify(pokemones)); // Guarda la lista actualizada
    misPokemones(pokemones); // Vuelve a mostrar los Pokémon guardados
}
