/*
* La diferencia que hay entre el método slice(), método substr()  y
* el método substring() es que:
* - slice(start, end) extrae una parte de una cadena y devuelve una cadena nueva con esa parte extraida.
* - substr(start, length) es igual que slice() pero el segundo parámetro especifica la longitud 
* de la parte extraida. *está en desuso*
* - substring(start, end) es similar a slice() pero no acepta valores negativos para los parámetros.
*/ 

console.log("T03 - Ejercicio 02");

let texto = "Practicando";

// Ejemplos con slide()

console.log(texto.slice(0, 4));      // "Prac" del 0 al 4

console.log(texto.slice(-6,-3)) ;  // "ica" del -6 al -3

// Ejemplos con substr()

console.log(texto.substr(0, 4));    // "Prac" del 0 y 4 

console.log(texto.substr(-6, 3));  // "ica" del -6 y 3

// Ejemplos con substring()

console.log(texto.substring(0, 4)); // "Prac" del 0 al 4

console.log(texto.substring(4, 0)); // "Prac" del 0 al 4 (el orden de los parámetros no importa)

console.log(texto.substring(4));    // "ticando" del 4 hasta el final

