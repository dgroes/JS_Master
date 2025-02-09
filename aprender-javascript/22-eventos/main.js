/* Eventos */



//Click
let boton = document.querySelector("#botoncito");

boton.addEventListener("click", (event) => {

    alert("Has dado click al botón");

    console.log(event);

});


//Dobleclick 
let botonDoble = document.querySelector("#botonDoble");
botonDoble.addEventListener("dblclick", () => {
    alert("Has dado doble click")
});


//Mouse over
let cajaTexto = document.querySelector("#cajaTexto");
cajaTexto.addEventListener("mouseover", () => {
    console.log("Has pasado por encima de un textarea")
});

//MouseOut | MouseMove
let textoCaja = document.querySelector("#textoCaja");
textoCaja.addEventListener("mouseout", () => {
    console.warn("Has salido de la caja de texto");
});

textoCaja.addEventListener("mousemove", () => {
    console.error("Te estás moviento dentro del textarea");
});


/* Eventos de teclado */
let campoTexto = document.querySelector("#campoTexto");

//KeyDown
campoTexto.addEventListener("keydown", (evento) => {
    console.log("Has presionado la tecla: " + evento.key);
});

//KeyUp
campoTexto.addEventListener("keyup", (evento) => {
    console.warn("Has soltado la tecla " + evento.key);
})

//KeyPress
campoTexto.addEventListener("keypress", (evento) => {
    console.error("Mantienes pulsada la tecla " + evento.key);
})

/* Eventos de formulario */
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {

    event.preventDefault(); //Evita que se recargue la página

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value;

    alert("Nombre: " + nombre + " | Correo: " + email + " | Genero: " + genero);
});

//Evento input
let inputNombre = document.querySelector("#nombre");
inputNombre.addEventListener("input", () => {
    console.log("El usuario ha escrito: " + inputNombre.value);
})

//Evento Change
let selectGenero = document.querySelector("#genero");
selectGenero.addEventListener("change", function () {
    console.warn("Has cambiano el select a: " + this.value);
})

//Evento Focus
let campoEmail = document.querySelector("#email");
campoEmail.addEventListener("focus", () => {

    console.log("Acabas de entrar al campo de email Ojito");

    campoEmail.style.border = "3px solid red";
    campoEmail.style.outline = "none";
    campoEmail.style.borderRadius = "5px";
});

//Evento Blur
campoEmail.addEventListener("blur", () => {
    console.log("Has salido del campo");
    campoEmail.style.border = "2px solid grey";
    campoEmail.style.borderRadius = "30px";
})


// Eventos del documento y de la ventana
document.addEventListener("DOMContentLoaded", () => {
    //Aquí hago todo mi código de JS

    console.log("Todo el DOM está cargado");
})

window.addEventListener("load", () => {
    console.warn("Toda la WEB está cargada");
})

window.addEventListener("resize", () => {
    console.error("Ventana Redimencionada: " + window.innerWidth + " " + window.innerHeight);
})

window.addEventListener("scroll", () => {
    console.log("Estás en el pixel: " + Math.round(window.scrollY) + " del Scroll de la WEB");
})


// Eventos del portapapeles
let portapapeles = document.querySelector("#portapapeles");

portapapeles.addEventListener("copy", () => {
    alert("Hey, no copies, está proibido");
    navigator.clipboard.writeText("vaciado XD");
})

portapapeles.addEventListener("paste", () => {
    alert("Has pegado un texto en el input");
})

portapapeles.addEventListener("cut", () => {
    alert("Has cortado el texto");
})

portapapeles.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
    console.warn("Has abierto el menú contextual");
})


//Dejar de escuchar eventos
let dejar = document.querySelector("#dejar");

function alerta() {
    alert("Has dado click al botón");
}

dejar.addEventListener("click", alerta)

setTimeout(() => {
    dejar.removeEventListener("click", alerta);
    alert("Ya no puede usar el botón 💛");
}, 10000);


// Propagación de Eventos
let cajaPadre = document.querySelector("#cajaPadre");
let botonHijo = document.querySelector("#botonHijo");

cajaPadre.addEventListener("click", () => {
    alert("Has tocado el elemento Padre");
})

botonHijo.addEventListener("click", (evento) => {
    evento.stopPropagation();
    alert("Has tocado el elemento Hijo");
})