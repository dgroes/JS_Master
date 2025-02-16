//Fetch desde un JSON local
/*  Fetch no funciona con ficheros locales, es necesario ejecutarlo en un servidor local
    En este caso se utilizó Live Server
 */
const listaProductos = document.querySelector("#lista-productos");

fetch("./productos.json")
    .then(response => response.json())
    .then(data => {
        mostrarProductos(data);
    });

function mostrarProductos(data) {

    console.log(data);
    
    data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
                ${producto.nombre} 
                <ul>
                    <li>Precio: ${producto.precio}</li>
                    <li>Id: ${producto.id} </li>
                </ul>
            `;
        listaProductos.append(li);
    });
}
