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
let misGuitarras  = guitarras.map(guitarra => {
    console.log(guitarra);
    return "Guitarra " + guitarra;
})

console.log(misGuitarras);