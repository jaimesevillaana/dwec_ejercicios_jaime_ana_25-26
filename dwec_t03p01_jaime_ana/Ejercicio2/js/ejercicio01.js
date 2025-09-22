/*
* La diferencia que hay entre el método toFixed() y toPrecision() 
* es que toFixed() formatea un número usando notación de punto fijo,
* mientras que toPrecision() formatea un número a una longitud 
* específica (número total de dígitos).
*/ 

console.log("T03 - Ejercicio 01");


//Ejemplo toFixed()

let num = 123.456789;

console.log(num.toFixed(0)); // "123" redondea

console.log(num.toFixed(2)); // "123.46" dos decimales

console.log(num.toFixed(4)); // "123.4568" cuatro decimales

//Ejemplo toPrecision()

console.log(num.toPrecision(2)); // "1.2" dos digitos

console.log(num.toPrecision(4)); // "123.4" cuatro digitos

console.log(num.toPrecision(6)); // "123.457" seis digitos