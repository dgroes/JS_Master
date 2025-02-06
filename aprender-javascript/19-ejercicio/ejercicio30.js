/* 
    Ejercicio 30:

    Crea una función que reciba un número  y devuelva su factoríal

*/

let elFactorial = (numero) => {
    if (numero <= 1) {
        return 1;
    }

    let factorial = 1;

    for(let i = 2; i <= numero; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(
    elFactorial(
        Number(prompt("Dime un número y te digo su factorial", 0))
    )
);