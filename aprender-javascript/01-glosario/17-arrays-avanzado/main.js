let frameworks = ['React', 'Angular', 'Vue', 'Astro', 'Laravel', 'Wordpress', 'Django', 'Flask', 'Symphony', '.NET'];

//Aceso manual
console.log(frameworks[0]);

//Aceso con bucle (for)
for (let i = 0; i < frameworks.length; i++) {
    console.log(frameworks[i]);
}

// MOstrar por pantalla
for (let i = 0; i < frameworks.length; i++) {
    document.write("<li>" + frameworks[i] + "</li>");
}


//Bucles para recorrer arrays
console.log("******************Con For Normal******************************");
let guitarras = ['Ibanez', 'Gibson', 'Fender', 'Epiphone', 'Shur', 'PRS', 'Solar', 'Tahima', 'Yamaha'];
console.log("Listado de guitarras: ");

//For
for (let contador = 0; contador < guitarras.length; contador++) {
    console.log(guitarras[contador]);
}

//For of
console.log("****************** Con For OF ******************************");
for (let guitarra of guitarras) {
    console.log(guitarra);
}

//For In
console.log("****************** Con For In ******************************");
for (let index in guitarras) {
    console.log(index, guitarras[index]);
}

// Foreach 
console.log("****************** Con Foreach ******************************");
guitarras.forEach(guitarra => {
    console.log(guitarra);
});

// Map
console.log("****************** Con Map ******************************");
let misGuitarras = guitarras.map(guitarra => {
    console.log(guitarra);
    return "Guitarra " + guitarra;
})

console.log(misGuitarras);



// Arrays multidimencionales
console.log("****************** Con Map ******************************");
let categories = ["Deportes", 'Rol', 'JRPG', 'Acción', 'Sandbox'];
let titles = ['NBA 2K', 'Fifa', 'Fallout 3', 'Morrowind', 'Persona', 'Final Fantasy', 'Red Dead Redemption', 'Call of Duty', 'Minecraft', 'Starbound'];

let games = [categories, titles];
console.log(games);

console.log(games[1][2]);
console.log(games[0][4]);


console.log("****************** Array Bidimencional ******************************");
//Array bidimencional
let tabla = [
    ["Producto", "Cantidad", "Precio"],
    ["PC", 2, 649000], // Falta la coma aquí
    ["Smartphone", 12, 590000],
    ["Page 7", 7, 280000],
];


console.table(tabla);
// console.log(tabla[2][0], tabla[2][2]); // Accede al precio del Smartphone



console.log("****************** Array Bidimencional con forEach ******************************");

document.write("<table border='1'>"); // Agregar un borde para mejor visualización

tabla.forEach(fila => {
    document.write("<tr>"); // Iniciar una nueva fila

    fila.forEach(elemento => {
        document.write("<td>" + elemento + "</td>"); // Crear una celda con contenido
    });

    document.write("</tr>"); // Cerrar la fila después de iterar los elementos
});

document.write("</table>");




console.log("****************** Array tridimencional ******************************");
let menu = [
    ['Plato', 'Cantidad', 'Precio', 'Tamaño'],
    ['Menú Pizza', 2,
        [8000, 10000, 15000], // Precios según el tamaño
        ['Pequeño', 'Mediano', 'Grande']
    ],
    ['Menú Hamburguesa', 3,
        [5000, 7500, 12000],
        ['Simple', 'Doble', 'Triple']
    ],
    ['Menú Sushi', 5,
        [9000, 13000, 17000],
        ['6 piezas', '10 piezas', '15 piezas']
    ]
];

// Ejemplo de acceso a datos dentro del array tridimensional
console.log(menu[1][0]); // "Menú Pizza"
console.log(menu[1][2][1]); // Precio Mediano de Pizza -> 10000
console.log(menu[2][3][2]); // Tamaño Triple de Hamburguesa -> "Triple"
console.log(menu[3][2][0]); // Precio 6 piezas de Sushi -> 9000

/* for(let plato of menu){
    console.log("-----------------")
    for(let elemento of plato){
        console.log(elemento);
        if(Array.isArray(elemento)){
            for(let subElemento of elemento){
                console.log(subElemento);
            }
        }else {
            console.log(elemento);
        }
    }
}
 */