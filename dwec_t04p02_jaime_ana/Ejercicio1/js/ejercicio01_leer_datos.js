console.log("T02 - Ejercicio 01");


//definir interfaz de lectura
//cumplir con el patrón strategy

class leerDatos {

    
    leerCadena(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerEntero(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerReal(mensaje) {throw("Método no implementado") /*debe sesr implementado */}
    leerFecha(mensaje) {throw("Método no implementado") /*debe sesr implementado */}
}

//extiende de leerDatos y NO usa metodos estaticos (como se requiere para strategy) )
class leerDatosPrompt extends leerDatos {

    //limite de intentos para cada lectura
    static MAX_INTENTOS = 3;

    leerCadena(mensaje) {
        let valor;
        let intentos = 0;

        do {
            valor = prompt(mensaje);

            //si el usuario cancela, prompt devuelve null
            if (valor === null) {
                throw new Error("Operación cancelada por el usuario.");
            }
            valor = valor.trim();

            //comprobamos la validez de la cadena
            if (valor.length > 0) {
                return valor;
            }
            intentos++;
            console.log("Entrada inválida. Por favor, ingrese una cadena no vacía.");

        } while (intentos < leerDatosPrompt.MAX_INTENTOS);

        throw new Error("Número máximo de intentos alcanzado.");
    }

    leerEntero(mensaje) {
        let valor;
        let entrada;
        let intentos = 0;

        do {
            entrada = prompt(mensaje);

            if (entrada === null) {
            throw new Error("Operación cancelada por el usuario.");
            }

            if (Util.validarEntero(entrada)) {
                valor = Number(entrada);
                return valor;
            }
            intentos++;
            console.log("Entrada inválida. Por favor, ingrese un número entero.");

        } while (intentos < leerDatosPrompt.MAX_INTENTOS);
        
        throw new Error("Número máximo de intentos alcanzado.");
    }

    leerReal(mensaje) {
        let valor;
        let entrada;
        let intentos = 0;

        do {
            entrada = prompt(mensaje);
            if (entrada === null) {
                throw new Error("Operación cancelada por el usuario.");
            }

            if (Util.validarReal(entrada)) {
                valor = Number(entrada);
                return valor;
            }   
            intentos++;
            console.log("Entrada inválida. Por favor, ingrese un número real.");

        } while (intentos < leerDatosPrompt.MAX_INTENTOS);
        throw new Error("Número máximo de intentos alcanzado.");
    }

    leerFecha(mensaje) {
        let valor;
        let cadena;
        let intentos = 0;

        do {
            entrada = prompt(mensaje);

            if (entrada === null) {
                throw new Error("Operación cancelada por el usuario.");
            }
            if (Util.validarCadenaFecha(entrada)) {
                valor = new Date(cadena);
                if (Util.validarFecha(valor)) {
                    return valor;
                }
            }
            intentos++;
            console.log("Entrada inválida. Por favor, ingrese una fecha válida.");

        } while (intentos < leerDatosPrompt.MAX_INTENTOS);
         throw new Error("Número máximo de intentos alcanzado.");
        
    }



}