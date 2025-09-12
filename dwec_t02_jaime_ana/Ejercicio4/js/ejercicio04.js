console.log("T02 - Ejercicio 02");

let numero = parseInt(prompt("Introduce un número entero:"));

let mensaje = "";

if (numero % 2 === 0 && numero % 5 === 0) {
    mensaje = "El número " + numero + " es multiplo de 2 y 5.";
} else if (numero % 2 === 0) {
    mensaje = "El número " + numero + " es multiplo de 2.";
} else if (numero % 5 === 0) {
    mensaje = "El número " + numero + " es multiplo de 5.";
} else {
    mensaje = "El número " + numero + " no es multiplo de 2 ni de 5.";
}
alert(mensaje);
