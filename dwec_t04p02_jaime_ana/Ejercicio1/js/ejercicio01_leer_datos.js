console.log("T02 - Ejercicio 01");


//definir interfaz de lectura
//cumplir con el patrón strategy

class LeerDatos {

    
    leerEntero(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerEnteroHasta(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerEnteroEntre(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerEnteroEntreHasta(mensaje, min, max) { throw new Error("Método no implementado."); }
    leerReal(mensaje) {throw("Método no implementado") /*debe sesr implementado */}
    leerCadena(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerCadenaHasta(mensaje) {throw("Método no implementado")/*debe sesr implementado */}
    leerFecha(mensaje) {throw("Método no implementado") /*debe sesr implementado */}
}

//extiende de leerDatos y NO usa metodos estaticos (como se requiere para strategy)
class LeerDatosPrompt extends LeerDatos {

    leerEntero(mensaje_o_id) {
        const r = prompt(mensaje_o_id);
        if (!Util.validarEntero(r)) {
            throw new Error("ERROR: debe introducir un número entero");
        }
        return Number(r);
    }

    leerEnteroHasta(mensaje_o_id) {
        let valor;
        let valido = false;
        do {
            try {
                valor = this.leerEntero(mensaje_o_id);
                valido = true;
            } catch (e) {
                alert(e.message);
            }
        } while (!valido);
        return valor;
    }

    leerEnteroEntre(mensaje_o_id, min, max) {
        const r = this.leerEntero(mensaje_o_id);
        if (r < min || r > max) {
            throw new Error(`ERROR: el número debe estar entre ${min} y ${max}`);
        }
        return r;
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {
        let valor;
        let valido = false;
        do {
            try {
                valor = this.leerEnteroEntre(mensaje_o_id, min, max);
                valido = true;
            } catch (e) {
                alert(e.message);
            }
        } while (!valido);
        return valor;
    }

    leerReal(mensaje_o_id) {
        const r = prompt(mensaje_o_id);
        if (!Util.validarReal(r)) {
            throw new Error("ERROR: debe introducir un número real válido");
        }
        return Number(r);
    }

    leerCadena(mensaje_o_id) {
        const r = prompt(mensaje_o_id);
        if (r === null || r.trim().length === 0) {
            throw new Error("ERROR: la cadena no puede estar vacía");
        }
        return r.trim();
    } 

    leerCadenaHasta(mensaje_o_id, longitud = 1) {
        let valor;
        let valido = false;

        do {
            try {
                valor = this.leerCadena(mensaje_o_id);
                if (valor.length < longitud) {
                    throw new Error(`ERROR: debe tener al menos ${longitud} caracteres`);
                }
                valido = true;
            } catch (e) {
                alert(e.message);
            }
        } while (!valido);

        return valor;
    }

    leerFecha(mensaje_o_id) {
        let cadena = prompt(mensaje_o_id);

        if (!Util.validarCadenaFecha(cadena)) {
            throw new Error("ERROR: formato de fecha no válido");
        }
        if (!Util.validarFecha(cadena)) {
            throw new Error("ERROR: la fecha no existe");
        }
        return cadena.trim();
    }

}