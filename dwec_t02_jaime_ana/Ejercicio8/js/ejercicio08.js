console.log("T02 - Ejercicio 08");

function calcularMenor(a, b) {
    return a < b ? a : b;
}

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, introduce números válidos.");
} else if (num1 === num2) {
    alert("Los números son iguales, por lo que no hay numeros entre ellos.");
} else {
    let menor = calcularMenor(num1, num2);
    let mayor = num1 === menor ? num2 : num1;
    
    let lista = [];
    for (let i = menor + 1; i < mayor; i++) {
        lista.push(i);
    }

    alert(`Números entre ${menor} y ${mayor}:`);   // ← backticks
    console.table(lista);
    alert(`Cantidad de números entre ellos: ${lista.length}`);
}




