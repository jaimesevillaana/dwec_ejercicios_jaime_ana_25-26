

console.log("T03 - Ejercicio 18");

let entrada = prompt("Introduce la fecha de tu nacimiento (DD/MM/YYYY");

let dia = parseInt(entrada.substring(0, 2));
let mes = parseInt(entrada.substring(3, 5));
let anio = parseInt(entrada.substring(6, 10));

let fechaNacimiento = new Date(anio, mes, dia);
let hoy = new Date();

//calcular edad
let edad = hoy.getFullYear() - anio;
if (hoy.getFullYear() < mes || (hoy.getMonth() === mes 
&& hoy.getDate() < dia)) {
    edad--;
}

if (hoy.getDate() === dia && hoy.getMonth() === mes) {
    alert("Felicidades por tu cumpleñaos!");
}

