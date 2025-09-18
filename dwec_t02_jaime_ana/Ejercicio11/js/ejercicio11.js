console.log("T02 - Ejercicio 11");

function factorialImpar(n){
    if (n <= 0) return 1;
    if(n % 2 === 0) return factorialImpar(n - 1);
    if (n === 1) return 1;
    return n * factorialImpar(n - 2); //recursion con impares 
}

let num = parseInt(prompt("Introduce un número:"));

if (isNaN(num)) {
    alert("Por favor, introduce un número válido.");
} else if (num < 1) {
    alert("Por favor, introduce un número mayor o igual a 1.");
} else {
    let resultado = factorialImpar(num);
    alert(`El factorial impar de ${num} es ${resultado}`);
}   