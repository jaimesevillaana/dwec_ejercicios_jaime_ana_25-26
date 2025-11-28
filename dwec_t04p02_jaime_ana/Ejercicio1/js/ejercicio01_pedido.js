console.log("T02 - Ejercicio 01");

class Pedido {
    static #contadorPedidos = 1;

    #id;
    #idCliente;
    #fechaPedido;
    #libros;
    #tipoEnvio;

    constructor(idCliente, tipoEnvio) {
        this.#id = Pedido.#contadorPedidos++;
        this.#fechaPedido = new Date();
        this.#libros = new Map();

        if (!Util.validarEntero(idCliente) || Number(idCliente) <= 0) {
            throw new Error("Pedido: ID de cliente invalido.");
        }
        this.#idCliente = Number(idCliente);

        this.#tipoEnvio = tipoEnvio;
    }

    //getters
    get id() {
        return this.#id;
    }

    get idCliente() {
        return this.#idCliente;
    }

    get fechaPedido() {
        return this.#fechaPedido;
    }

    get libros() {
        return this.#libros;
    }

    get tipoEnvio() {
        return this.#tipoEnvio;
    }

    //setters
    set tipoEnvio(valor) {
        if (!(valor instanceof TipoEnvio)) {
            throw new Error("Pedido: Tipo de envio invalido.");
        }
        this.#tipoEnvio = valor;
    }
    
    //metodos
    addLibro(libro, unidades) {
        if (!Util.validarEntero(unidades) || Number(unidades) <= 0) {
            throw new Error("Pedido: Unidades invalidas. Debe ser un entero positivo.");
        }
        const isbnNum = Number(isbn);
        const unidadesNum = Number(unidades);

        const actuales = this.#libros.get(isbnNum) || 0;
        this.#libros.set(isbnNum, actuales + unidadesNum);
    }

    //calcular el numero total de unidades de libros en el pedido
    getTotalUnidades() {
        let total = 0;
        this.#libros.forEach((unidades) => {
            total += unidades;
        });
        return total;
    }

    calcularTotal() {
        const costeEnvio = this.#tipoEnvio.precio;
        return `Calculo total no implementado aun. Coste de envio: ${costeEnvio.toFixed(2)} €`;
    }

    toString() {    
        let librosListado = "";
        this.#libros.forEach((unidades, isbn) => {
            librosListado += `ISBN: ${isbn}, Unidades: ${unidades}\n`;
        });
        return `Pedido ID: ${this.#id}
Cliente ID: ${this.#idCliente}
Fecha Pedido: ${this.#fechaPedido.toLocaleDateString()}
Tipo de Envío: ${this.#tipoEnvio.nombre} - Precio: ${this.#tipoEnvio.precio.toFixed(2)} €
Libros en el Pedido:
${librosListado}Total Unidades: ${this.getTotalUnidades()}`;
    } 
}

