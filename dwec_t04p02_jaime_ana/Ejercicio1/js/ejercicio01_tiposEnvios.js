console.log("T02 - Ejercicio 01");

class TiposEnvios {
    #listaTipos;

    constructor() {
        this.#listaTipos = new Map();
    }

    addTipoEnvio(tipoEnvio) {
        if (!(tipoEnvio instanceof TipoEnvio)) {
            throw new Error("No es una instancia de TipoEnvio");
        }
        if (this.#listaTipos.has(tipoEnvio.id)) {
            throw new Error("Ya existe un tipo de envio con ese ID");
        }
        this.#listaTipos.set(tipoEnvio.id, tipoEnvio);
        console.log(`Tipo de envio con ID ${tipoEnvio.id} añadido.`);
    }

    getTipoEnvioPorId(id) {
        if (!Util.validarEntero(id) || Number(id) <= 0) {
            return null;
        }
        return this.#listaTipos.get(Number(id)) || null;
    }

    get size() {
        return this.#listaTipos.size;
    }

    listar() {
        if (this.size === 0) {
            return "*** Colección Tipos de Envío (total: 0) ***\nNo hay tipos de envío en la colección.";
        }
        let output = `*** Colección Tipos de Envío (total: ${this.size}) ***\n`;
        this.#listaTipos.forEach((tipoEnvio) => {
            output+= `${tipoEnvio.mostrar()}\n***\n`;
        });
        return output;
    }
}

