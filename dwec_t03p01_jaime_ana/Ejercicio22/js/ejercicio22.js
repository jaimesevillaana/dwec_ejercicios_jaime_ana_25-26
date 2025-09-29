

console.log("T03 - Ejercicio 22");

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

    cadena = cadena.toUpperCase();

    const patt = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-JXP]$/;
    if (!patt.test(cadena)) return false;

    let letraInicial = cadena.charAt(0);
    let digitos = cadena.substr(1, 7);
    let controlTotal = cadena.charAt(8); //ultimo caracter de control

    //suma de digitos en posiciones impares
    let sumaImpares = 0;
    for (let i = 0; i < digitos.length; i+= 2) {
        let doble = parseInt(digitos[i], 10) * 2;
        if (doble >= 10) {
            sumaImpares += Math.floor(doble / 10) + (doble % 10);
        } else {
            sumaImpares += doble;
        }
    }


    //suma de digitos en posiciones pares
    let sumaPares = 0;
    for (let i = 0; i < digitos.length; i += 2) {
        sumaPares += parseInt(digitos[i], 10);
    }

    let sumaTotal = sumaPares + sumaImpares;
    //tomar el mmodulo 10 del total
    let resto = sumaTotal % 10;
    //si resto = 0 -> digito = 0, si no, digito = 10 - resto
    let digitoControl = (10 - resto) % 10;

    //validar control según reglas
    if (letraInicial === 'X' || letraInicial === 'P') {

        //X o P -> letra esperada según ASCII
        let letraEsperada = String.fromCharCode(64 + digitoControl);
        return controlTotal == letraEsperada;
    } else if (!isNaN(controlTotal)) {
        //control numérico
        return parseInt(controlTotal, 10) === digitoControl;
    } else {
        //control letra A-J
        const letrasControl = ['A','B','C','D','E','F','G','H','I','J'];
        return controlTotal == letrasControl[digitoControl - 1];
    }
}

function validarDNIyCIFControl(cadena) {
    cadena = cadena.toUpperCase();

    if (validarDNI(cadena)) {
        return "DNI válido";
    }
    if (validarCIF(cadena)){
            return "CIF válido";
    }
    return "Documento inválido";
}


console.log(validarDNIyCIFControl("12345678Z")); //DNI válido
console.log(validarDNIyCIFControl("A58818501")); //depende del control
console.log(validarDNIyCIFControl("B1234567J")); //depende del control
console.log(validarDNIyCIFControl("12345678A")); //false
console.log(validarDNIyCIFControl("X1234567A")); //CIF válido
console.log(validarDNIyCIFControl("P1234567C")); //CIF válido

