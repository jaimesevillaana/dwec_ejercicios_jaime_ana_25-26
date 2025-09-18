console.log("T02 - Ejercicio 12");

let cantidad = parseFloat(prompt("Introduce la cantidad a invertir:"));
let interes = parseFloat(prompt("Introduce el interés anual (en %):"));
let anios = parseInt(prompt("Introduce el número de años a invertir:"));

//validar datos

if (isNaN(cantidad) || isNaN(interes) || isNaN(anios) || cantidad <= 0 || interes < 0 || anios <= 0) {
    alert("Por favor, introduce valores válidos y mayores que 0 para cantidad, interés y años.");
} else {
    let capitalFinal = cantidad * Math.pow(1 + interes / 100, anios);

    alert(`Después de ${anios} años, habrás obtenido: ${capitalFinal.toFixed(2)} €.`);
}


