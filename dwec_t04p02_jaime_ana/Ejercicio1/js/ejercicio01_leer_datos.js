console.log("T02 - Ejercicio 01");

class leerDatosPrompt {

    static leerCadena(mensaje) {
        let valor;
        do {
            valor = prompt(mensaje)?.trim();
        } while (!valor);
        return valor;
    }

    static leerEntero(mensaje) {
        let valor;
        do {
            valor = parseInt(prompt(mensaje))
        } while (!Util.validarEntero(valor));
        return valor;
    }

    static leerReal(mensaje) {
        let valor;
        do {
            valor = parseFloat(prompt(mensaje));
        } while (!Util.validarReal(valor));
        return valor;
    }

    static leerFecha(mensaje) {
        let valor;
        do {
            const cadena = prompt(mensaje);
            if (Util.validarCadenaFecha(cadena)) {
                valor = new Date(cadena);
            }
        } while (!Util.validarCadenaFecha(valor));
        return valor;
    }

}