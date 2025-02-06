/* 
    Ejercicio 26
    Dado un Array de palabras, cuenta cuantas letras tiene cada palabra y crea un nuevo array que contenga esos números.

*/


let palabras = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima'];
let palabrasNumeros = [
    ['Palabra', "Cantidad de letras"]
]

for (let i = 0; i < palabras.length; i++) {
    
    document.write("<table>");
        document.write("<tr>")
            document.write("<th> Palabra </th>");
            document.write("<th> Cantidad de letras </th>");

        document.write("<tr>");
        document.write("<td>"+palabras[i])+"<td>";
                document.write("<td>"+palabras[i].length)+"</td>"
        document.write("</tr>");
    document.write("</table");

    //Creación del array 
    palabrasNumeros.push([palabras[i], palabras[i].length]);
}

console.table(palabrasNumeros);