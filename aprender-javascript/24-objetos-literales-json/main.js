/* OBJETOS LITERALES
Es una forma de definir un objeto utilizando llaves {} y 
especificando sus propiedades y valores dentro de ellas. */
//propiedad: Valor
let pelicula = {
    titulo: "Terminator 2",
    anio: 1991,
    director: "James Cameron",
    genero: "Ciencia Ficción",
    protagonista: "Arnold Schwarzenegger",
    detalles: {
        duracion:137,
        clasificacion: "R",
        distribucion: "TriStar Pictures",
        presupuestoUSD: 102000000,
        recaudacionUSD: 520881154,
        musica: "Brad Fiedel",
        fotografia: "Adam Greenberg",
        vestuario: "Marlene Stewart"
    },
    elenco: [
        "Arnold Schwarzenegger",
        "Edward Furlong",
        "Linda Hamilton",
        "Rober Patrick",
        "Joe Morton",
    ],
    mostarElenco: () => {
        console.log("****Elenco de Actores****");
        pelicula.elenco.forEach(nombre => {
            console.log(nombre);
        });
    },
    descripcion: function () {
        return `${this.titulo} es una pelicula de ${this.genero}, 
               dirigida por ${this.director}, estrenada el año ${this.anio}`
    },

}

//Uso recomendado, con el punto
console.log(
    pelicula.director,
    pelicula.anio
);

// Otras 2 formas, pero igual de validas
console.log(pelicula);
console.log(
    pelicula['director'],
    pelicula['genero'],
)

//Cambiar valor de una propiedad
pelicula.director = "Paul Thomas Anderson";
console.log(pelicula);

//Agregar una nueva propiedad con su valor
pelicula.secuela = "Terminator 3: La rebelión de las máquinas";
console.log(pelicula);

//Lamar un método que es una función
console.log(pelicula.descripcion());

//Lamar un método que recorre una propiedad como array con un foreach
pelicula.mostarElenco();

//Accediendo a un sub Objeto
console.log(pelicula.detalles);

//Acceder a una valor de un sub objeto
console.log(pelicula.detalles.vestuario);

//Eliminar una propiedad
delete pelicula.genero;
console.log(pelicula);


/* JSON (JavaScript object notation) */
//Formato de texto para comunicar, no permite método o funciones, pero si objetos

let guitarra = {
    marca: "Fender",
    modelo: "American Professional II Telecaster®, Maple Fingerboard, Butterscotch Blonde",
    numeroModelo: 113942750,
    serie: "American Professional II",
    color: "Butterscotch Blonde",
};

// Definir un Json en base
let guitarraJson = JSON.stringify(guitarra);
console.log(guitarra);  // Objeto Literal Normal
console.log(guitarraJson); // JSON

//Converir un JSON a un Objeto Normal
let converido = JSON.parse(guitarraJson);
console.log(converido);

