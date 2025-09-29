
console.log("T03 - Ejercicio 23");


function validarFormatoFecha(cadena) {
    var patt = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](\d{4}|\d{2})$/);

    return patt.test(cadena);
}

function validarFecha(cadena) {
    if (!validarFormatoFecha(cadena)) {
        return false; //formato incorrecto
    }

    //detectar el separador usando (- o /)
    let separador = cadena.includes(" ") ? "-" : "/";

    //dividir en partes
    let partes = cadena.split(separador);

    //asegurar de que hay realmente 3 partes
    if (partes.length !== 3) return false;

    
    let dia = parseInt(partes[0], 10);
    let mes = parseInt(partes[1], 10);
    let anio = parseInt(partes[2], 10);

    //ajuste de siglo para años de 2 digitos
    if (partes[2].length === 2) {
        if (anio >= 0 && anio <= 49) {
            anio = 2000 + anio; // 00-49 -> 2000-2049
        } else {
            anio = 1900 + anio; //50-99 -> 1950-1999
        }
    }

    //crear objeto Date
    let fecha = new Date(anio, mes, dia);

    //verificar que el objeto coincide con los valores introducidos

    return (
        fecha.getFullYear() === anio &&
        fecha.getMonth() === mes &&
        fecha.getDate() === dia
    );
}

console.log(validarFecha("28-09-25"));   // true (2025)
console.log(validarFecha("28/09/49"));   // true (2049)
console.log(validarFecha("28/09/50"));   // true (1950)
console.log(validarFecha("28-09-99"));   // true (1999)
console.log(validarFecha("31/02/23"));   // false (fecha inválida)


console.log(validarFormatoFecha("28-09-2025")); //true -> DD-MM-YYYY
console.log(validarFormatoFecha("28-09-25"));   // true  -> DD-MM-YY
console.log(validarFormatoFecha("28/09/2025")); // true  -> DD/MM/YYYY
console.log(validarFormatoFecha("28/09/25"));   // true  -> DD/MM/YY


console.log(validarFormatoFecha("28-9-2025"));  // false -> mes con 1 dígito
console.log(validarFormatoFecha("28/09/202"));  // false -> año con 3 dígitos
console.log(validarFormatoFecha("2025-09-28")); // false -> formato incorrecto



