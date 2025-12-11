console.log("T02 - Ejercicio 01");

class Util {

    //METODOS DE VALIDACION usados por leerDatosPrompt


    static validarEntero(valor) {
        if (valor === null || valor === undefined || valor === "") return false;
        const n = Number(valor);
        return Number.isInteger(n);
    }


    static validarReal(valor) {
        if (valor === null || valor === undefined || valor === "") return false;
        const n = Number(valor);
        return !Number.isNaN(n);
    }


    static validarTitulo(titulo) {
        return (typeof titulo === "string" && titulo.trim().length >= 1);
    }


    static validarNombrePersona(nombre) {
        if (typeof nombre !== "string") return false;
        const limpio = nombre.trim();
        if (limpio.length < 3) return false;
        return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s\.\-]+$/.test(limpio);
    }


    static validarDireccion(dir) {
        return (typeof dir === "string" && dir.trim().length >= 3);
    }


    static validarAutor(nombre) {
        return Util.validarNombrePersona(nombre);
    }


    static validarPrecio(precio) {
        return Util.validarReal(precio) && Number(precio) > 0;
    }


    static validarFormato(formato, setValidos) {
        if (!formato) return false;
        return setValidos.has(String(formato).toLowerCase());
    }


    static validarGenero(genero, setValidos) {
        if (!genero) return false;
        return setValidos.has(genero);
    }


    static validarTamanoArchivo(tam) {
        return Util.validarReal(tam) && Number(tam) > 0;
    }


    static validarPeso(peso) {
        return Util.validarReal(peso) && Number(peso) > 0;
    }


    static validarStock(stock) {
        return Util.validarEntero(stock) && Number(stock) >= 0;
    }


    static validarDimensiones(dim) {
        if (typeof dim !== "string") return false;
        return /^[0-9]+x[0-9]+x[0-9]+$/i.test(dim.trim());
    }



    static validarFecha(fechaStr) {
        const d = new Date(fechaStr);
        return !isNaN(d.getTime());
    }


    static validarCadenaFecha(cad) {
        if (typeof cad !== "string") return false;

        cad = cad.trim();

        // 1 o 2 dígitos / 1 o 2 dígitos / 4 dígitos
        const regex = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/;

        return regex.test(cad);
    }


    static validarDiasEnvio(dias) {
        return Util.validarReal(dias) && Number(dias) > 0;
    }


}