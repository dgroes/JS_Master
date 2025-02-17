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
function servirPizza() {
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
}

servirPizza()
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
    });


