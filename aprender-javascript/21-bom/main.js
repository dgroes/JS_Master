// BOM Browser Objetc Model

/* Alertas y dialogos */
// alert("Una alerta");
// prompt("Estás bien?");
// confirm("Estás seguro de haber entendido el DOM?");

/* Window */
console.log(window);

console.log(window.innerWidth); //Anchura

console.log(window.innerHeight); //Altura

console.log(window.outerWidth, window.outerHeight); //Anchura y Alturas real

console.log(window.closed, window.document, window.navigator.userAgent);

/* window.setInterval(() => {
    console.log("Hola Gary");
}, 1000);
 */
console.log(window.scrollX, window.scrollY);


/* Navigator */
console.log(navigator.appName, navigator.appVersion);

if (!navigator.onLine) {
    alert("Oye, no tienes internet");
} else {
    console.log("Estás conectado a Internet");
}


/* Location */
console.log(location.href);
console.log(location.hostname);
// location.href = "https://www.youtube.com/";
// location.reload();


/* History */
/* history.forward(); */ //La proxima página que visitaste en base al Historial
// history.go(0);
console.log(history.length);


/* Screen */
console.log(screen.width, screen.height);


/* Ventanas emergentes o Pop Ups */
let github = window.open(
    "https://github.com/dgroes", "Perfil de Dgroes",
    "width=750, height=500, left=550, top=550"
);

// Cerrar el pop up
// github.close();