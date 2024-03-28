/* OBJETOS

Propiedades: Son valores asociados a un objeto. Estos valores pueden ser cualquier tipo de datos 
válido en JavaScript, como números, cadenas de texto, arreglos, otros objetos, funciones, etc. 
Las propiedades de un objeto se acceden mediante su nombre y se pueden modificar, agregar o eliminar 
dinámicamente.

Métodos: Son funciones asociadas a un objeto. Estas funciones están definidas dentro del cuerpo del 
bjeto y pueden acceder a las propiedades del objeto utilizando la palabra clave this. Los métodos 
permiten realizar acciones específicas sobre el objeto o calcular valores basados en las propiedades 
del mismo.

*/

//Personaje de TV

let nombre = "Kakashi Hatake";
let anime = "Naruto";
let edad = 46;

let personajes = {
    //llave   //Valor
    nombre: "Kakashi Hatake",
    anime: "Naruto",
    edad: 46,
};

//Accediendo al objeto 
console.log(personajes);

//Accadiendo a una parte del objeto
console.log(personajes.nombre);

//Otra forma de acceder a una parte del objeto
console.log(personajes["anime"]);

//Modificar una propiedad de un objeto
personajes.edad = 34;
console.log(personajes["edad"]);

//Otra foma de cambiar la propiedad de un objeto
personajes["edad"] = 25;
console.log(personajes["edad"]);

//Eliminar una propiedad de un objeto
delete personajes.anime;
console.log(personajes);


