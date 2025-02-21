/* FECHAS EN JS (OBJETO DATE)*/

let fechaActual = new Date();
console.log(fechaActual);

//Año actual
console.log(fechaActual.getFullYear());

//Mes actual
console.log(fechaActual.getMonth());

//Dia actual
console.log(fechaActual.getDay());

//Horas actuales
console.log(fechaActual.getHours());

//MInutos actuales
console.log(fechaActual.getSeconds());

//Segundo actual
console.log(fechaActual.getSeconds());

//Milesegundo actual
console.log(fechaActual.getMilliseconds());

// Número del día de la Semana
console.log(fechaActual.getDay());

console.log(`Fecha completa: ${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`);