

console.log("T03 - Ejercicio 22");

function validarDNIYCIF(cadena) {
    let cadMayus = cadena.toUpperCase();

    var pattDNI = /^[0-9]{8}[A-Z]$/;

    var pattCIF = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;

    if (pattDNI.test(cadMayus)) {
        return true;
    }

    if (pattCIF.test(cadMayus)) {
        return true;
    }
    return false;
}

let entrada = prompt("Introduce un DNI o CIF: ");

if (validarDNIYCIF(entrada)) {
    console.log(entrada + " tiene formato válido de DNI o CIF");
} else {
    console.log(entrada + " No es un DNI ni CIF válido")
}

console.log(validarDNIYCIF("12345678Z")); //true DNI válido
console.log(validarDNIYCIF("A1234567J")); //true CIF válido
console.log(validarDNIYCIF("B1234567A")); //true CIF válido
console.log(validarDNIYCIF("12345678")); //false DNI no válido, falta letra
console.log(validarDNIYCIF("Z1234567A")); //false CIF no válido, Z no es una inicial válida



