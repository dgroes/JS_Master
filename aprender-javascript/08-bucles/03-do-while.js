let numero = 2;
do{
    console.log("Número: " + numero);
    numero++;
} while(numero <= 5);


console.log("----------------------------");
let azar = Math.floor(Math.random() * 6);
let contador = 1;
let adivinar = 5;
do{
    if(azar == adivinar){

        console.log("Ház acertado!! el número es el: " + azar);
    }else {
        console.log("De los 3 intentos, no le haz atinado");
    }
    contador++;
} while(contador == 3);



console.log("----------------------------");
let a = 1;
do{
    
    if(a % 2 == 0){
        console.log(a);
    } 

    a++;
} while(a <= 20);


console.log("----------------------------");
let respuesta = "n";
let count = 1;
do{
    if(respuesta == "s"){
        console.log("Saliste");
        break;
    } else {
        console.log("¿Quieres salir? (S/N)");
    }

    count++;
} while(count <= 10);



console.log("----------------------------");