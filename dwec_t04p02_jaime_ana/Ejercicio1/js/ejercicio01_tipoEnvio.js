console.log("T02 - Ejercicio 01");


class TipoEnvio {

    static #contadorTiposEnvio = 1;

    #id;
    #nombre;
    #precio;

    constructor(nombre, precio) {

        this.#id = TipoEnvio.#contadorTiposEnvio++;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    //getters
    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    //setters
    set nombre(valor) {
        if (!Util.validarTitulo(valor)) {
            throw new Error("TipoEnvio: Nombre invalido.");
        }
        this.#nombre = valor.trim();
    }

    set precio(valor) {
        if (!Util.validarReal(valor)) {
            throw new Error("TipoEnvio: Precio invalido.");
        }
        const precioNumero = Number(valor);
        if (precioNumero < 0) {
            throw new Error("TipoEnvio: Precio no puede ser negativo.");
        }
        this.#precio = precioNumero;
    }

    //metodos

    mostrar() {
        return `Tipo de envio: ${this.#nombre} - Precio: ${this.#precio.toFixed(2)} €`;
    }
}
