

console.log("T03 - Ejercicio 22b");

function calcularLetraDNI(num) {
    const tabla = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = num % 23;
    return tabla.charAt(resto);
}

function validarDNI(cadena) {
    //formato 8 digitos + letra
    const patt = /^[0-9]{8}[A-Z]$/;
    if (!patt.test(cadena)) return false;

    let numero = parseInt(cadena.substr(0,8), 10);
    let letra = cadena.charAt(8).toUpperCase();
    let letraEsperada = calcularLetraDNI(numero);

    return letra === letraEsperada;
}

//para CIF
function validarCIF(cadena) {
    const patt = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;
    if (!patt.test(cadena)) return false;

    cadena = cadena.toUpperCase();
    let letraInicial = cadena.charAt(0);
    let cuerpo = cadena.substr(1, 7);
    let control = cadena.charAt(8); //caracter de control

    //suma de digitos en posiciones impares
    let sumaImpares = 0;
    for (let i = 1; i < 7; i+= 2) {
        sumaImpares += parseInt(cuerpo.charAt(i), 10);
    }


    //suma de digitos en posiciones pares
    let sumaParesTranformada = 0;
    for (let i = 0; i < 7; i += 2) {
        let d = parseInt(cuerpo.charAt(i), 10) * 2;
        //si d es mayor o igual a 10, sumar digitos (ejemplo: 12 -> 1 + 2 = 3)
        sumaParesTranformada += Math.floor(d / 10) + (d % 10);
    }

    let sumaTotal = sumaImpares + sumaParesTranformada;
    //tomar el mmodulo 10 del total
    let resto = sumaTotal % 10;
    //si resto = 0 -> digito = 0, si no, digito = 10 - resto
    let digitoControl = (resto === 0) ? 0 : (10 - resto);

    //convertir digito de control a caracter (0-9 -> "0" - "9", 10 -> "A" etc...)
    let controlEsperado;
    //en algunos CIF, los digitos de control del 10 -> A, 11 -> B, etc. (A-J)
    const mapControl = "JABCDEFGHI"; //10->J, 11->A, 12->B...
    if (digitoControl < 10) {
        controlEsperado = digitoControl.toString();
    } else {
        controlEsperado = mapControl.charAt(digitoControl - 10);
    }

    //en algunos casos el caracter de control puede ser numérico o letra
    return control === controlEsperado;
}

function validarDNIyCIFControl(cadena) {
    cadena = cadena.toUpperCase();
    if (validarDNI(cadena)) {
        return true;
    }
    if (validarCIF(cadena)){
            return true;
    }
    return false;
}

console.log(validarDNI("12345678Z")); //true porque 12345678 % 23 = 14 -> Z
console.log(validarDNI("12345678A")); //false 

console.log(validarCIF("A58818501")); //dependera de que coincida con el algoritmo
console.log(validarCIF("B1234567J")); 

console.log(validarDNIyCIFControl("12345678Z"));
console.log(validarDNIyCIFControl("A58818501"));
console.log(validarDNIyCIFControl("B1234567J"));
console.log(validarDNIyCIFControl("12345678A")); //false