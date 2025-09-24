/*
* Investiga sobre los métodos para redondear del objeto Math: 
* "ceil()", "floor()" y "round()". 
* ceil() -> redondea hacia arriba
* floor() -> redondea a la baja
* round() -> redondea al entero mas cercano
* Haz un ejemplo donde los uses 
* y se observe la diferencia entre cada uno de ellos.
*/
console.log("T03 - Ejercicio 10");

let num1 = 4.1;
let num2 = 4.5;
let num3 = 4.9;

console.log("Número:", num1);
console.log("ceil:", Math.ceil(num1)); // 5
console.log("floor:", Math.floor(num1)); // 4
console.log("round:", Math.round(num1)); // 4

console.log("Número:", num2);
console.log("ceil:", Math.ceil(num2)); // 5
console.log("floor:", Math.floor(num2)); // 4
console.log("round:", Math.round(num2)); // 5

console.log("Número:", num3);
console.log("ceil:", Math.ceil(num3)); // 5
console.log("floor:", Math.floor(num3)); // 4
console.log("round:", Math.round(num3)); // 5
