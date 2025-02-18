function prepareGifts(gifts) {
    // Crear un Set para eliminar duplicados y convertirlo nuevamente a array
    let uniqueGifts = [...new Set(gifts)];
    
    // Ordenar el array en orden ascendente
    uniqueGifts.sort((a, b) => a - b);
    
    return uniqueGifts;
}

// Ejemplo de uso
const gifts1 = [3, 1, 2, 3, 4, 2, 5];  
console.log(prepareGifts(gifts1)); 
// Output: [1, 2, 3, 4, 5]

const gifts2 = [10, 20, 30, 40, 10, 20, 30];  
console.log(prepareGifts(gifts2));  
// Output: [10, 20, 30, 40]
