

console.log("T03 - Ejercicio 21");


function validarTelefono(numero) {
    if (numero.length !== 9) return false;
    var patt = new RegExp('^[6,7,8,9]\\d{8}$');
    return patt.test(numero);
}


//validar numero con prefijo internacional +34
function validarPrefijoTelefonoEsp(cadena) {
    if (cadena.length !== 12) return false;
    var patt = new RegExp('^\\+34[6,7,8,9]\\d{8}$');
    return patt.test(cadena);
}

//validar con o sin prefijo
function validarTelefonoConSin(cadena) {
    if (cadena.startsWith("+34")) {
        return validarPrefijoTelefonoEsp(cadena);
    } else {
        return validarTelefono(cadena);
    }
}

console.log(validarTelefono("656714020")); //true empieza por 6
console.log(validarTelefono("712345654")); //true empieza por 7
console.log(validarTelefono("897654328")); //true empieza por 8
console.log(validarTelefono("345323456")); //false no empieza por 6,7,8,9
console.log(validarTelefono("65478930")); //false no tiene 9 digitos
console.log(validarTelefono("7876567654")); //false tiene mas de 9 digitos
console.log(validarTelefono("asderftgh")); //false no numerico

//sin prefijo
console.log(validarTelefonoConSin("612345678"));  //true móvil válido
console.log(validarTelefonoConSin("812345678"));  //true fijo válido
console.log(validarTelefonoConSin("512345678"));  //false empieza por 5

//con prefijo
console.log(validarTelefonoConSin("+34612345678")); //true móvil válido con +34
console.log(validarTelefonoConSin("+34812345678")); //true fijo válido con +34
console.log(validarTelefonoConSin("+34512345678")); //false empieza por 5
console.log(validarTelefonoConSin("+3461234567")); //false 8 digitos