/* PROMESAS */
console.log("Promesas en JS 📪");

let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let correcto = true;

        if (correcto) {
            let miObjeto = {
                nombre: "Terraria",
                categoria: "SandBox",
                anio: "2011",
            }

            resolve(miObjeto);

        } else {
            reject("No se ha cumplido la promesa :(")
        }
    }, 5500);

});

// console.log(miPromesa);

miPromesa
    .then(resultado => {
        console.warn(resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });

alert("Primer Alert");
alert("Segundo Alert");
alert("Tercer Alert");


// PROMESAS ENCADENADAS
/* function servirPizza() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza Servida"), 15000);
    })
}

function servirHamburguesa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hamurguesa Servida"), 8000);
    })
}

function servirEmpanadaDeQueso() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Empanada Servida"), 6000);
    })
} */

//Con Then Catch
/* servirPizza()
    .then(resultado1 => {
        console.log(resultado1);
        return servirHamburguesa();
    })
    .then(resultado2 => {
        console.log(resultado2)
        return servirEmpanadaDeQueso();
    })
    .then(resultado3 => {
        console.log(resultado3);
    })
    .catch(error => {
        console.error("Error en las comandas: ", error);
    }); */



//Con Async Await
/* async function serveriPlatos() {
    try {
        let resultado1 = await servirPizza();
       
        if (resultado1 != 'chcao pizza') {
            throw new Error("La pizza no ha salido correctamente");
        } else {
            console.warn(resultado1);
        }

        let resultado2 = await servirHamburguesa();
        console.warn(resultado2);

        let resultado3 = await servirEmpanadaDeQueso();
        console.warn(resultado3);

        console.log("Se han servido todos los platos");

    } catch (error) {
        console.error("Error: ", error);
    }

}
 */


/// Con Async Await y con manejo de errores sin detener el flujo de la función
// Simulación de preparación de platos con promesas
function servirPizza() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza Mal Servida"), 15000); // Simulamos un error al cambiar el mensaje
    })
}

function servirHamburguesa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hamburguesa Servida"), 8000); // Este es el único plato que se sirve bien
    })
}

function servirEmpanadaDeQueso() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Empanada Mal Servida"), 6000); // Simulamos un error al cambiar el mensaje
    })
}


// Función asíncrona para servir los platos en orden
async function serveriPlatos() {
    try {
        // Intentamos servir la pizza
        let resultado1 = await servirPizza();

        if (resultado1 !== 'Pizza Servida') {
            throw new Error("La pizza no ha salido correctamente 🍕");
        } else {
            console.warn(resultado1);
        }

    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        // Intentamos servir la hamburguesa
        let resultado2 = await servirHamburguesa();

        if (resultado2 === 'Hamburguesa Servida') { // Este será el único caso exitoso
            console.warn(resultado2);
        } else {
            throw new Error("La hamburguesa no ha salido correctamente 🍔");
        }

    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        // Intentamos servir la empanada
        let resultado3 = await servirEmpanadaDeQueso();

        if (resultado3 !== 'Empanada Servida') {
            throw new Error("La empanada de queso no ha salido correctamente 🥟");
        } else {
            console.warn(resultado3);
        }

    } catch (error) {
        console.error("Error: ", error);
    }

    console.log("Se han servido todos los platos (o al menos se intentó 😅)");
}

// Ejecutamos la función para ver el flujo de ejecución
serveriPlatos();
