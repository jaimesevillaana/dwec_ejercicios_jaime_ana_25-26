
console.log("T03 - Ejercicio 12");

let decenasDeMillar = Math.floor(Math.random() * 10);
let unidadesDeMillar = Math.floor(Math.random() * 10);
let centenas = Math.floor(Math.random() * 10);
let decenas = Math.floor(Math.random() * 10);
let unidades = Math.floor(Math.random() * 10);

//concatenamos los resultados en un numero de 5 cifras
let numeroPremiado = "" + decenasDeMillar
+ unidadesDeMillar 
+ centenas
+ decenas
+ unidades;

console.log("El número premiado es: " + numeroPremiado);

