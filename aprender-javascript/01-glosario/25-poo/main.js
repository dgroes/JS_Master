/* PROGRAMACIÓN ORIENTADA A OBJETOS */

//Molde
class Gato {
    constructor(nombre, raza, color) {
        //Propiedades o atributos
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    //Métodos (Acciones)
    maullar() {
        console.log(`${this.nombre} dice: Miau Miau`);
    }
    comer() {
        console.log( this.nombre + " está comiendo");
    }

    getRaza() {
        return this.raza;
    }

    setRaza(raza) {
        this.raza = raza;
    }

    set guardarColor(color) {
        this.color = color;
    }

    get sacarColor() {
        return this.color;
    }

    static saludar() {
        alert("Hola amigo que tal estás?");
    }

}

//GATO #01
//Creación de un nuevo objeto en base al model de Gato
let miGato = new Gato("Dalpo", "Abisinio", "Gris con Blanco");

//Cambiar un valor con Set
miGato.setRaza("Persa")

//LLamar un Get
console.log(miGato.getRaza());

//Acceder a una propiedad
console.log(miGato.nombre);

//Acceder a métodos
miGato.maullar();

//aseignar un nuevo color ami gato con el set
miGato.guardarColor = "Negro";
console.log(miGato.sacarColor);

//LLamar un método estatico, este solo funcionara llamando a la Clase y no al objeto
Gato.saludar();


/* HERENCIA */
class GatoEspecial extends Gato {
    constructor(nombre, raza, color, habilidad) {

        //Establecer las propiedades a heredar
        super(nombre, raza, color);

        this.habilidad = habilidad;
    }

    setHabilidad(habilidad) {
        this.habilidad = habilidad;
    }

    getHabilidad() {
        return this.habilidad;
    }

    ejecutar() {
        console.log(`${this.nombre} esta utilizando su habilidad de ${this.habilidad}`);
    }
}

let superGato = new GatoEspecial("Suki", "De la basura", "Gris Claro", "Engordar sin parar" );

superGato.ejecutar();

console.log(superGato.getRaza());

superGato.comer();

//GATO #02
//Creación de un nuevo objeto en base al model de Gato
// let miGato2 = new Gato("Suhno", "Azúl Ruso", "Gris Azulado");
// console.log(miGato2);

// //Acceder a una propiedad
// console.log(miGato2.nombre);

// //Acceder a métodos
// miGato2.comer();
