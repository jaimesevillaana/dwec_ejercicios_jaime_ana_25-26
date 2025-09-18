console.log("T02 - Ejercicio 13");

let palabra = prompt("Introdduce una palabra:");

if (!palabra) {
    alert("Por favor, introduce una palabra válida.");
} else {
    let texto = palabra.toLowerCase().split("").join("").trim();

    let invertida = texto.split("").reverse().join("");

    if (texto === invertida) {
        alert(`La palabra "${palabra}" es un palíndromo.`);
    } else {
        alert(`La palabra "${palabra}" no es un palíndromo.`);      
    }
}