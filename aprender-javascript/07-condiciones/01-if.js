let llueve = false;

if(llueve){
    console.log("Tengo que llevar paraguas");
} else {
    console.log("No tengo que llevar paraguas");
}


console.log("------------------");

let edad = 18;

if(edad == 17){
    console.log("Eres menor de edad, no puedes entrar 🧒");
} else if(edad >= 70){
    console.log("Eres un anciano👴");
} else if(edad >= 18){
    console.log("Eres mayor de edad, pueden entrar 🧑");
} else if (edad < 14){
    console.log("No solo eres menor de edad, eres muy joven aún 🧑‍🍼");
}


console.log("--------------------------");

let number = -12;

if(number < 0){
    console.log(" El número es negativo");
} else if (number >= 1){
    console.log("El número es positivo");
} else if(number == 0){
    console.log("El número es cero");
}

console.log("--------------------------");

let numero = 9;
const par = numero % 2;
if (par == 0){
    console.log("El número " + numero + " es par");
} else {
    console.log("El número " + numero + " es impar");
}


console.log("--------------------------");
let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Muy bien");
} else if (nota >= 5) {
    console.log("Pasaste");
} else {
    console.log("Reprobaste");
}