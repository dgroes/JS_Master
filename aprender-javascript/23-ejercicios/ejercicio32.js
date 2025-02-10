//EJERCICIO 32:

/* 
    Crea una lista de la compra en la que el usuario pueda añadir nuevos productos para comprar
    con un campo de texto y un botón.

    Cada vez que se añade un producto, este aparece en la lista con un botón para eliminarlo.

    El usuario podrá añadir tantos productos como quiera.
    Cada producto añadido tiene un botón para borrarlo de la lista.



*/

document.querySelectorAll("#boton-comprar").forEach(boton => {
    boton.addEventListener("click", () => {
        let producto = boton.parentElement.parentElement;
        let productoAlog = producto.getAttribute("id");
        console.log(productoAlog)


        let lista = document.createElement("li")
        lista.textContent = productoAlog;
        let listado  = document.querySelector("#listado");
        listado.append(lista);

        let botonEliminar = document.createElement("button");
        botonEliminar.setAttribute("id", "eliminar");
        botonEliminar.textContent = "Eliminar"
        
        lista.append(botonEliminar);

        botonEliminar.addEventListener("click", () => {
            lista.remove();
        })
        
    });
});
