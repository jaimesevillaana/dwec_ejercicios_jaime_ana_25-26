/* Dada una cadena de texto usando el siguiente 
* formato: "1, 2, 3, 4". Primero elimina todos los 
* espacios en blanco, después convierte la cadena
* de texto en un array de números. El separador usado 
* será la ",". Debes hacer uso de uno de los métodos 
* del objeto String.
*/

console.log("T03 - Ejercicio 05");



let cadena = "1, 2, 3, 4";

// Eliminar espacios en blanco
let sinEspacios = cadena.replaceAll(" ", "");

//covertir la cadena en un array usando "," como separador
let arrayTexto = sinEspacios.split(",");

// Convertir cada elemento en número
let arrayNumeros = arrayTexto.map(Number);

console.log("Cadena original: " + cadena);
console.log("Cadena sin espacios: " + sinEspacios);
console.log("Array de texto: " + arrayTexto);
console.log("Array de números: " + arrayNumeros);