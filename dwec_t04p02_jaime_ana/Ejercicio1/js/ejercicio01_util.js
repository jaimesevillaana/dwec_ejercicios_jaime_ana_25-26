console.log("T02 - Ejercicio 01");

class Util {
    static validarEntero(valor) {
        if (valor === null || typeof valor )
        return Number.isInteger(valor);
    }

    static validarReal(valor) {
        return typeof valor === "number" && !Number.isNaN(valor);
    }

    static validarCadenaFecha(valor) {
        if (typeof valor !== "string") {
            return false;
        }
        const d = Date.parse(valor);
        return !Number.isNaN(d);
    }

    static validarFecha(valor) {
        return valor instanceof Date && !Number.isNaN(valor.getTime());
    }

    static validarTitulo(titulo) {
        return typeof titulo === "string" && titulo.trim().length > 0;
    }

    static validarNombrePersona(nombre) {
        return typeof nombre === "string" && /^[A-Za-zÀ-ÿ\s]{3,}$/.test(nombre.trim());
    }

    static validarPrecio(precio) {
        return this.validarReal(precio) && precio >= 0;
    }

    static validarTamanoArchivo(tamano) {
        return this.validarReal(tamano) && tamano >= 0;
    }

    static validarPeso(peso) {
        return this.validarReal(peso) && peso >= 0;
    }

    static validarDimensiones(dimensiones) {
        //el test() se aplica sobre la cadena ya 'trimeada'
        const patron = /^\d+(\.\d+)?x\d+(\.\d+)?x\d+(\.\d+)?$/;
        return typeof dimensiones === "string" && patron.test(dimensiones.trim());
    }

    static esMesPromocion(fecha, array_meses_promocion) {
        if (!(fecha instanceof Date)) {
            return false;
        }
        const mes = fecha.getMonth() + 1;
        return array_meses_promocion.includes(mes);
    }

    static calcularIVA(precio, porcentaje = 21) {
        if (!this.validarReal(precio)) {
            throw new Error("Precio no válido");        
        }
        return precio * (porcentaje / 100);
    }
}