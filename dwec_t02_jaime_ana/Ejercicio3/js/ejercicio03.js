console.log("T02 - Ejercicio 03");

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

const currentYear = new Date().getFullYear();

let continuar = true;

while (continuar){
    let entrada = prompt("Introduce un año:");
    let anio = parseInt(entrada);

    if (isNaN(anio)) {
        alert("Por favor, introduce un año válido.");
    } else if (anio < 0 || anio > currentYear) {
        alert("Por favor, introduce un año entre 0 y " + currentYear + ".");
    } else {
        if (esBisiesto(anio)) {
            alert("El año " + anio + " es bisiesto.");
        } else {
            alert("El año " + anio + " no es bisiesto.");
        }   
    } 
    let respuesta = prompt("¿Quieres comprobar otro año? (s/n):");
    if (respuesta === null || respuesta.toLowerCase() !== 's') {
        continuar = false;
        alert("¡Hasta luego!");
    }      
}