//Ejercicio 1
let titulo = document.getElementById("header");
titulo.textContent = "Titulo Modificado";
titulo.style.backgroundColor = "plum";
titulo.style.fontFamily = "Andale Mono, monospace";
titulo.style.fontStyle = "italic";


//Ejercicio 2
let contenido = document.getElementById("content");
let parrafo = document.createElement("p");
parrafo.textContent = "Hola mundo 🐶";
contenido.insertBefore(parrafo, contenido.firstChild);


//Ejercicio 3
let items = document.querySelectorAll("#items .item");
items.forEach((item, i) => {
    if ((i % 2) == 0) {
        item.classList.add("highlight");
    }
})


//Ejercicio 4
let gallery = document.getElementsByClassName("gallery");
if (gallery.length > 0) {
    let image = document.createElement("img");
    const doge = "https://content.imageresizer.com/images/memes/Doge-meme-4t0m5.jpg";
    image.setAttribute("src", doge);
    image.setAttribute("alt", "Doge 🐕");
    image.style.width = "200px";
    gallery[0].insertBefore(image, gallery[0].firstChild);
} else {
    console.error("No se encontró ningún elemento con la clase 'gallery'.");
}


//Ejercicio 5
let texto = document.querySelectorAll("#details p");
let boton = document.getElementById("toggleBtn");

boton.addEventListener("click", function() {
    texto.forEach(p => {
        p.classList.toggle("hidden");
    });
});
