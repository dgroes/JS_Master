/* __Document Object Model__ */


// GET Elment By ID: Seleccionar un elemento por su identificador (id)
let caja = document.getElementById('caja');

//Modificar caracteristicas de un elemento seleccionado
caja.innerHTML = "<h2>Cambio de contenido con InnerText</h2>";

/*  Modificación de estilos dentro de JS
caja.style.background = "yellow";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.padding = "8px"
caja.style.textAlign = "center";
caja.style.fontFamily = "Arial"
 */

// Modificación de estilos utilizando CSS
caja.classList.add("cajita");
caja.classList.add("cajon");
caja.classList.add("cajaza");
// caja.className = "cajita cajaza cajon";
console.log(caja.className);

function cambiarColor(color, raduis) {
    caja.style.background = color;
    caja.style.borderRadius = raduis;
}

console.log(caja.innerText);


// getElementByIdClassName = Seleccionar multiples elementos con una clase
/* let = articulos = document.getElementsByClassName("articulo");

for (let i = 0; i < articulos.length; i++) {
    articulos[i].classList.add("articuloBase")

    //añadir más Html
    articulos[i].innerHTML += "<a href='https://www.youtube.com/watch?v=9AXYJcF9qSg'>Musica para estudiar</a>"

    //añadir un nodo del dom
    let = enlace = document.createElement("a");
    enlace.setAttribute("href", "https://www.youtube.com/watch?v=wOHO7QA_PKI");
    enlace.setAttribute("target", "_black");
    enlace.style.color = "orange";
    let textoEnlace = document.createTextNode(" Más musica 🎵");

    enlace.append(textoEnlace);
    articulos[i].append(enlace);


    if (i === 0) {
        articulos[i].classList.add("articuloVerde");
    }
    if (i === (articulos.length - 1)) {
        articulos[i].classList.add("articuloNegro");

        articulos[i].innerHTML = "<h2>Sigue leyendo más cosas en algún lugar</h2>"
    }

} */


// getElementByTagName
let etiquetasArticulos = document.getElementsByTagName("article");
etiquetasArticulos[2].style.backgroundColor = "green";


//QuerySelector (RECOMENDABLE)
let seccionArticulos = document.querySelector("#articulos");
seccionArticulos.innerHTML += "<h1>Articulos</h1>";
// seccionArticulos.style.background = "lightblue";
seccionArticulos.style.padding = "20px";
console.log(seccionArticulos);
//querySelector y clases
let primerArticulo = document.querySelector(".articulo");
primerArticulo.style.borderRadius = "23%";
console.log(primerArticulo);


//QuerySelectorAll (RECOMENDABLE)
let articulos = document.querySelectorAll("#articulos article");
articulos.forEach((articulo, i) => {

    articulo.classList.add("articuloBase")

    //añadir más Html
    articulo.innerHTML += "<a href='https://www.youtube.com/watch?v=9AXYJcF9qSg'>Musica para estudiar</a>"

    //añadir un nodo del dom
    let = enlace = document.createElement("a");
    enlace.setAttribute("href", "https://www.youtube.com/watch?v=wOHO7QA_PKI");
    enlace.setAttribute("target", "_black");
    enlace.style.color = "orange";
    let textoEnlace = document.createTextNode(" Más musica 🎵");

    enlace.append(textoEnlace);
    articulo.append(enlace);


    if (i === 0) {
        articulo.classList.add("articuloVerde");
    }
    if (i === (articulos.length - 1)) {
        articulo.classList.add("articuloNegro");

        articulo.innerHTML = "<h2>Sigue leyendo más cosas en algún lugar</h2>"
    }
})



// Modificaciones

const tarjeta = document.querySelector("#tarjeta");

tarjeta.textContent = "Contenido nuevo, cambiado con TextContent";

tarjeta.innerHTML = "<strong>Contenido en Html, cambiado con innterHtml </strong>";

tarjeta.setAttribute("data-id", 12);

// tarjeta.setAttribute("class", "hoal que tal");

tarjeta.style.border = "1px solid blue";

tarjeta.style.backgroundColor = "steelblue";

tarjeta.style.padding = "8px";

tarjeta.classList.add("destacar2");

tarjeta.classList.remove("destacar");

tarjeta.classList.toggle("small");

const titular = document.createElement("h2");
titular.textContent = "Esta es la tarjeta";
// tarjeta.append(titular);

// tarjeta.querySelector("strong").remove();
tarjeta.insertBefore(titular, tarjeta.firstChild);



console.log(tarjeta.getAttribute("id"));