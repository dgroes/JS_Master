/* Ejercicio 6 
    En mi tienda de videojuegos tenemos una oferta.
    Si compras un juego de 50 euros o más, te hacemos un 20% de descuento.
    Si un cliente compra el Tekken 15 que cuesta 50 euros, ¿en cuanto se le queda?

*/


 // Porciento de descuento

let juego = 50;

let descuento = juego * 0.2;
let totalPrecio = juego - descuento;

console.log("El costo total (aplicando el descuento) para el juego Tekken es: " + totalPrecio + " Euros 🎮");