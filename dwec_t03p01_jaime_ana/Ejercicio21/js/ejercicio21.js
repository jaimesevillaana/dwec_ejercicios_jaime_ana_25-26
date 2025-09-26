

console.log("T03 - Ejercicio 21");


function validarTelefono(numero) {
    var patt = new RegExp('^[8,9,6,7]\\d{8}$');
    return patt.test(numero);
}

console.log(validarTelefono("656714020")); //true empieza por 6
console.log(validarTelefono("712345654")); //true empieza por 7
console.log(validarTelefono("897654328")); //true empieza por 8
console.log(validarTelefono("345323456")); //false no empieza por 6,7,8,9
console.log(validarTelefono("65478930")); //false no tiene 9 digitos
console.log(validarTelefono("7876567654")); //false tiene mas de 9 digitos
console.log(validarTelefono("asderftgh")); //false no numerico