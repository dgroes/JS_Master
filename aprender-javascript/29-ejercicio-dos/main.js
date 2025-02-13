
/* SUPER EJERCICIO: Gestor de Contactos
Descripción:
Crea una aplicación web que te permita añadir, mostrar y eliminar tus contactos 
favoritos. Cada contacto debe incluir:
Nombre
Número de Teléfono
Correo Electrónico
Fecha de Creación (se establece automáticamente al guardar el contacto)
 */

/* Formulario de Entrada:
Crea un formulario en HTML que permita al usuario ingresar el nombre, teléfono y correo electrónico.
El formulario debe tener un botón para agregar el contacto.

Guardar Contactos:
Desarrolla una función que, al enviar el formulario, cree un objeto con los datos 
del contacto.
Agrega automáticamente la fecha de creación (puedes formatearla usando
new Date().toLocaleString()).
Guarda el objeto en un array de contactos y almacena dicho array en localStorage.clear

Mostrar Contactos:
Implementa una función que recupere el array de contactos desde localStorage y
los muestre en el DOM.
En lugar de una tabla, muestra cada contacto en una "tarjeta" 
(por ejemplo, un <div> con estilo) que contenga:
Nombre
Teléfono
Correo Electrónico
Fecha de Creación

Un botón de "Eliminar" para quitar ese contacto.
Organiza las tarjetas en un contenedor con un diseño de grid o flex (para que se vean como un listado de tarjetas).
 */

/* Carga Automática:
Asegúrate de que al cargar la página (por ejemplo, con el evento DOMContentLoaded), se muestren automáticamente los contactos almacenados en localStorage.

- Eliminar Contactos:
Cada tarjeta debe tener un botón "Eliminar" que, al hacer clic, remueva ese contacto del array y actualice el localStorage y la vista en el DOM.
Validaciones y Estilo:

Realiza validaciones básicas en el formulario (por ejemplo, que el campo de nombre no esté vacío).
Da estilos CSS a las tarjetas para que tengan un aspecto agradable y se adapten a diferentes tamaños de pantalla.
Objetivo Final:
Al final, tu aplicación deberá permitir al usuario:

Agregar nuevos contactos mediante un formulario.
Visualizar todos los contactos guardados en una vista de tarjetas.
Eliminar cualquier contacto de la lista, actualizando el almacenamiento y la vista de forma dinámica.

 */


// Verificar el local Storage al cargar el DOM y mostrar los datos si los hay
document.addEventListener("DOMContentLoaded", () => {
    let datosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];
    mostrarDatos(datosGuardados);
});

//Definir el botón de crear un contacto y Definir el fomrulario
let contactoCrear = document.querySelector("#cardCreate");
let formulario = document.querySelector("#formulario");

//Interación con el formulario
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Se ha presionado el botón de 'Crear Contacto'");

    //Definir los valores recibidos
    let nombre = contactoNombre.value;
    let email = contactoEmail.value;
    let telefono = contactoTelefono.value;
    // console.log("Se ha recibido el contacto: " + nombre + " / " + email + " / " + telefono);

    //Confirmar el ingreso de los datos recibidos y guardarlos en una función
    if (nombre && email && telefono) {

        // Enviar los datos recibidos a la función guardarContacto
        guardarContacto(nombre, email, telefono);

        // limpiar los campos de input luego de enviar
        contactoNombre.value = ""
        contactoEmail.value = ""
        contactoTelefono.value = "";

        console.log("Esto da un true, por lo tanto han llegado los datos bien");
    } else {
        alert("Por Favor, ingrese un contacto valido");
    }

});


// Función para almacenar los valores en el LocalStorage
function guardarContacto(nombre, email, telefono) {

    //Definir el nombre de la 'KEY' del localStorage y establecer que es un array vacio
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    //Creación del objeto par el contacto
    let nuevoContacto = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        fecha: new Date().toLocaleString(), // Fecha de creación formateada
    }

    //Hacer un push del objeto al objeto JSon creado previamente (let contactos)
    contactos.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));

    mostrarDatos(contactos);
}

//Función para carcar los datos en el DOM
function mostrarDatos(contactos) {
    const card = document.getElementById("seccionContactos");
    card.innerHTML = ""; // Limpiar el <section> antes de agregar las cards

    contactos.forEach((contacto, index) => {
        let article = document.createElement("article");

        // Crear la estructura de la tarjeta
        article.innerHTML = `
        <header class="card__header">
            <span class="nombre-contacto">${contacto.nombre}</span>
            <button class="card_deleteButton" data-index="${index}">🗑️</button>
        </header>
        <span>Email: ${contacto.email}</span>
        <footer>Teléfono: ${contacto.telefono}</footer>
         <footer>${contacto.fecha}</footer>
        `;

        // Truncar el nombre si es mayor a 30 caracteres
        let span = article.querySelector(".nombre-contacto");
        if (contacto.nombre.length > 23) {
            span.textContent = contacto.nombre.substring(0, 23) + "...";
        }

        console.log(contacto.nombre + " / " + contacto.email + " " + contacto.telefono);
        card.appendChild(article);

        //Evento para el botón eliminar
        document.querySelectorAll(".card_deleteButton").forEach(boton => {
            boton.addEventListener("click", (event) => {
                let index = event.target.dataset.index;
                eliminarContacto(index);
            });
        });

    });

}

//Función para eliminar el contacto
function eliminarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.splice(index, 1);
    localStorage.setItem("contactos", JSON.stringify(contactos));

    mostrarDatos(contactos);
}

