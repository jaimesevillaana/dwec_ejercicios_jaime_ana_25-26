console.log("T02 - Ejercicio 05");

const n1 = Number(prompt("Introduce el primer numero:"));
const n2 = Number(prompt("Introduce el segundo numero:"));
const n3 = Number(prompt("Introduce el tercer numero:"));
const n4 = Number(prompt("Introduce el cuarto numero:"));
const n5 = Number(prompt("Introduce el quinto numero:"));

const media = (n1 + n2 + n3 + n4 + n5) / 5;

alert("La media de los números es: " + media);

let resultado = "";

if (n1 > media) resultado += n1 + " ";
if (n2 > media) resultado += n2 + " ";
if (n3 > media) resultado += n3 + " ";
if (n4 > media) resultado += n4 + " ";
if (n5 > media) resultado += n5 + " ";


if(resultado){
    alert("Los números superiores a la media son: " + resultado);
} else {
    alert("No hay números superiores a la media.");
}