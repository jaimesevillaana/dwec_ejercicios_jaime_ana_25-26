console.log("T02 - Ejercicio 06");

let num1;
do {
   num1 = prompt("Introduce el primer número entero:"); 
   if (isNaN(num1) || !Number.isInteger(Number(num1))) {
         alert("Por favor, introduce un número entero válido.");
   }
} while ((isNaN(num1) || !Number.isInteger(Number(num1))));
num1 = Number(num1);


let num2;
do {
    num2 = prompt("Introduce el segundo número entero:");
    if (isNaN(num2) || !Number.isInteger(Number(num2))) {
        alert("Por favor, introduce un número entero válido.");
    }
} while ((isNaN(num2) || !Number.isInteger(Number(num2))));
num2 = Number(num2);

const resultadoNegativo = (num1 < 0) !== (num2 < 0);
num1 = Math.abs(num1);
num2 = Math.abs(num2);

let resultado = 0;
for (let i = 0; i < 2; i++) {
    resultado += num1;
}

if(resultadoNegativo) {
    resultado = -resultado;
}

alert("El resultado de "+ num1 + " * " + num2 + " es: " + resultado);
