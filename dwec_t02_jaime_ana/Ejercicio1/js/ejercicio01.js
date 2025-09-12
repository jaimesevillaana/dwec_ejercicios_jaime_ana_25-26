console.log("T02 - Ejercicio 01");
let num1 = parseInt(prompt("Introduce la primera nota:"));
let num2 = parseInt(prompt("Introduce la segunda nota:"));
let num3 = parseInt(prompt("Introduce la tercera nota:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10) {
    alert("Por favor, introduce notas válidas entre 0 y 10.");
} else {    

let  media = (num1 + num2 + num3) / 3;

let calificacion = "";

if (media < 5) {
    calificacion = "SUSPENSO";
} else if (media >= 5 && media < 7) {
    calificacion = "APROBADO";
} else if (media >= 7 && media < 8.5) {
    calificacion = "NOTABLE";
} else if (media >= 8.5 && media <= 10) {
    calificacion = "SOBRESALIENTE";
} else {
    alert("la media no se puede calcular")
}

alert("La media es: " + media.toFixed(2) + " - Calificación: " + calificacion);
}
