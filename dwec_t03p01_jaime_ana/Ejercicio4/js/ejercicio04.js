

console.log("T03 - Ejercicio 04");

let frase = prompt("Introduce una frase:");

let palabra = prompt("Introduce la palabra a buscar:");

let contador = 0;
let posicion = frase.indexOf(palabra);

// Mientras encontremos la palabra en la frase
while (posicion !== -1) {
    contador++;

    // Seguir buscando desde la siguiente posición
    posicion = frase.indexOf(palabra, posicion + palabra.length);
}

if (contador > 0) {
    console.log(`La palabra "${palabra}" se encuentra ${contador} veces en la frase.`);
} else {
    console.log(`La palabra "${palabra}" no se encuentra en la frase.`);
}