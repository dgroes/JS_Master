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
            reject("La promesa se ha cumplido la promesa :(")
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