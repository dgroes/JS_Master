for (let index = 1; index <= 10; index++) {
    console.log(index);
}

console.log("-------------------------");
let numero = 5;
for (let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("-------------------------");
let suma = 0;
for(let e = 1; e <=10; e++){
   console.log(suma += e);
}


console.log("-------------------------");
const personas = ['Ana', 'Carlos', 'Luis', 'María'];
for(const nombres of personas){
    console.log(nombres);
}