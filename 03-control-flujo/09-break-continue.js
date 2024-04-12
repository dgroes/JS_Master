// Continue saltará la iteración indicada
// Break parará todas las iteración hasta el punto indicado

let i = 0;
while (i < 6) {
    i++;
    if (i === 2){
        continue; 
    }
    if (i === 4){
        break;
    }

    console.log(i);
}