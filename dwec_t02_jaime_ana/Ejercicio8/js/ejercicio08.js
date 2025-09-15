console.log("T02 - Ejercicio 08");

function calcularMenor(a, b) {
    return (a< b ? a : b);
}

let num1;
do {
    num1 = prompt("Introduce el primer número entero:");
    if(isNaN(num1) || !Number.isInteger(Number(num1))){
        alert("Por favor, introduce un número entero válido.");
    }
} while (isNaN(num1) || !Number.isInteger(Number(num1)));
num1 = Number(num1);

let num2;
do {
    num2 = prompt("Introduce el segundo número entero:");
    if(isNaN(num2) || !Number.isInteger(Number(num2))){
        alert("Por favor, introduce un número entero válido:")
    }
} while (isNaN(num2) || !Number.isInteger(Number(num2)));
num2 = Number(num2);

const menor = calcularMenor(num1, num2);
alert("El número menor es: " + menor);

const inicio = num1 < num2 ? num1 + 1 : num2 + 1;
const fin = num1 < num2 ? num2 : num1;
const numerosIntermedios = [];
for (let i = inicio; i < fin; i++) {
    numerosIntermedios.push(i);
}

if(numerosIntermedios.length > 0){
    console.table(numerosIntermedios);
} else {
    console.log("No hay números intermedios entre " + num1 + " y " + num2 + ".");
}

const count = numerosIntermedios.length;
console.log("Cantidad de números entre " + num1 + " y " + num2 + ": " + count);