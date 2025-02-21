/* 
    Ejercicio 27

    Crea un array de personajes de peliculas y
    clasificalos en grupos (héroes, villanos, etc)

    Muetra un mensaje para cada grupo

*/

let personajes = [
    "V:Joker", 
    "H:Batman", 
    "V:Hannibal Lecter", 
    "V:Jonh Doe", 
    "H:Hatty Potter", 
    "H:Frodo"
];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("V:"));

// console.log(heroes)
heroes.forEach(heroe => {
    console.log(heroe.split(":")[1])
})

villanos.forEach(villano => {
    console.log(villano.slice(2));
})

