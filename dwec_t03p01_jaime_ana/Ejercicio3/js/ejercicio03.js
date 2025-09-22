/*
* Crea un script que pida al usuario una cadena y diga cuántas palabras
* tiene esa cadena. Después mostrará cada una de las palabras que
* constituyen la  cadena. Suponemos que una palabra está formada por
* uno o más caracteres distintos al espacio y al tabulador
*/ 

console.log("T03 - Ejercicio 03");

let cadena = prompt("Introduce una cadena de texto:");

if (cadena) {

    let palabra = cadena.trim().split(" ").filter(p => p !== "" && p !== "\t");

    console.log("Número de palabras: " + palabra.length);

    for(let i = 0; i < palabra.length; i++) {
        console.log("Palabra " + (i + 1) + ": " + palabra[i]);
    }

}
    