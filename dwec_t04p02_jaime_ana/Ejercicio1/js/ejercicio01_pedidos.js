console.log("T02 - Ejercicio 01");

class Pedido {
    
    #listaPedidos;
    constructor() {
        this.#listaPedidos = new Map();
    }

    addPedido(pedido) {
        if (!(pedido instanceof Pedido)) {
            throw new Error("El parámetro no es una instancia de Pedido");
        }
        this.#listaPedidos.set(pedido.id, pedido);
    }

    getPedido(id) {
        if (!Util.validarEntero(id) || Number(id) <= 0) {
            return null;
        }
        return this.#listaPedidos.get(Number(id)) || null;
    }

    get size() {
        return this.#listaPedidos.size;
    }

    listar() {
        if (this.size === 0) {
            return "*** Colección Pedidos (total: 0) ***\nNo hay pedidos en la colección.";
        }
        let output = `*** Colección Pedidos (total: ${this.size}) ***\n`;
        this.#listaPedidos.forEach((pedido) => {
            output+= `Pedido ID: ${pedido.id}, Cliente ID: ${pedido.idCliente}, Fecha: ${pedido.fechaPedido.toLocaleDateString()}, Tipo de Envío: ${pedido.tipoEnvio.nombre}\n***\n`;
        });
        return output;
    }

}

