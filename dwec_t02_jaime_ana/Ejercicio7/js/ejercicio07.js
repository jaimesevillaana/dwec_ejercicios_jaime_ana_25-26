console.log("T02 - Ejercicio 07");

let num1, num2;
do {
    do {
        num1 = prompt("Introduce el primer número entero (que no sea 0):");
        if(isNaN(num1) || !Number.isInteger(Number(num1))){
            alert("Por favor, introduce un número entero válido.")
        }
    } while ((isNaN(num1) || !Number.isInteger(Number(num1))));
    num1 = Number(num1);

    do {
        num2 = prompt("Introduce el segundo número entero (que no sea 0):");
        if(isNaN(num2) || !Number.isInteger(Number(num2))){
            alert("Por favor, introduce un número entero válido.")
        }
    } while (isNaN(num2) || !Number.isInteger(Number(num2)));
    num2 = Number(num2);

    alert("Pareja introducida: (" + num1 + ", " + num2 + ")");
} while (num1 !== num2 && num1 !== 0 && num2 !== 0);

if(num1 === num2){
    alert("Los números son iguales: " + num1);
} else {
    alert("Uno de los números es 0: () + num1 + ", " + nnum2 +");
}