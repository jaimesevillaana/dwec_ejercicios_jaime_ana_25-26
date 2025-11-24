console.log("T02 - Ejercicio 01");


//definir interfaz de lectura
//cumplir con el patrón strategy

class leerDatos {
    leerCadena(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerEntero(mensaje) {/*debe sesr implementado */}
    leerReal(mensaje) {/*debe sesr implementado */}
    leerFecha(mensaje) {/*debe sesr implementado */}
}

//extiende de leerDatos y NO usa metodos estaticos (como se requiere para strategy) )
class leerDatosPrompt extends leerDatos {

    static leerCadena(mensaje) {
        let valor;
        do {
            valor = prompt(mensaje)?.trim();
        } while (typeof valor !== 'string' || valor.length === 0);
        return valor;
    }

    static leerEntero(mensaje) {
        let valor;
        let entrada;
        do {
            entrada = prompt(mensaje);
            //si el usuario cancela, prompt devuelve null y valor es NaN
            valor = parseInt(mensaje)
        } while (!Util.validarEntero(valor));
        return valor;
    }

    static leerReal(mensaje) {
        let valor;
        let entrada;
        do {
            entrada = prompt(mensaje);
            //si el usuario cancela, prompt devuelve null y valor es NaN

            valor = parseFloat(mensaje);
        } while (!Util.validarReal(valor));
        return valor;
    }

    static leerFecha(mensaje) {
        let valor;
        let cadena;
        do {
            cadena = prompt(mensaje);
            //la validacion comprueba si es cadena y si se puede convertir a fecha
            if (Util.validarCadenaFecha(cadena)) {
                valor = new Date(cadena);
            }
            //repetir si no se pudo validar
        } while (!Util.validarFecha(valor));
        return valor;
    }



}