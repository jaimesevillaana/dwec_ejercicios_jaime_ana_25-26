
console.log("T03 - Ejercicio 23");


function validarFormatoFecha(cadena) {
    var patt = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](\d{4}|\d{2})$/);

    return patt.test(cadena);

}

console.log(validarFormatoFecha("28-09-2025")); //true -> DD-MM-YYYY
console.log(validarFormatoFecha("28-09-25"));   // true  -> DD-MM-YY
console.log(validarFormatoFecha("28/09/2025")); // true  -> DD/MM/YYYY
console.log(validarFormatoFecha("28/09/25"));   // true  -> DD/MM/YY


console.log(validarFormatoFecha("28-9-2025"));  // false -> mes con 1 dígito
console.log(validarFormatoFecha("28/09/202"));  // false -> año con 3 dígitos
console.log(validarFormatoFecha("2025-09-28")); // false -> formato incorrecto



