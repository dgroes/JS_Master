// Definir la URL de la API desde donde se obtendrán los datos de los usuarios
const urlUsuarios = "https://jsonplaceholder.typicode.com/users";

// Obtener una referencia al elemento de la lista en el DOM donde se mostrarán los usuarios
const listaUsuarios = document.querySelector("#lista-usuarios");

// Realizar una solicitud GET a la API utilizando fetch
fetch(urlUsuarios) // Devuelve una "promesa" que inicialmente está en estado "pendiente"
    .then(respuesta => respuesta.json()) // Convertir la respuesta a formato JSON
    .then(dato => { // 'dato' es ahora un array de objetos con la información de los usuarios
        
        console.log(dato);
        // Recorrer cada usuario dentro del array
        dato.forEach(usuario => {
            
            // Crear un nuevo elemento <li> para la lista
            const li = document.createElement("li");

            // Asignar el nombre del usuario como contenido del <li>
            li.textContent = usuario.name + " - Correo: " + usuario.email;

            // Agregar el <li> a la lista en el DOM
            listaUsuarios.append(li);
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error)); // Captura errores en caso de fallo


