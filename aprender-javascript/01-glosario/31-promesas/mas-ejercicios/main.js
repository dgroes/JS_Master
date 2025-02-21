///EJERCICIO 01: Simulando una API de Usuarios
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" },
    { id: 3, name: "María" },
    { id: 4, name: "Pedro" },
    { id: 5, name: "Lucía" }
];

function apiUsuarios() {
    return new Promise(resolve => {
        setTimeout(() => resolve(users), 2000);
    });
}

async function getUserData(userId) {
    const users = await apiUsuarios();
    const user = users.find(user => user.id === userId);
    
    if (user) {
        return user;
    } else {
        throw new Error("Usuario no encontrado");
    }
}

// Función autoejecutable para probar con async/await
(async () => {
    try {
        console.log(await getUserData(3)); // { id: 3, name: "María" }
        console.log(await getUserData(10)); // Error: "Usuario no encontrado"
    } catch (error) {
        console.error(error.message);
    }
})();


///EJERCICIO 02: Carga de imágenes con async/await
function loadImage(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.endsWith(".jpg") || url.endsWith(".png")) {
                resolve(`Imagen cargada: ${url}`);
            } else {
                reject(new Error("Formato no soportado"));
            }
        }, 3000); // Simula la carga con un retardo de 3 segundos
    });
}

// Función autoejecutable para probar con async/await
(async () => {
    try {
        console.log(await loadImage("https://example.com/image.jpg"));
        console.log(await loadImage("https://example.com/file.txt"));
    } catch (error) {
        console.error(error.message); // Captura el error y muestra el mensaje
    }
})();



async function miFuncion() {
    let resultado = await miPromesa();
    console.log(resultado);
}

miFuncion();
// Después de 2 segundos: "¡Promesa cumplida!"
