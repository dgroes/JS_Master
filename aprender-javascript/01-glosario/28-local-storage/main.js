/* LOCAL STORAGE */

//Comprar disponibilidad de Local Storage
if(typeof(Storage) != "undefined"){
    console.log("Local Storage Disponible 👍");
} else{
    console.log("El Local Storage No Disponible 👎");
}


//Guardar Datos
localStorage.setItem("Sanrio", "Pompompurim 🍮");
localStorage.setItem("Manga", "Yawara 🥋");

//Sacar Datos
console.log(localStorage.getItem("Manga"));


//Guardar Objetos
let animal = {
    especie: "Elefante",
    altura: "3 Metros",
    peso: "6.000 kg"
}

// __Para almacenar un objeto será necesario que sea un Json, transformando un Objeto en un Json, pro ejmplo con un stringify
localStorage.setItem("animal", JSON.stringify(animal));

//Recuperar Objeto (volver a transformarlo de JSON a objeto JS)
let animalJS = JSON.parse(localStorage.getItem("animal"));
console.log(animalJS);
console.log(animalJS.especie);

//Elimiar un elemento
localStorage.removeItem("animal");

//Vaciar el Local Storage (completamente)
document.querySelector("#vaciar").addEventListener("click", () => {
    localStorage.clear();
});