console.log("T02 - Ejercicio 14");

let num = parseInt(prompt("Introduce un número entero positivo:"));
if (isNaN(num) || num <= 0) {
    alert("Por favor, introduce un número entero positivo válido.");
} else {
    let sumaDivisores = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumaDivisores += i;
        }   
    }

    if (sumaDivisores > num) {
        alert(`${num} es un numero abundante.`);
    } else {
        alert(`${num} no es un numero abundante.`);
    }   
}