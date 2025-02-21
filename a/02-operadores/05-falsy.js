// short-circut

//Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = 'diego';
let username = nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log('soy función 1')
    return false;
}

function fn2(){
    console.log('soy función 2')
    return true;
}

let x = fn1() && fn2();