console.log("T02 - Ejercicio 01");


class TipoEnvio {
    

    #nombre;
    #diasMaximo;
    #pesoMaximo;
    #precioSinIVA;

    constructor(nombre, diasMaximo, pesoMaximo, precioSinIVA) {

        if (!Util.validarTitulo(nombre)) {
            throw new Error("ERROR: nombre de tipo de envío inválido");
        }
        if (!Util.validarDiasEnvio(diasMaximo)) {
            throw new Error("ERROR: días de envío inválidos");
        }
        if (!Util.validarReal(pesoMaximo) || Number(pesoMaximo) <= 0) {
            throw new Error("ERROR: peso máximo inválido");
        }
        if (!Util.validarReal(precioSinIVA) || Number(precioSinIVA) < 0) {
            throw new Error("ERROR: precio de envío inválido");
        }

        this.#nombre = nombre.trim();
        this.#diasMaximo = Number(diasMaximo);
        this.#pesoMaximo = Number(pesoMaximo);
        this.#precioSinIVA = Number(precioSinIVA);
    }


    get nombre() { return this.#nombre; }
    get diasMaximo() { return this.#diasMaximo; }
    get pesoMaximo() { return this.#pesoMaximo; }
    get precioSinIVA() { return this.#precioSinIVA; }

    mostrarDatosTipoEnvio() {
        return `${this.#nombre} - Máx: ${this.#diasMaximo} días - Peso máx: ${this.#pesoMaximo}g - ${this.#precioSinIVA}€`;
    }
}
