/* SUPER EJERCICIO DE JS */
/* 
    Crea un aplicación WEB en la que puedas añadir, mostrar y eliminar tus peliculas favoritas.
    
    Cada pelicula que guardes debe tener:
        - Titulo
        - Fecha de Guardado
        - Puntuación de popularidad (un valid aleatoria entre 1 y 10)
    
    Las peliculas deben mantenerse guardadas anque se recargue la página,
    y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.

    Tareas:
    - Crear el formulario necesario.
    - Función para guardar peliculas con los datos necesarios.
    - Función para mostrar peliculas extraidas del LocalStorage.
    - Haz que las peliculas carguen automaticamente al abrir la web.
    - Función para eliminar peliculas.
    
*/
document.addEventListener("DOMContentLoaded", () => {
    let datosGuardados = JSON.parse(localStorage.getItem("peliculas")) || [];
    mostrarDatos(datosGuardados);
});

let tituloPelicula = document.querySelector("#inputPelicula");
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let titulo = tituloPelicula.value.trim();
    
    if (titulo) {
        guardarPelicula(titulo);
        tituloPelicula.value = ""; // Limpiar input después de agregar
    } else {
        alert("Por favor, ingresa un título válido.");
    }
});

function guardarPelicula(titulo) {
    let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

    let nuevaPelicula = {
        titulo: titulo,
        fecha: new Date().toLocaleString(), // Fecha formateada
        puntuacion: Math.floor(Math.random() * 10) + 1
    };

    peliculas.push(nuevaPelicula);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    mostrarDatos(peliculas);
}

function mostrarDatos(peliculas) {
    const tbody = document.getElementById("contenido");
    tbody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevas filas

    peliculas.forEach((pelicula, index) => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${pelicula.titulo}</td>
            <td>${pelicula.fecha}</td>
            <td>${pelicula.puntuacion} / 10</td>
            <td><button class="botonEliminar" data-index="${index}">Eliminar</button></td>
        `;

        tbody.appendChild(fila);
    });

    document.querySelectorAll(".botonEliminar").forEach(boton => {
        boton.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            eliminarPelicula(index);
        });
    });
}

function eliminarPelicula(index) {
    let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    peliculas.splice(index, 1);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    mostrarDatos(peliculas);
}
