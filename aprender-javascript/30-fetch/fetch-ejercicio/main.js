const url = 'https://imdb236.p.rapidapi.com/imdb/tt7631058';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3c3870432dmsh3430d9bc077fb6bp1dc29cjsnf8a20e31f263',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
};

async function obtenerCast() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();  // Usamos json() para obtener un objeto JavaScript
        console.log(result.primaryTitle);      // Accedemos a la propiedad primaryTitle
    } catch (error) {
        console.error(error);
    }
}

// Llamamos a la función
obtenerCast();
