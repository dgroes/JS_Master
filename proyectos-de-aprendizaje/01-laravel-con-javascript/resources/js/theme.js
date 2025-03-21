// C08: JS con Laravel

// Selecciona el botón que alterna el tema
const theme = document.querySelector("#theme-toggle");

// Selecciona el elemento <html> que contiene el atributo del tema
const elementoHtml = document.querySelector("html");

// Selecciona los botones(iconos) para mostrar/ocultar según el tema
const botonTemaClaro = document.querySelector("#toggle-light");
const botonTemaOscuro = document.querySelector("#toggle-dark");

// Función para aplicar el tema y guardarlo en el localStorage
const aplicarTema = (tema) => {

    // Aplica el tema al elemento <html>
    elementoHtml.setAttribute('data-theme', tema);

    // Muestra u oculta los iconos según el tema
    if (tema === 'dark') {
        botonTemaClaro.classList.add("hidden");
        botonTemaOscuro.classList.remove("hidden");
    } else {
        botonTemaClaro.classList.remove("hidden");
        botonTemaOscuro.classList.add("hidden");
    }

    // Guarda el tema en el localStorage
    localStorage.setItem("theme", JSON.stringify(tema));
};

// Función para alternar entre los temas
const alternarTema = () => {

    // Obtiene el tema actual del atributo 'data-theme' del elemento <html>
    const temaActual = elementoHtml.getAttribute('data-theme');

    // Alterna entre los temas 'dark' y 'light'
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';

    // Aplica el nuevo tema
    aplicarTema(nuevoTema);
};

// Añade un evento de clic al botón para alternar el tema
if (theme) {
    theme.addEventListener("click", alternarTema);
}