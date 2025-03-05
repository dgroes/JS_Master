let clockTime = document.querySelector(".clock__time");

//Debe estar dentro del set interval
// let myDate = new Date();

setInterval(() => {

    let myDate = new Date();

    let hours = myDate.getHours();
    let mins = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    //Agregar los "0" a los tiempos de un digito: de "9 minutos" a "09 minutos"
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (seconds < 10) seconds = "0" + seconds;


    clockTime.innerHTML = `
        ${hours}:${mins}:${seconds}
    `;

}, 1000);