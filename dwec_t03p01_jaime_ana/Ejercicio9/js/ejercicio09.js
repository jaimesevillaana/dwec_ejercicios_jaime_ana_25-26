/*
* Haz un script que pida al usuario cuántos números quiere introducir,
* después los introducirá en un array y finalmente mostrará el menor 
* y el mayor. Para mostrar el menor y el mayor deberás hacer uso de 
* los métodos "max()" y "min()" del objeto Math.
*/ 
console.log("T03 - Ejercicio 09");

let cantidad = parseInt(prompt("¿Cuántos números quieres introducir?"));

//array vacio
let numeros = [];

//pedir los numeros uno detras de otro
for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt("Introduce el número " + (i + 1) + ":"));
    numeros.push(num);
}

//calcular el mayor y menor 
let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

//resultados
alert("Los números introducidos son: " + numeros.join(", "));
alert("El número mayor es: " + mayor);
alert("El número menor es: " + menor);
