const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
const listaPokemon = document.querySelector("#lista-pokemon");

fetch(urlPokemon)
    .then(respueta => respueta.json())
    .then(dato => {
        const pokemons = dato.results;
        console.log(pokemons);

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = pokemon.name;
            listaPokemon.append(li);
        });
    });