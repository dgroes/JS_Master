/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */


// const palabra = prompt("¿Cual palabra quieres saber si es una anagrama? Escribela");
const boton = document.querySelector("#palabra");
boton.addEventListener("click", () => {
    const palabraUno = prompt("¿Que palabra quieres saber si es un Anagrama? Escribr tu primera palabra");
    // console.log(palabraUno);

    const palabraDos = prompt("Ahora escribe la segunda palabra para comprarar");
    // console.log(palabraDos);

    function esAnagrama(palabraUno, palabraDos) {
        
        // Convertir ambas palabras a minúsculas y  se ordenan alfabéticamente
        let aPalabraUno = palabraUno.toLowerCase().split('').sort().join('');
        let aPalabraDos = palabraDos.toLowerCase().split('').sort().join('');

        // Comparamos las dos palabras ordenadas
        if (aPalabraUno === aPalabraDos) {
            alert("¡Es un anagrama! 🌝");
        } else {
            alert("No es un anagrama ☹️");
        }

    }

    esAnagrama(palabraUno, palabraDos);

})


