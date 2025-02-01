//Funciones anónimas
// Es una función "sin nombre"

const saludo = function (nombre = "") {
    console.log("Hola " + nombre + " qe tal estás?");
}

saludo();


//Ejemplo de función tipo Callback
// Son funciones que se pasan como parametro de otra función,
// para que la otra función la ejecute.

/* let veces = 0;
setInterval(function(){
    veces++;
    console.log("Se ha ejecutado el timeout: " +veces+" veces.");
}, 3000); */

// setInterval(saludo("Pepito"), 1000);



//Funciones de Callback "avanzadas"
function restame(n1, n2, mostrar, multiplicarPorTres) {

    let resta = n1 - n2;
    mostrar(resta);
    multiplicarPorTres(resta);
    return resta;
}

restame(20, 50, function(resultado){
    console.log(resultado);
}, 
function(resultado){
    console.log(resultado*3);
});


//Ambito Variables (Scope)

//Global
let ruta = "google.com";
function mostrarRuta(){
    alert(ruta);

    let nombre = "John Doe";

}

/* console.log(nombre);
mostrarRuta();
 */


//Hoisting o elevación
console.log(coche);
var coche = "Maruti";


/* console.log(moto);
let moto = "Yamaha";
 */


//Funciones de flecha
//Definir función
let nuevoCurso = () =>{
    console.log("PHP Master ");
}
nuevoCurso();

//Utilizar función de flecha en un callback
setTimeout(()=>{
    console.log("Estoy usando una función de flecha")
}, 2000);