let themeGreen = document.querySelector(".theme__green");
let themeBlue = document.querySelector(".theme__blue");
let themeRed = document.querySelector(".theme__red");

let page = document.querySelector("html");

themeGreen.addEventListener("click", () => {
    page.className = ""; // Eliminamos todas las clases anteriores
    page.classList.add("theme__green--active"); // Agregamos la nueva clase
});

themeBlue.addEventListener("click", () => {
    page.className = "";
    page.classList.add("theme__blue--active");
});

themeRed.addEventListener("click", () => {
    page.className = "";
    page.classList.add("theme__red--active");
});
