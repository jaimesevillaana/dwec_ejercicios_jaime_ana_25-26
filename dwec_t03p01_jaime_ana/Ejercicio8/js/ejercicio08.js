
/*
 * ¿Para qué sirve el método match(), 
 * el método search() y el método includes() 
 * del objeto String?
 * El método search() sirve para buscar una coincidencia entre 
 * una expresión regular y una cadena de caracteres,
 * devolviendo la posición de la primera coincidencia 
 * o -1 si no se encuentra ninguna coincidencia.
 * El método match() devuelve una matriz que contiene los resultados de hacer 
 * coincidir una cadena con otra o una expreson regular.
 * El método includes() devuelve verdadero si una cadena contiene un valor especificado
 */
console.log("T03 - Ejercicio 08");

//match()
let texto = "El coche es rojo, el coche es rápido";

let resultado = texto.match("coche");

console.log(resultado);


//search()
let texto2 = "Hola mundo";

console.log(texto2.search("mundo")); //5
console.log(texto2.search("Adiós")); //-1
console.log(texto2.search(/o/)); //1(primera "o")



//includes()
let texto3 = "Hola mundo";

console.log(texto3.includes("hora")); //true
console.log(texto3.includes("Adiós")); //false